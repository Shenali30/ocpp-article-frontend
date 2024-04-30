import { BrowserRouter, useLocation } from 'react-router-dom';
import HeaderWithDrawer from './components/HeaderWithDrawer';
import { CheckSecurity } from './navigation/CheckSecurity';
import { ThemeProvider, createTheme } from '@mui/material';
import { Provider as ReduxProvider } from 'react-redux';
import store from 'redux/store';

import 'styles/Global.css';
import { mainTheme } from 'styles/theme';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME;  
  }, []);

  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <CheckSecurity />
        </ThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  );
}

export default App;
