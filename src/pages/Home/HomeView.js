import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import EcclesiaEase from '../../assets/Logo/ecclesia-ease-transparent.png';
import { useWindowSize } from 'utils';

export const HomeView = () => {
  const [windowWidth, windowHeight] = useWindowSize();

  const getTimeText = () => {
    var hour = new Date().getHours();
    return 'Good ' + ((hour < 12 && 'Morning') || (hour < 18 && 'Afternoon') || 'Evening');
  };

  return (
    <Paper
      style={{
        borderRadius: '10px',
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: '50px',
        height: windowHeight - 120,
      }}
    >
    </Paper>
  );
};
