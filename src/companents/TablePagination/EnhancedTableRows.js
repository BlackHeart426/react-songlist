import PropTypes from "prop-types";
import clsx from 'clsx';
import {EnhancedTableHead} from "./EnhancedTableHead";
import {getComparator, stableSort} from "./stableSort";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import {componentTags} from "./componentTags";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import React from "react";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import {blue, orange} from "@material-ui/core/colors";
import {ThemeProvider} from "@material-ui/styles";
import {outerTheme} from "./styles";

const active = {
    'color': 'rgba(0, 0, 0, 0.88)',
};

const defaultColor = {
    'color': 'rgba(255, 0, 0, 0.87)',
};

export function EnhancedTableRows (props) {
    const { data, order, isSelected, handleClick, rowsPerPage, page, orderBy, editMode, showActive } = props

    return (
        stableSort(data, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
                const isItemSelected = isSelected(data[index].id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (

                    (data[index].active != undefined ? ( (showActive) || (data[index].active) ) : true ) &&
                    <ThemeProvider theme={outerTheme}  key={ data[index].id }>
                        <TableRow
                            hover
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            onClick={ editMode ? event => handleClick(event, data[index].id) : undefined}
                            selected={isItemSelected}

                        >
                            {editMode &&
                                 <TableCell padding="checkbox">
                                    <Checkbox
                                        value="secondary"
                                        color="primary"
                                        onClick={event => handleClick(event, data[index].id)}
                                        checked={isItemSelected}
                                        inputProps={{'aria-labelledby': labelId}}
                                    />
                                </TableCell>
                            }

                            {/*TODO Переписать с типом элемента*/}
                            { Object.keys(row).map((item, indexRow) => (

                                    <TableCell align="center" key={indexRow} style={ data[index].active != undefined ? (data[index].active == true ? active : defaultColor) : active }>

                                        {
                                            row[item].type == 'tag' &&
                                            row[item].data.map((tag, indexTag) => (
                                                <div key={indexTag}>
                                                    {componentTags[tag.name]}
                                                </div>
                                            ))

                                        }
                                        {
                                            row[item].type == 'position' &&
                                            <>{index+1}</>

                                        }
                                        {
                                            row[item].type == 'btn' && !editMode &&
                                                 row[item].data.map((btn, indexBtn) => (
                                                    btn.type == 'text'
                                                        ?   <Button
                                                                type="submit"
                                                                color="primary"
                                                                variant="outlined"
                                                                key={data[index].id}
                                                                onClick={() => btn.handler(data[index].id)}
                                                            >
                                                                {btn.name}
                                                            </Button>
                                                        :
                                                        <IconButton  key={indexBtn}>
                                                                {componentTags[btn.name]}
                                                            </IconButton>
                                                ))

                                        }
                                        {
                                            row[item].type != 'btn' && row[item].type != 'position' &&  row[item].type != 'tag' &&
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
}


EnhancedTableRows.propTypes = {
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    editMode: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,

};