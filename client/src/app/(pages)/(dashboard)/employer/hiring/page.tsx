'use client'
import React from 'react';
import DataGrid from '@/components/DataGrids/datagrid'; // Adjust the import path accordingly
import { GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'Title',
    headerName: 'Job Title',
    width: 150,
    editable: true,
  },
  {
    field: 'JobDescription',
    headerName: 'Job Description',
    width: 150,
    editable: true,
  },
  {
    field: 'DueDate',
    headerName: 'Due Date',
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
    valueGetter: (value, row) => `${row.Title || ''} ${row.JobDescription || ''}`,
  },
];

const rows = [
  { id: 1, JobDescription: 'Snow', Title: 'Jon', DueDate: 14 },
  { id: 2, JobDescription: 'Lannister', Title: 'Cersei', DueDate: 31 },
  { id: 3, JobDescription: 'Lannister', Title: 'Jaime', DueDate: 31 },
  { id: 4, JobDescription: 'Stark', Title: 'Arya', DueDate: 11 },
  { id: 5, JobDescription: 'Targaryen', Title: 'Daenerys', DueDate: 23  },
  { id: 6, JobDescription: 'Melisandre', Title: "Ranith", DueDate: 150 },
  { id: 7, JobDescription: 'Clifford', Title: 'Ferrara', DueDate: 44 },
  { id: 8, JobDescription: 'Frances', Title: 'Rossini', DueDate: 36 },
  { id: 9, JobDescription: 'Roxie', Title: 'Harvey', DueDate: 23 },
];

const Hiring = () => {
  return (
    <div>
      <DataGrid rows={rows} columns={columns} gridwidth='60%'/>
      <iframe src="https://us04web.zoom.us/j/78042661105?pwd=SrHz8jOvo5txCySW84dbtB952Ds82X.1" allow="camera; microphone; display-capture" width={"400px"} height={"400px"}></iframe>
    </div>
  );
}

export default Hiring;