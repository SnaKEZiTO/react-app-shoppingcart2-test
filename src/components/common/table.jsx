import React from "react";

import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = ({ columns, sortColumn, onSort, data }) => {
    return (
        <table className="table table-hover">
            <TableHeader sortColumn={sortColumn} columns={columns} onSort={onSort} />
            <TableBody data={data} columns={columns} valueProperty={"id"} />
        </table>
    );
};

export default Table;
