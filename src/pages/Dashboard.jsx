import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Summary Cards */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <DirectionsCarIcon sx={{ fontSize: 40, mr: 2, color: 'primary.main' }} />
                <div>
                  <Typography color="textSecondary" gutterBottom>
                    Total Vehicles
                  </Typography>
                  <Typography variant="h5">2</Typography>
                </div>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <BuildIcon sx={{ fontSize: 40, mr: 2, color: 'secondary.main' }} />
                <div>
                  <Typography color="textSecondary" gutterBottom>
                    Pending Maintenance
                  </Typography>
                  <Typography variant="h5">3</Typography>
                </div>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box display="flex" alignItems="center">
                <NotificationsIcon sx={{ fontSize: 40, mr: 2, color: 'warning.main' }} />
                <div>
                  <Typography color="textSecondary" gutterBottom>
                    Upcoming Services
                  </Typography>
                  <Typography variant="h5">1</Typography>
                </div>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Maintenance */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Maintenance History
              </Typography>
              <Typography variant="body2" color="textSecondary">
                No maintenance records found. Add your first vehicle to get started!
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
