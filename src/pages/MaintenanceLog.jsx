import React from 'react';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
  Fab,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const MaintenanceLog = () => {
  const mockMaintenanceLogs = [
    {
      id: 1,
      vehicle: 'Toyota Camry',
      service: 'Oil Change',
      date: '2023-05-01',
      mileage: 50000,
      cost: 45.99,
    },
    {
      id: 2,
      vehicle: 'Honda Civic',
      service: 'Brake Pad Replacement',
      date: '2023-04-15',
      mileage: 45000,
      cost: 150.00,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Maintenance Log
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Vehicle</TableCell>
              <TableCell>Service</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Mileage</TableCell>
              <TableCell>Cost ($)</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockMaintenanceLogs.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.vehicle}</TableCell>
                <TableCell>{log.service}</TableCell>
                <TableCell>{log.date}</TableCell>
                <TableCell>{log.mileage}</TableCell>
                <TableCell>{log.cost.toFixed(2)}</TableCell>
                <TableCell>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <Button size="small" color="error">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
};

export default MaintenanceLog;
