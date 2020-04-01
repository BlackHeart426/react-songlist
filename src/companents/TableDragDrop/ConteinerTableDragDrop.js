import React, {useContext, useEffect, useState} from "react";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import {EnhancedTableHead} from "./EnhancedTableHead";
import {EnhancedTableRows} from "./EnhancedTableRows";
import {useStyles} from "./styles";
import {connect, useDispatch, useSelector} from "react-redux";
import LinearProgress from "@material-ui/core/LinearProgress";
import {arrayMove, SortableContainer, SortableElement, SortableHandle} from "react-sortable-hoc";
import {TableRowColumn} from "material-ui/Table";


const ConteinerTableDragDrop = (props) => {
    const classes = useStyles();
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const {rowsData, headCells,  onSelectRow, typeCheckBox} = props;
    const loading = useSelector(state => state.app.loading)
    const dispatch = useDispatch();

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
            name: 'People 1',
            status: 'enabled'
        }
    ]);

    useEffect(() => {

        dispatch(onSelectRow([]))
    },[props.statusEditMode])

    //TODO Рассмотреть возможность переноса всех handle в отдельный файл
    /**
     * Сортировка
     */
    const handleequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    /**
     * Выбрать все
     */
    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = rowsData.list.map(n => n.id);
            dispatch(onSelectRow(newSelecteds));
            return;
        }
        dispatch(onSelectRow([]));
    };

    /**
     *  Выбрать элемент
     */
    const handleClick = (event, name) => {

        const selectedIndex = rowsData.selected.indexOf(name);
        let newSelected = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(rowsData.selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(rowsData.selected.slice(1));
        } else if (selectedIndex === rowsData.selected.length - 1) {
            newSelected = newSelected.concat(rowsData.selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                rowsData.selected.slice(0, selectedIndex),
                rowsData.selected.slice(selectedIndex + 1),
            );
        }

        if (typeCheckBox === 'solo') {
            if (selectedIndex === -1) {
                newSelected = [name];
            } else if (selectedIndex === 0) {
                newSelected = newSelected.concat(rowsData.selected.slice(1));
            }
        }
        dispatch(onSelectRow(newSelected));
    };

    /**
     *  Изменить страницу
     */
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    /**
     *  Изменить количество элементов на странице
     */
    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    /**
     *  Изменить межстрочное растояние
     */
    const handleChangeDense = event => {
        setDense(event.target.checked);

    };

    /**
     *  Проверка текущего выбраного элемента
     */
    const isSelected = name => rowsData.selected.indexOf(name) !== -1;

    /**
     *  Проверка на пустую строку
     */
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rowsData.length - page * rowsPerPage);

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

    const TableBodySortable = SortableContainer(({ children }) => (
        <TableBody >
            {children}
        </TableBody>
    ));

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

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer>
                    {loading && <LinearProgress className={classes.root}/>}
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >

                        <EnhancedTableHead
                            classes={classes}
                            numSelected={rowsData.selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleequestSort}
                            rowCount={rowsData.list.length}
                            data={headCells}
                            editMode = {props.statusEditMode}
                            typeCheckBox={typeCheckBox}
                        />
                        <TableBodySortable onSortEnd={onSortEnd} useDragHandle
                                           >
                            {people.map((row, index) => {
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
                        {/*<TableBody>*/}
                        {/*    <EnhancedTableRows*/}
                        {/*        classes={classes}*/}
                        {/*        order={order}*/}
                        {/*        orderBy={orderBy}*/}
                        {/*        editMode ={props.statusEditMode}*/}
                        {/*        data={rowsData.list}*/}
                        {/*        page={page}*/}
                        {/*        rowsPerPage={rowsPerPage}*/}
                        {/*        handleClick={handleClick}*/}
                        {/*        isSelected={isSelected}*/}
                        {/*        showActive={rowsData.active}*/}
                        {/*    />*/}
                        {/*    {emptyRows > 0 && (*/}
                        {/*        <TableRow style={{height: (dense ? 33 : 53) * emptyRows}}>*/}
                        {/*            <TableCell colSpan={6}/>*/}
                        {/*        </TableRow>*/}
                        {/*    )}*/}
                        {/*</TableBody>*/}
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    component="div"
                    count={rowsData.list.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch color="primary" checked={dense} onChange={handleChangeDense}/>}
                label="Dense padding"
            />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        statusEditMode: state.app.editMode
    }
};

export default connect(mapStateToProps)(ConteinerTableDragDrop)