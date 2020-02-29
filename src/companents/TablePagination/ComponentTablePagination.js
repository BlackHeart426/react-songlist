import React, {useContext} from "react";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {EditModeContext} from "../../contex/editMode/editNodeContext";
import {EnhancedTableHead} from "./EnhancedTableHead";
import {EnhancedTableRows} from "./EnhancedTableRows";
import {useStyles} from "./styles";
import {SongsContext} from "../../contex/module/songs/songsContext";


export default function ComponentTablePagination(props) {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [editMode, setEditMode] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const {statusEditMode} = useContext(EditModeContext)
    const {rowsContext} = useContext(SongsContext)
    const {rowsData, headCells} = props

    //TODO Рассмотреть возможность переноса всех handler в отдельный файл
    /**
     * Сортировка
     */
    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };


    /**
     * Выбрать все
     */
    const handleSelectAllClick = event => {
        if (event.target.checked) {
            const newSelecteds = props.rowsData.map(n => n.title);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    /**
     *  Выбрать элемент
     */
    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
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

    const handleChangeEditMode = event => {
        setEditMode(event.target.checked);
    };

    /**
     *  Проверка текущего выбраного элемента
     */
    const isSelected = name => selected.indexOf(name) !== -1;


    /**
     *  Проверка на пустую строку
     */
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.rowsData.length - page * rowsPerPage);


    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                {/*<EnhancedTableToolbar numSelected={selected.length}/>*/}
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        size={dense ? 'small' : 'medium'}
                        aria-label="enhanced table"
                    >
                        <EnhancedTableHead
                            classes={classes}
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rowsData.length}
                            data={headCells}
                            editMode = {statusEditMode}
                        />
                        <TableBody>
                            <EnhancedTableRows
                                order={order}
                                orderBy={orderBy}
                                editMode ={statusEditMode}
                                data={rowsData}
                                page={page}
                                rowsPerPage={rowsPerPage}
                                handleClick={handleClick}
                                isSelected={isSelected}
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
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={rowsData.length}
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
}