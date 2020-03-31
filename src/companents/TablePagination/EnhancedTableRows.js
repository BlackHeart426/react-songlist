import PropTypes from "prop-types";
import {getComparator, stableSort} from "./stableSort";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import {componentTags} from "./componentTags";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import React, {useEffect, useRef, useState} from "react";
import {ThemeProvider} from "@material-ui/styles";
import {outerTheme} from "./styles";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from '@material-ui/icons/Close';

const active = {
    'color': 'rgba(0, 0, 0, 0.88)',
};

const defaultColor = {
    'color': 'rgba(255, 0, 0, 0.87)',
};

export const EnhancedTableRows = (props) => {
    const { data, order, isSelected, handleClick, rowsPerPage, page, orderBy, editMode, showActive } = props;
    const [prompt, setPrompt] = useState('')
    const [accept, setAccept] = useState(() => () => console.log('empty'))

    const handleAccept= () => {
        accept && accept()
        handleCancel()
    }
//TODO найди решение через рендеринг новой строки а не скрывать пустые
    const handleCancel= () => {
        const elementPrompt = document.getElementById(prompt + '-propmt');
        elementPrompt.style.display = 'none';
        const element = document.getElementById(prompt);
        element.style.display = '';
    }

    const handlePrompt = (handleAction, id) => {
        const element = document.getElementById(id);
        element.style.display = 'none';
        console.log(element)
        setPrompt(id)
        setAccept(() => () => handleAction())
    }
    useEffect(() => {
        if(prompt) {
            const element = document.getElementById(prompt + '-propmt');
            element.style.display = '';
        }
    },[prompt])


    return (
        stableSort(data, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
                let indexNew = index + (page * rowsPerPage)
                index = indexNew
                const isItemSelected = isSelected(data[index].id);
                const labelId = `enhanced-table-checkbox-${index}`;
                return (

                    (data[index].active !== undefined ? ( (showActive) || (data[index].active) ) : true ) &&
                    <ThemeProvider theme={outerTheme}  key={ data[index].id }>
                        <TableRow style={{'display':'none'}}  id={data[index].id+'-propmt'}>
                            <TableCell colSpan="7" >
                                <strong>Are you delete current item?</strong>
                            </TableCell>
                            <TableCell align="center" >
                                <IconButton
                                    type="submit"
                                    size={"small"}
                                    color="primary"
                                    onClick={handleAccept}>
                                        <DoneIcon/>
                                </IconButton>
                                <IconButton
                                    type="submit"
                                    size={"small"}
                                    color="primary"
                                    onClick={handleCancel}>
                                        <CloseIcon/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow
                            hover
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            id={data[index].id}
                            onClick={editMode ? event => handleClick(event, data[index].id) : undefined}
                            selected={isItemSelected}
                        >
                            {editMode &&
                            <TableCell padding="checkbox">
                                <Checkbox
                                    value="secondary"
                                    color="primary"
                                    checked={isItemSelected}
                                    inputProps={{'aria-labelledby': labelId}}
                                />
                            </TableCell>
                            }

                            {/*TODO Переписать с типом элемента*/}
                            {Object.keys(row).map((item, indexRow) => (

                                <TableCell align="center" key={indexRow}
                                           style={data[index].active !== undefined ? (data[index].active === true ? active : defaultColor) : active}>

                                    {/*{*/}
                                    {/*    row[item].type === 'tag' &&*/}
                                    {/*    row[item].data.map((tag, indexTag) => (*/}
                                    {/*            <IconButton*/}
                                    {/*                type="submit"*/}
                                    {/*                size="small"*/}
                                    {/*                color="primary"*/}
                                    {/*                key={indexTag}>*/}
                                    {/*                {tag.name}*/}
                                    {/*            </IconButton>*/}
                                    {/*    ))*/}

                                    {/*}*/}
                                    {
                                        row[item].type === 'position' &&
                                        <>{index + 1}</>

                                    }
                                    {

                                        row[item].type === 'tags'
                                        &&  row[item].data.map((tag, indexTag) => (
                                            <img key={indexTag} src={tag.url.toString()} alt="" width={30} height={30}/>
                                        ))


                                    }
                                    {
                                        row[item].type === 'btn'

                                        &&  row[item].data.map((btn, indexBtn) => (
                                            btn.type === 'text'
                                                ? (!editMode
                                                    && <Button
                                                        type="submit"
                                                        color="primary"
                                                        variant="outlined"
                                                        key={data[index].id}
                                                        onClick={() => btn.handle(data[index].id)}
                                                    >
                                                        {btn.name}
                                                    </Button>
                                                )
                                                : (editMode
                                                    && <IconButton
                                                        type="submit"
                                                        size={"small"}
                                                        color="primary"
                                                        key={btn.name}
                                                        onClick={
                                                            btn.name == 'Delete'
                                                            ? (() => handlePrompt(() => btn.handle(data[index].id), data[index].id))
                                                             : () => btn.handle(data[index].id)
                                                        }>
                                                        {componentTags[btn.name]}
                                                    </IconButton>
                                                )
                                        ))

                                    }
                                    {
                                        row[item].type !== 'tags' && row[item].type !== 'btn' && row[item].type !== 'position' && row[item].type !== 'tag' &&
                                        <> {row[item]} </>

                                    }

                                </TableCell>
                                )
                            )}

                        </TableRow>
                    </ThemeProvider>
                );
            })
    )
};


EnhancedTableRows.propTypes = {
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    editMode: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,

};