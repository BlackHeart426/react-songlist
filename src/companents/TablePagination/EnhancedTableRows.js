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

const active = {
    'color': 'rgba(255, 0, 0, 0.87)',
};

const defaultColor = {
    'color': 'rgba(0, 0, 0, 0.88)',
};

export function EnhancedTableRows (props) {
    const {classes, data, order, isSelected, handleClick, rowsPerPage, page, orderBy, editMode} = props

    return (
        stableSort(data, getComparator(order, orderBy))
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => {
                const isItemSelected = isSelected(row.title);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                    <TableRow
                        hover
                        onClick={event => handleClick(event, row.title)}
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.title}
                        selected={isItemSelected}

                    >
                        {
                            editMode &&
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
                        { Object.keys(row).map((item, indexRow) => (

                                <TableCell align="center" key={indexRow} style={data[index].active == true ? active : defaultColor}>

                                    {
                                        row[item].type == 'tag' &&
                                        row[item].data.map((tag, indexTag) => (
                                            <div key={indexTag}>
                                                {componentTags[tag.name]}
                                            </div>
                                        ))

                                    }
                                    {
                                        row[item].type == 'btn' && editMode &&
                                             row[item].data.map((btn, indexBtn) => (
                                                btn.type == 'text'
                                                    ?   <Button
                                                            type="submit"
                                                            color="primary"
                                                            variant="outlined"
                                                            key={indexBtn}
                                                            onClick={() => btn.handler(row.title)}
                                                        >
                                                            {btn.name}
                                                        </Button>
                                                    :   <IconButton>
                                                            {componentTags[btn.name]}
                                                        </IconButton>
                                            ))

                                    }
                                    {
                                        row[item].type != 'btn' &&  row[item].type != 'tag' &&
                                            <> {row[item]} </>

                                    }

                                </TableCell>
                            )
                        )}

                    </TableRow>
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