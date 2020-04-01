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

    const TableBodySortable = SortableContainer(({ children }) => (
        <TableBody >
            {children}
        </TableBody>
    ));

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
            name: 'People 2',
            status: 'disabled'
        },
        {
            id: 4,
            name: 'People 2',
            status: 'disabled'
        },
        {
            id: 5,
            name: 'People 2',
            status: 'disabled'
        },
        {
            id: 6,
            name: 'People 2',
            status: 'disabled'
        },
        {
            id: 7,
            name: 'People 2',
            status: 'disabled'
        },
        {
            id: 8,
            name: 'People 2',
            status: 'disabled'
        },
        {
            id: 9,
            name: 'People 2',
            status: 'disabled'
        },
        {
            id: 10,
            name: 'People 1',
            status: 'enabled'
        },
        {
            id: 11,
            name: 'People 1',
            status: 'enabled'
        }
    ]);

    const Row = SortableElement(({ data, ...other }) => {
        return (
            <TableRow {...other}>
                <TableCell style={{ width: '5%' }}>
                    <DragHandle />
                </TableCell>
                <TableCell>
                    {data.id}
                </TableCell>
                <TableCell>
                    {data.name}
                </TableCell>
                <TableCell>
                    {data.status}
                </TableCell>
            </TableRow>
        )
    })

// Строка необходима для того чтобы наш кастомный боди воспринимался как TableBody и в этом случае ошибки не будет
    TableBodySortable.muiName = 'TableBody'


// Компонент который используется активации drag-n-drop при клике внутри компонента
    const DragHandle = SortableHandle(({ style }) => (
        <span style={{ ...style, ...{ cursor: 'move' } }} >{'::::'}</span>)
    );

    const onSortEnd = ({oldIndex, newIndex}) => {
        debugger
        console.log('1')
        setPeople(
            arrayMove(people, oldIndex, newIndex),
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


    return (
        <TableBodySortable onSortEnd={onSortEnd} useDragHandle
        >
            {people.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                console.log('sort')
                return (
                    <Row
                        index={index}
                        key={row.id}
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