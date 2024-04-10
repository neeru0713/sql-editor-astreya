import React from "react";
import Table from "../Table";

import DisplayTableProps from './types';

const DisplayTable: React.FC<DisplayTableProps> = ({ data }) => {
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }

    const columns = Object.keys(data[0]);

    return (
        <div className="mx-1 p-4">
            <h2 className="font-bold ">Output</h2>
            <Table data={data} columns={columns} />
        </div>
    );
};

export default DisplayTable;
