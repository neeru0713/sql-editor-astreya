import TableRow from "./TableRow/index";
interface TableProps {
    data: any[];
    columns: string[];
}

const Table: React.FC<TableProps> = ({ data, columns }) => (
    <table>
        <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index}>{column}</th>
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