import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Typography } from '@mui/material';

const columns = [
  {
    field: 'customer',
    headerName: 'Customer',
    width: 300,
    renderCell: (params) => {
        return (<span style={{fontSize:'1rem', fontWeight:'800'}}><AccountCircleIcon sx={{verticalAlign:'middle'}} /> {params.row.customer} </span>)
    },
    renderHeader: (params) => (<Typography sx={{fontSize:'1.2rem', fontWeight:'800'}}>Customer</Typography>),
  },
  {
    field: 'orderNo',
    headerName: 'Order No.',
    width: 180,
    renderCell: (params) => {
      return (<span style={{fontSize:'1rem', fontWeight:'800'}}>{params.row.orderNo}</span>)
    },
    renderHeader: (params) => (<Typography sx={{fontSize:'1.2rem', fontWeight:'800'}}>Order No.</Typography>),
  },
  {
    field: 'amount',
    headerName: 'Amount',
    width: 180,
    renderCell: (params) => {
      return (<span style={{fontSize:'1rem', fontWeight:'800'}}>{params.row.amount}</span>)
    },
    renderHeader: (params) => (<Typography sx={{fontSize:'1.2rem', fontWeight:'800'}}>Amount</Typography>),
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: (params) => {
      return (<span><Typography sx={{fontSize:'1rem', fontWeight:'800',color: params.row.status === "Delivered" ? "green" : "red"}}>{params.row.status}</Typography></span>)
    },
    renderHeader: (params) => (<Typography sx={{fontSize:'1.2rem', fontWeight:'800'}}>Status</Typography>),
  },
];

const rows = [
  { id: 1, customer: 'Wade Warren', orderNo: 15478256, amount: "$124.00", status: "Delivered" },
  { id: 2, customer: 'Jane Cooper', orderNo: 48965786, amount: "$365.02", status: "Delivered" },
  { id: 3, customer: 'Guy Hawkins', orderNo: 78958213, amount: "$45.88", status: "Cancelled" },
  { id: 4, customer: 'Kristin Watson', orderNo: 20965732, amount: "$65.00", status: "Pending" },
  { id: 5, customer: 'Cody Fisher', orderNo: 95715620, amount: "$545.00", status: "Delivered" },
  { id: 6, customer: 'Savannah Nguyen', orderNo: 78514568, amount: "$128.20", status: "Delivered" },
];

export default function RecentOrders() {
  return (
    <Box sx={{width: '100%', backgroundColor:'#1c1a1a', color:"white",p:"0% 0% 0% 0%", borderRadius:'2%'}}>
        <Typography sx={{pl:'2%', mt:0, pt:'1%'}}>
            <h3>Recent Orders</h3>
        </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        width="100%"
        // hideFooterPagination={true}
        // hideFooter={true}
        // hideFooterRowCount={true}
        hideFooterPagination
        hideFooterSelectedRowCount
        pagination={false}
        style={{color:"white"}}
      />
    </Box>
  );
}
