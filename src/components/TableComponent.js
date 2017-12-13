
import React from 'react';

import Pagination from "./Pagination";

function Increment() {
    return (
        this.setState({
            counter: this.state.counter + 1
        })
    );
}

function query(tableData = "", startIndex = null, endIndex = null) {

    return tableData.length>0 && startIndex >=0 && endIndex >= 0?tableData.slice(startIndex, endIndex):tableData;
}

class TableHeader extends React.Component {
    render() {

        const {head} = this.props;

        let header_row = [];

        head.forEach(function(data) {
            header_row.push(<th key={data.key}>{data.label}</th>);
        });

        const header = (
            <tr>
                {header_row}
            </tr>
        );

        return (
            <thead>{header}</thead>
        );
    }
}

class TableRow extends React.Component {
    render() {

        const {head, data} = this.props;

        // let table_row = [];

        // data.forEach(function(data, i) {
        //
        //     _.forEach(data, function(value, key) {
        //         table_row.push(<td key={key}>{value}</td>);
        //     });
        // });

        let rows = data.map(function(item,i) {

            // handle the column data within each row
            let cells = head.map(function(colData,i) {

                return <td key={i}>{item['field'+i]}</td>;

            });
            return <tr key={i}>{cells}</tr>;
        });

        return (
            <tbody>{rows}</tbody>
        );
    }
}

class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            startIndex: null,
            endIndex: null,
            count: 1
        };
        this.handleChangePage = this.handleChangePage.bind(this);
    }

    handleChangePage(startIndex, endIndex) {
        this.setState({ startIndex:  startIndex, endIndex: endIndex});
    }

    render() {
        return (
            <div>
                <table>
                    <TableHeader head={this.props.head} />
                    <TableRow data={query(this.props.data, this.state.startIndex, this.state.endIndex)} head={this.props.head} />
                </table>
                <Pagination
                    pageSize={this.props.pageSize}
                    countItems={this.props.data.length}
                    onChangePage={this.handleChangePage}
                />
            </div>
        );
    }
}

export default Table;