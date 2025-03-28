import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: 30 },
  { id: 6, lastName: "Melisandre", firstName: "Unknown", age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Smith", firstName: "John", age: 29 },
  { id: 11, lastName: "Doe", firstName: "Jane", age: 27 },
  { id: 12, lastName: "Brown", firstName: "Charlie", age: 33 },
  { id: 13, lastName: "Johnson", firstName: "Alice", age: 41 },
  { id: 14, lastName: "Williams", firstName: "Ethan", age: 50 },
  { id: 15, lastName: "Taylor", firstName: "Olivia", age: 22 },
  { id: 16, lastName: "Anderson", firstName: "Mason", age: 37 },
  { id: 17, lastName: "Thomas", firstName: "Sophia", age: 31 },
  { id: 18, lastName: "Moore", firstName: "Liam", age: 28 },
  { id: 19, lastName: "Martinez", firstName: "Isabella", age: 34 },
  { id: 20, lastName: "Hernandez", firstName: "Jacob", age: 48 },
  { id: 21, lastName: "Lopez", firstName: "Mia", age: 26 },
  { id: 22, lastName: "Gonzalez", firstName: "Lucas", age: 39 },
  { id: 23, lastName: "Wilson", firstName: "Ava", age: 32 },
  { id: 24, lastName: "Davis", firstName: "Noah", age: 45 },
  { id: 25, lastName: "Rodriguez", firstName: "Emily", age: 23 },
  { id: 26, lastName: "Perez", firstName: "Alexander", age: 38 },
  { id: 27, lastName: "Clark", firstName: "Charlotte", age: 29 },
  { id: 28, lastName: "Lewis", firstName: "Benjamin", age: 42 },
  { id: 29, lastName: "Young", firstName: "Emma", age: 40 },
  { id: 30, lastName: "Hall", firstName: "Henry", age: 53 },
  { id: 31, lastName: "Allen", firstName: "Amelia", age: 36 },
  { id: 32, lastName: "Scott", firstName: "James", age: 44 },
  { id: 33, lastName: "Green", firstName: "Harper", age: 25 },
  { id: 34, lastName: "Baker", firstName: "Daniel", age: 47 },
  { id: 35, lastName: "Adams", firstName: "Evelyn", age: 30 },
  { id: 36, lastName: "Nelson", firstName: "Michael", age: 55 },
  { id: 37, lastName: "Carter", firstName: "Sofia", age: 24 },
  { id: 38, lastName: "Mitchell", firstName: "Oliver", age: 33 },
  { id: 39, lastName: "Perez", firstName: "William", age: 50 },
  { id: 40, lastName: "Roberts", firstName: "Elijah", age: 41 },
  { id: 41, lastName: "Garcia", firstName: "Grace", age: 28 },
  { id: 42, lastName: "Miller", firstName: "Sebastian", age: 39 },
  { id: 43, lastName: "Turner", firstName: "Lucas", age: 22 },
  { id: 44, lastName: "White", firstName: "Lillian", age: 31 },
  { id: 45, lastName: "Harris", firstName: "Nathan", age: 48 },
  { id: 46, lastName: "Sanchez", firstName: "Madison", age: 27 },
  { id: 47, lastName: "Wright", firstName: "Eleanor", age: 32 },
  { id: 48, lastName: "King", firstName: "Andrew", age: 37 },
  { id: 49, lastName: "Evans", firstName: "Scarlett", age: 29 },
  { id: 50, lastName: "Collins", firstName: "Gabriel", age: 46 },
  { id: 51, lastName: "Reed", firstName: "Hannah", age: 26 },
  { id: 52, lastName: "Parker", firstName: "David", age: 54 },
  { id: 53, lastName: "Cook", firstName: "Levi", age: 42 },
  { id: 54, lastName: "Bailey", firstName: "Zoe", age: 30 },
  { id: 55, lastName: "Cruz", firstName: "Victoria", age: 35 },
  { id: 56, lastName: "Russell", firstName: "Dylan", age: 41 },
];


const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable(props) {
  const {search} = props;
  if(search){
    const filteredRows = rows.filter(row => row.firstName.toLowerCase().includes(search.toLowerCase()) || row.lastName.toLowerCase().includes(search.toLowerCase()));
    return (
      <Paper sx={{ height: 470, width: '100%' }}>
        <DataGrid
          rows={filteredRows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          sx={{ border: 0 }}
        />
      </Paper>
    );
  }
  return (
    <Paper sx={{ height: 470, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
