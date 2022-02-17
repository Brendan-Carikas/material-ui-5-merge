import {default as MUIDataGrid} from '../../../components/DataGrid/DataGrid';
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
  rowsPerPageOptions: PropTypes.array,
  checkboxSelection: PropTypes.bool,
  disableSelectionOnClick: PropTypes.bool
};

export default DataGrid;
