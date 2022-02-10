import React from 'react';
import DataGrid from '../DataGrid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];

const rows = [
  { id: 1, lastName: 'SnowBall', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lenny', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Puma', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Drake', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Brendan', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Corry', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Shon', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Vova', firstName: 'Harvey', age: 65 },
];

export default (
  <div style={{ height: 400, width: '100%' }}>
    <DataGrid
      uxpId="data-grid"
      rows={rows}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
    />
  </div>
);

