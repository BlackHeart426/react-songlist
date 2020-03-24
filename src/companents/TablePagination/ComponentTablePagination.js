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


const ComponentTablePagination = (props) => {
    const classes = useStyles();
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('calories');
    const [page, setPage] = useState(0);
    const [dense, setDense] = useState(false);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const {rowsData, headCells,  onSelectRow, typeCheckBox} = props;
    const loading = useSelector(state => state.app.loading)
    const dispatch = useDispatch();
    useEffect(() => {

        dispatch(onSelectRow([]))
    },[props.statusEditMode])

    //TODO Рассмотреть возможность переноса всех handlerr в отдельный файл
    /**
     * Сортировка
     */
    const handlerRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    /**
     * Выбрать все
     */
    const handlerSelectAllClick = event => {
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
    const handlerClick = (event, name) => {
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
    const handlerChangePage = (event, newPage) => {
        setPage(newPage);
    };

    /**
     *  Изменить количество элементов на странице
     */
    const handlerChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    /**
     *  Изменить межстрочное растояние
     */
    const handlerChangeDense = event => {
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
                            onSelectAllClick={handlerSelectAllClick}
                            onRequestSort={handlerRequestSort}
                            rowCount={rowsData.list.length}
                            data={headCells}
                            editMode = {props.statusEditMode}
                            typeCheckBox={typeCheckBox}
                        />

                        <TableBody>
                            <EnhancedTableRows
                                classes={classes}
                                order={order}
                                orderBy={orderBy}
                                editMode ={props.statusEditMode}
                                data={rowsData.list}
                                page={page}
                                rowsPerPage={rowsPerPage}
                                handlerClick={handlerClick}
                                isSelected={isSelected}
                                showActive={rowsData.active}
                            />
                            {emptyRows > 0 && (
                                <TableRow style={{height: (dense ? 33 : 53) * emptyRows}}>
                                    <TableCell colSpan={6}/>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, 50, 100]}
                    component="div"
                    count={rowsData.list.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handlerChangePage}
                    onChangeRowsPerPage={handlerChangeRowsPerPage}
                />
            </Paper>
            <FormControlLabel
                control={<Switch color="primary" checked={dense} onChange={handlerChangeDense}/>}
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

export default connect(mapStateToProps)(ComponentTablePagination)