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
import Table from "@material-ui/core/Table";
import {arrayMove, SortableContainer, SortableElement, SortableHandle} from "react-sortable-hoc";
import TableBody from "@material-ui/core/TableBody";
import {TableRowColumn} from "material-ui/Table";
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';

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
    const [state, setState] = useState([])

    const TableBodySortable = SortableContainer(({ children }) => (
        <TableBody >
            {children}
        </TableBody>
    ));

    useEffect(()=>{
        setState(data)
    },[data])

    const [people, setPeople] = useState( [
        {
            id: 1,
            name: 'People 1',
            status: 'enabled'
        },
        {
            id: 2,
            name: 'People 2',
            status: 'disabled'
        },
        {
            id: 3,
            name: 'People 3',
            status: 'disabled'
        },
        {
            id: 4,
            name: 'People 4',
            status: 'disabled'
        },
        {
            id: 5,
            name: 'People 5',
            status: 'disabled'
        },
        {
            id: 6,
            name: 'People 6',
            status: 'disabled'
        },
        {
            id: 7,
            name: 'People 7',
            status: 'disabled'
        },
        {
            id: 8,
            name: 'People 8',
            status: 'disabled'
        },
        {
            id: 9,
            name: 'People 9',
            status: 'disabled'
        },
        {
            id: 10,
            name: 'People 10',
            status: 'enabled'
        },
        {
            id: 11,
            name: 'People 11',
            status: 'enabled'
        }
    ]);
    // stableSort(data, getComparator(order, orderBy))
    //     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    //     .map((row, index) => {
    //         let indexNew = index + (page * rowsPerPage)
    //         index = indexNew
    //         const isItemSelected = isSelected(data[index].id);
    //         const labelId = `enhanced-table-checkbox-${index}`;
    //         return (
    //
    //             (data[index].active !== undefined ? ( (showActive) || (data[index].active) ) : true ) &&
    //             <ThemeProvider theme={outerTheme}  key={ data[index].id }>
    //
    //             </ThemeProvider>
    //         );
    //     })
    const Row = SortableElement((data, index) => {
        const row = data.data[1];
        const indexW = data.data[0];

        let indexNew = parseInt(indexW) + (page * rowsPerPage)
        const isItemSelected = isSelected(row.id);
        const labelId = `enhanced-table-checkbox-${indexNew}`;
        return (
            <>
                {/*<TableRow style={{'display':'none'}}  id={row.id+'-propmt'}>*/}
                {/*    <TableCell colSpan="7" >*/}
                {/*        <strong>Are you delete current item?</strong>*/}
                {/*    </TableCell>*/}
                {/*    <TableCell align="center" >*/}
                {/*        <IconButton*/}
                {/*            type="submit"*/}
                {/*            size={"small"}*/}
                {/*            color="primary"*/}
                {/*            onClick={handleAccept}>*/}
                {/*            <DoneIcon/>*/}
                {/*        </IconButton>*/}
                {/*        <IconButton*/}
                {/*            type="submit"*/}
                {/*            size={"small"}*/}
                {/*            color="primary"*/}
                {/*            onClick={handleCancel}>*/}
                {/*            <CloseIcon/>*/}
                {/*        </IconButton>*/}
                {/*    </TableCell>*/}
                {/*</TableRow>*/}
                <TableRow
                    hover
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    id={row.id}
                    onClick={editMode ? event => handleClick(event, row.id) : undefined}
                    selected={isItemSelected}
                >
                    {editMode &&
                        <>
                            <TableCell padding="none">
                                <DragHandle />
                            </TableCell>
                            <TableCell padding="checkbox" >
                                <Checkbox
                                    value="secondary"
                                    color="primary"
                                    checked={isItemSelected}
                                    inputProps={{'aria-labelledby': labelId}}
                                />
                            </TableCell>

                        </>
                    }

                    {/*TODO Переписать с типом элемента*/}
                    {Object.keys(row.data).map((item, indexRow) => {
                            return <TableCell
                                align="center"
                                key={indexRow}
                                style={row.active !== undefined ? (row.active === true ? active : defaultColor) : active}>


                                {/*}*/}
                                {
                                    row.data[item].type === 'position' &&
                                    <>{indexNew + 1}</>

                                }

                                {
                                    row.data[item].type === 'btn'

                                    && row.data[item].data.map((btn, indexBtn) => (
                                        (editMode
                                            && <IconButton
                                                type="submit"
                                                size={"small"}
                                                color="primary"
                                                key={btn.name}
                                                onClick={
                                                    btn.name == 'Delete'
                                                        ? (() => handlePrompt(() => btn.handle(row.id), row.id))
                                                        : () => btn.handle(row.id)
                                                }>
                                                {componentTags[btn.name]}
                                            </IconButton>
                                        )
                                    ))

                                }
                                {
                                    row.data[item].type !== 'tags' && row.data[item].type !== 'btn' && row.data[item].type !== 'position' && row.data[item].type !== 'tag' &&
                                    <> {row.data[item]} </>

                                }

                            </TableCell>
                        }
                    )}

                </TableRow>
            </>
        )
    })

// Строка необходима для того чтобы наш кастомный боди воспринимался как TableBody и в этом случае ошибки не будет
    TableBodySortable.muiName = 'TableBody'


// Компонент который используется активации drag-n-drop при клике внутри компонента
    const DragHandle = SortableHandle(({ style }) => (
        <span style={{ ...style, ...{ cursor: 'move' } }} ><DragIndicatorIcon/></span>
        )
    );

    const onSortEnd = ({oldIndex, newIndex}) => {

        const newList = arrayMove(state, oldIndex, newIndex);
        debugger
        setState(
            arrayMove(state, oldIndex, newIndex),
        );
    };

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
        debugger
        const element = document.getElementById(id);
        element.style.display = 'none';
        setPrompt(id)
        setAccept(() => () => handleAction())
    }
    useEffect(() => {
        if(prompt) {
            const element = document.getElementById(prompt + '-propmt');
            element.style.display = '';
        }
    },[prompt])

    const dataSong = Object.entries(state)
    debugger
    return (
        <TableBodySortable onSortEnd={onSortEnd} useDragHandle
        >
            {dataSong.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                console.log('sort')
                return (
                    <Row
                        index={index}
                        key={index}
                        data={row}
                    />
                )
            })}
        </TableBodySortable>
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