import React from 'react';
import { DataGrid as MUIDataGrid } from '@mui/x-data-grid';
import { DataGridProps } from '@mui/x-data-grid';

export default function DataGrid(props: DataGridProps) {
  return (
    <MUIDataGrid {...props} />
  )
}
