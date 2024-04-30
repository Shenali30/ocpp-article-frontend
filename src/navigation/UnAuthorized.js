import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { Card, CardContent, CircularProgress, Stack, Typography } from '@mui/material';
import { useWindowSize } from 'utils';

export const UnAuthorized = ({ loading }) => {
  const [windowWidth, windowHeight] = useWindowSize();

  return (
    <Card variant="outlined" color="primary" sx={{ borderRadius: 5, height: windowHeight - 120 }}>
      <CardContent sx={{ height: '100%' }}>
        <Stack height={'100%'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
          {!loading ? (
            <>
              <SentimentVeryDissatisfiedIcon sx={{ fontSize: 100 }} />
              <Typography variant="h1">403</Typography>
              <Typography variant="h6">You don't have permission to access this page.</Typography>
            </>
          ) : (
            <>
              <CircularProgress />
              <Typography variant="h8" mt={2}>Authorizing...</Typography>
            </>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
};
