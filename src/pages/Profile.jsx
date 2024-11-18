import React from 'react';
import {
  Container,
  Paper,
  Grid,
  Typography,
  TextField,
  Button,
  Avatar,
  Box,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Profile = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} display="flex" justifyContent="center">
            <Avatar sx={{ width: 100, height: 100 }}>
              <AccountCircleIcon sx={{ fontSize: 60 }} />
            </Avatar>
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="First Name"
              variant="outlined"
              defaultValue="John"
            />
          </Grid>
          
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Last Name"
              variant="outlined"
              defaultValue="Doe"
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              defaultValue="john.doe@example.com"
            />
          </Grid>
          
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Phone"
              variant="outlined"
              defaultValue="(555) 123-4567"
            />
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Notification Preferences
            </Typography>
            <Box sx={{ pl: 2 }}>
              <Typography variant="body1" color="textSecondary" paragraph>
                Receive notifications for:
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ✓ Upcoming maintenance reminders
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ✓ Service completion notifications
              </Typography>
              <Typography variant="body2" color="textSecondary">
                ✓ Maintenance recommendations
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} display="flex" justifyContent="flex-end" gap={2}>
            <Button variant="outlined" color="primary">
              Cancel
            </Button>
            <Button variant="contained" color="primary">
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Profile;
