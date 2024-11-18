import React from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Fab,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

const VehicleList = () => {
  const mockVehicles = [
    {
      id: 1,
      make: 'Toyota',
      model: 'Camry',
      year: 2020,
      lastService: '2023-05-01',
    },
    {
      id: 2,
      make: 'Honda',
      model: 'Civic',
      year: 2019,
      lastService: '2023-04-15',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {mockVehicles.map((vehicle) => (
          <Grid item xs={12} sm={6} md={4} key={vehicle.id}>
            <Card>
              <CardContent>
                <DirectionsCarIcon sx={{ fontSize: 40, mb: 2, color: 'primary.main' }} />
                <Typography variant="h6" gutterBottom>
                  {vehicle.year} {vehicle.make} {vehicle.model}
                </Typography>
                <Typography color="textSecondary">
                  Last Service: {vehicle.lastService}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  View Details
                </Button>
                <Button size="small" color="secondary">
                  Service History
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
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

export default VehicleList;
