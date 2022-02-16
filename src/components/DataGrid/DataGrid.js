import React from 'react';
import { DataGrid as MUIDataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';


function DataGrid(props) {
  return (
    <MUIDataGrid {...props} />
  )
}

DataGrid.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  pageSize: PropTypes.number,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number) | PropTypes.number,
  checkboxSelection: PropTypes.bool,
  disableSelectionOnClick: PropTypes.bool
};

export default DataGrid;

