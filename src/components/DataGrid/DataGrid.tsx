import React from 'react';
import {DataGrid as MUIDataGrid, DataGridProps} from '@mui/x-data-grid';


function DataGrid({rows, columns, pageSize, rowsPerPageOptions, checkboxSelection, disableSelectionOnClick} :DataGridProps) {
  return (
    <MUIDataGrid
      rows={rows}
      columns={columns}
      pageSize={pageSize}
      rowsPerPageOptions={rowsPerPageOptions}
      checkboxSelection={checkboxSelection}
      disableSelectionOnClick={disableSelectionOnClick}
    />
  )
}

export default DataGrid;

