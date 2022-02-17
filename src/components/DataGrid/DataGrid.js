import React from 'react';
import { DataGrid as MUIDataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';


function DataGrid({rows, columns, pageSize, rowsPerPageOptions, checkboxSelection, disableSelectionOnClick}) {
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

DataGrid.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  pageSize: PropTypes.number,
  rowsPerPageOptions: PropTypes.array,
  checkboxSelection: PropTypes.bool,
  disableSelectionOnClick: PropTypes.bool
};

export default DataGrid;

