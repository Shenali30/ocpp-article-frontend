import FindInPageIcon from '@mui/icons-material/FindInPage';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { useWindowSize } from 'utils';

export const NotFound = () => {
  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <Card variant="outlined" color="primary" sx={{ borderRadius: 5, height: windowHeight - 120 }}>
      <CardContent sx={{ height: '100%' }}>
        <Stack height={'100%'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
          <SentimentVeryDissatisfiedIcon sx={{ fontSize: 100 }} />
          <Typography variant='h1'>404</Typography>
          <Typography variant='h6'>Page Not Found</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
