import ReplayIcon from '@mui/icons-material/Replay';
import { Card, CardContent, Divider, Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { useWindowSize } from 'utils';

export const Dashboard = () => {
  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <>
      <Card variant="outlined" color="primary" sx={{ borderRadius: 5, height: windowHeight - 120 }}>
        <CardContent sx={{ m: 2 }}>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item>
              <Typography variant="h8" component="div" color="text.primary">
                Dashboard
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h8" component="div" color="text.primary">
                Home - Dashboard
              </Typography>
            </Grid>
          </Grid>
          <br></br>
          <Divider />
          <br></br>
         
        </CardContent>
      </Card>
    </>
  );
};
