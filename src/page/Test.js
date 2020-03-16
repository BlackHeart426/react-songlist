import React, {Component} from "react";
import {MuiThemeProvider} from "material-ui/styles";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";
import { blue500, blue700 } from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import { SortableContainer, SortableHandle, SortableElement, arrayMove } from 'react-sortable-hoc'

const theme = getMuiTheme({
    palette: {
        primary1Color: blue500,
        primary2Color: blue700,
    },
});

// Компонент который используется активации drag-n-drop при клике внутри компонента
const DragHandle = SortableHandle(({ style }) => (
    <span style={{ ...style, ...{ cursor: 'move' } }} >{'::::'}</span>)
);

// Универсальный компонент для превращения TableBody в sortable контейнер
const TableBodySortable = SortableContainer(({ children, displayRowCheckbox }) => (
    <TableBody displayRowCheckbox={displayRowCheckbox}>
        {children}
    </TableBody>
));

// Строка необходима для того чтобы наш кастомный боди воспринимался как TableBody и в этом случае ошибки не будет
TableBodySortable.muiName = 'TableBody'

// Компонент строки таблицы с оберткой в sortable элемент
const Row = SortableElement(({ data, ...other }) => {
    return (
        <TableRow {...other}>
            {other.children[0]}
            <TableRowColumn style={{ width: '5%' }}>
                <DragHandle />
            </TableRowColumn>
            <TableRowColumn>
                {data.id}
            </TableRowColumn>
            <TableRowColumn>
                {data.name}
            </TableRowColumn>
            <TableRowColumn>
                {data.status}
            </TableRowColumn>
        </TableRow>
    )
})

class SortableTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            peoples: [
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
            ]
        }
    }

    // Обработчик заверщения перемещения, используется helper arrayMove
    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            peoples: arrayMove(this.state.peoples, oldIndex, newIndex),
        });
    };

    render() {
        return (
            <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                    <TableRow>
                        <TableHeaderColumn style={{ width: '5%' }}>&nbsp;</TableHeaderColumn>
                        <TableHeaderColumn>Id</TableHeaderColumn>
                        <TableHeaderColumn>Name</TableHeaderColumn>
                        <TableHeaderColumn>Status</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBodySortable onSortEnd={this.onSortEnd} useDragHandle
                                   displayRowCheckbox={false}>
                    {this.state.peoples.map((row, index) => {
                        return (
                            <Row
                                index={index}
                                key={row.id}
                                data={row}
                            />
                        )
                    })}
                </TableBodySortable>
            </Table>
        )
    }
}

export const Test = () => {

    return (
        <>
            <MuiThemeProvider muiTheme={theme}>
                <div>
                    <h3>Material-ui Table sortable component with rows drag-n-drop support</h3>
                    <SortableTable />
                </div>
            </MuiThemeProvider>

        </>
    )
};