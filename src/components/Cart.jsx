import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
// name:"Pomegranate (Anaar)",gram:"500 gm",price:"60",offer:"5",pic:"Pomegranate (Anaar).jpg"}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width:90},
  { field: 'name', headerName: 'PRODUCT NAME', width:200 },
  { field: 'quantity', headerName: 'QUANTITY', width:200 },
  {
    field: 'price',
    headerName: 'PRICE',
    width: 200,
  },
  {
    field: 'offer',
    headerName: 'DISCOUNT',
    width: 200,
  },  {
    field: 'quantity',
    headerName: 'QUANTITY',
    width: 200,
  }, {
    field: 'total',
    headerName: 'Total',
    width: 200,
  },
];



export default function Cart(props) {
  const rows = props.cart
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
