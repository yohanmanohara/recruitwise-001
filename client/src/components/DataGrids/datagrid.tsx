'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const DataGridDemo: React.FC<any> = ({ rows, columns, gridwidth }) => {
  return (
    <Box sx={{ width: gridwidth}} className="h-screen">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnMenu
        disableColumnResize
      />
    </Box>
  );
}

export default DataGridDemo;
