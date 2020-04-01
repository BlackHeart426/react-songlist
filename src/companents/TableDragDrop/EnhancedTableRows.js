import PropTypes from "prop-types";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import {componentTags} from "./componentTags";
import IconButton from "@material-ui/core/IconButton";
import React, {useEffect, useRef, useState} from "react";
import {arrayMove, SortableContainer, SortableElement, SortableHandle} from "react-sortable-hoc";
import TableBody from "@material-ui/core/TableBody";
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import {
    getQueueDataActionCreator,
    movePositionInQueue,
    setQueueDataActionCreator
} from "../../store/action/modules/queue";
import {useDispatch, useSelector} from "react-redux";
import {ThemeProvider} from "@material-ui/styles";
import {outerTheme} from "../TablePagination/styles";
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
    const [state, setState] = useState([])
    const dispatch = useDispatch()
    const queueData = useSelector(state => state.queue.list)

    const TableBodySortable = SortableContainer(({ children }) => (
        <TableBody >
            {children}
        </TableBody>
    ));

    useEffect(()=>{
        setState(data)
    },[data])

    const Row = SortableElement((data, index) => {
        const row = data.data[1];
        const indexW = data.data[0];

        let indexNew = parseInt(indexW) + (page * rowsPerPage)
        const isItemSelected = isSelected(row.id);
        const labelId = `enhanced-table-checkbox-${indexNew}`;
        return (
            <>
                <ThemeProvider theme={outerTheme} >
                <TableRow style={{'display':'none'}}  id={row.id+'-propmt'}>
                    <TableCell colSpan="8" >
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
                    id={row.id}

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
                                    onClick={editMode ? event => handleClick(event, row.id) : undefined}
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
                </ThemeProvider>
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
        const newIndexData = arrayMove(state, oldIndex, newIndex)
        // setState(
        //     newIndexData
        // );
        newIndexData.map((item, index) => {
            item.position = index;
            item.idSong = queueData.find((itemData => itemData.id === item.id)).idSong;
            delete item.data.action
            return item
        })
        debugger
        newIndexData.forEach(item => dispatch(setQueueDataActionCreator(item)))
        dispatch(getQueueDataActionCreator())
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
        element.style.display = 'table-row';
    }

    const handlePrompt = (handleAction, id) => {
        const element = document.getElementById(id);
        console.log(element)
        element.style.display = 'none';
        setPrompt(id)
        setAccept(() => () => handleAction())
    }
    useEffect(() => {
        if(prompt) {
            const element = document.getElementById(prompt + '-propmt');
            element.style.display = 'table-row';
        }
    },[prompt])

    const dataSong = Object.entries(state)
    return (
        <TableBodySortable onSortEnd={onSortEnd} useDragHandle
        >
            {dataSong.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
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