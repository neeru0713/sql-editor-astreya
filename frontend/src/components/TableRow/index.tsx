import React from 'react';
import TableRowProps from './types';

const TableRow: React.FC<TableRowProps> = ({ row, columns }) => (
    <tr>
        {columns.map((column, colIndex) => (
            <td className='text-center' key={colIndex}>{row[column]}</td>
        ))}
    </tr>
);

export default TableRow;
