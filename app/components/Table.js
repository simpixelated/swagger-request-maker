import React from 'react';

import TableBS from 'react-bootstrap/lib/Table';

const Table = ({ headers, rows }) => (
  <TableBS responsive>
    <thead>
      <tr>{_.map(headers, header => <th key={header}>{header}</th>)}</tr>
    </thead>
    <tbody>
      {_.map(rows, (row, i) => (
        <tr key={`row-${i}`}>{_.map(row, value => <td key={value}>{value}</td>)}</tr>
      ))}
    </tbody>
  </TableBS>
);

export default Table;
