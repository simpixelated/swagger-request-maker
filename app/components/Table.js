import React from 'react';
import TableBS from 'react-bootstrap/lib/Table';

const Table = ({ headers, rows }) => (
  <TableBS responsive>
    <thead>
      <tr>{_.map(headers, header => <th key={header}>{header}</th>)}</tr>
    </thead>
    <tbody>
      {_.map(rows, (row, trIndex) => (
        <tr key={`row-${trIndex}`}>
          {_.map(row, (value, tdIndex) => <td key={`row-${trIndex}-${tdIndex}`}>{value}</td>)}
        </tr>
      ))}
    </tbody>
  </TableBS>
);

export default Table;
