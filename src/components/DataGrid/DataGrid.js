import React from 'react';
import { DataGrid as MUIDataGrid } from '@mui/x-data-grid';
import PropTypes from 'prop-types';


function DataGrid(props) {
  return (
    <MUIDataGrid {...props} />
  )
}

DataGrid.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.object),
  columns: PropTypes.arrayOf(PropTypes.object),
  pageSize: PropTypes.number,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
  checkboxSelection: PropTypes.bool,
  disableSelectionOnClick: PropTypes.bool
};

export default DataGrid;

