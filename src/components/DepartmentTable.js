import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

function DepartmentTable({ departmentData }) {
  return (
    <Box sx={{ mt: 6, mb: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#1746a2' }}>
        Department Student Count
      </Typography>
      <TableContainer component={Paper} sx={{ maxWidth: 500 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ background: '#1746a2' }}>
              <TableCell sx={{ color: '#fff', fontWeight: 700 }}>Department</TableCell>
              <TableCell sx={{ color: '#fff', fontWeight: 700 }} align="right">No. of Students</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {departmentData.map((dept) => (
              <TableRow key={dept.name}>
                <TableCell>{dept.name}</TableCell>
                <TableCell align="right">{dept.students}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default DepartmentTable;
