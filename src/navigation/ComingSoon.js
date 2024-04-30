import React from 'react';
import SettingsPng from '../assets/images/settings.png';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { useWindowSize } from 'utils';

export const ComingSoon = () => {
  const [windowWidth, windowHeight] = useWindowSize();
  return (
    <Card variant="outlined" color="primary" sx={{ borderRadius: 5, height: windowHeight - 120 }}>
      <CardContent sx={{ height: '100%' }}>
        <Stack height={'100%'} direction={'column'} justifyContent={'center'} alignItems={'center'}>
          {/* <img src={SettingsPng} style={{ width: '15%', height: 'auto', marginBottom: '50px' }} alt="settings image" /> */}
          <AutoAwesomeOutlinedIcon sx={{ fontSize: 100, mb: 2 }} />
          <Typography variant="h4">Feature in development...</Typography>
          <Typography variant="h4"> Coming soon!</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};
