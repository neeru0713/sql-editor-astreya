import React from 'react';
import TableRow from '../TableRow';
import TableProps from './types';

const Table: React.FC<TableProps> = ({ data, columns }) => (
    <table className='border '>
        <thead>
            <tr>
                {columns.map((column, index) => (
                    <th className='bg-gray-300 p-2' key={index}>{column}</th>
                ))}
            </tr>
        </thead>
        <tbody>
            {data.map((row, rowIndex) => (
                <TableRow key={rowIndex} row={row} columns={columns} />
            ))}
        </tbody>
    </table>
);

export default Table;
