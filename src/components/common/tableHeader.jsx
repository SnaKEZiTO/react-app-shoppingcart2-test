import React, { Component } from "react";

class TableHeader extends Component {
    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path) {
            sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
        } else {
            sortColumn.path = path;
            sortColumn.order = "asc";
        }

        this.props.onSort(sortColumn);
    };

    renderSortIcon = (sortColumn, column) => {
        return sortColumn.path === column.path ? (sortColumn.order === "asc" ? "fa fa-sort-down" : "fa fa-sort-up") : "";
    };

    render() {
        const { sortColumn } = this.props;
        return (
            <thead className="thead-dark">
                <tr>
                    {this.props.columns.map(column => (
                        <th className="clickable" key={column.path || column.key} scope="col" onClick={() => this.raiseSort(column.path)}>
                            {column.label} <i className={this.renderSortIcon(sortColumn, column)} />
                        </th>
                    ))}
                </tr>
            </thead>
        );
    }
}

export default TableHeader;
