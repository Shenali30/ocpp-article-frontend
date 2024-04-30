import { AccountCircle } from '@mui/icons-material';
import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
import { Collapse, Grid, Menu, MenuItem, Stack } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import { UNRESPONSIVE_UI_ALERT_MESSAGE } from 'constants';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { saveIsDrawerOpen } from 'redux/commonSlice';
import { selectAuthData, setAuthFailAndLogout } from 'redux/userSlice';
import { userLogOut } from 'services/userAuth';
import { useWindowSize } from 'utils';
import RouterConfig from '../navigation/RouterConfig';
import {
  ASSISTANCE_CATEGORIES,
  ASSISTANCE_VIEW_FAMILIES,
  BAPTISM_CERTIFICATES,
  CELEBRATIONS,
  CREATE_FAMILY_BOOK,
  CREATE_USER_PERMISSION,
  DASHBOARD,
  DEATH_CERTIFICATES,
  HOME,
  MARRIAGE_CERTIFICATES,
  MY_ACCOUNT,
  PUBLISH_ARTICLE,
  VIEW_ARTICLES,
  VIEW_FAMILY_BOOK,
  VIEW_NOVENA,
  VIEW_USERS,
  VIEW_ZONE,
} from '../navigation/Routes';
import { AlertMessage } from './AlertMessage';
import { PATH_TO_MODULE_MAP } from 'constants';
import { AUTH_MODULES } from 'constants';
import EcclesiaEase from 'assets/Logo/ecclesia-ease-transparent.png';

export const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export default function HeaderWithDrawer() {
  const theme = useTheme();
  const [windowWidth, windowHeight] = useWindowSize();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuthData);
  const location = useLocation();
  const [currentUrlPath, setCurrentUrlPath] = useState(null);
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [drawerList, setDrawerList] = useState({});

  useEffect(() => {
    setDrawerList({
      main: [
        {
          name: 'Home',
          icon: <HomeOutlinedIcon />,
          navigation: HOME,
          disabled: false,
        },
        {
          name: 'Publish Article',
          icon: <DashboardOutlinedIcon />,
          navigation: PUBLISH_ARTICLE,
        },
      ],

    });
  }, []);

  const isCheckNavigationDisabled = (arr = []) => {
    const authorizedModules = user?.permissions?.modules?.map((d) => d.id);
    if (arr?.some((k) => authorizedModules?.includes(k))) return false;
    else return true;
  };

  let unResponsiveAlertShow = windowWidth <= 1370 || windowWidth >= 2400 || windowHeight <= 610 || windowHeight >= 1148;

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(saveIsDrawerOpen(open));
  }, [open]);

  useEffect(() => {
    if (location.pathname !== '') setCurrentUrlPath(location.pathname);
  }, [location]);

  // useEffect(() => {
  //   console.log('currentUrlPath', currentUrlPath);
  // }, [currentUrlPath]);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleDrawerButtons = (key, index) => {
    let list = { ...drawerList };
    list[key][index].isExpanded = !list[key][index].isExpanded;
    setDrawerList(list);
  };

  const signOutUser = () => {
    userLogOut(user.username)
      .then((res) => {
        console.log('logout success...');
        dispatch(setAuthFailAndLogout());
        navigate('/');
      })
      .catch((err) => {
        dispatch(setAuthFailAndLogout());
        navigate('/');
        console.log('error while logout...', err);
      })
      .finally(() => {});
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar color="inherit" sx={{ boxShadow: 0 }} position="fixed" open={open}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            onClick={handleDrawer}
            edge="start"
            sx={{
              color: theme.palette.primary.main,
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign={'center'}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
              <AlertMessage show={unResponsiveAlertShow} type={'warning'} message={UNRESPONSIVE_UI_ALERT_MESSAGE} />
            </div>
          </Typography>
          <Stack direction={'row'} justifyContent={'center'} alignItems={'center'}>
            <IconButton size="large" onClick={handleMenu}>
              <AccountCircle />
            </IconButton>
            <Typography variant="body2" color={'text.primary'}>{`${user?.title} ${user?.name}`}</Typography>
          </Stack>
          <Menu id="menu-appbar" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            <MenuItem
              onClick={() => {
                navigate(MY_ACCOUNT);
                handleClose();
              }}
            >
              My Account
            </MenuItem>
            <MenuItem onClick={signOutUser}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid item xs={12}>
              <Typography sx={{ fontSize: 14, textAlign: 'center' }} component="p">
                {`ARTICLE`}
                <br></br> {'APP'}
              </Typography>
            </Grid>
          </Grid>
          <IconButton onClick={handleDrawer} sx={{ color: theme.palette.primary.main }}>
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Box
          sx={{
            overflowX: 'hidden',
            overflowY: 'auto',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            {Object.keys(drawerList).map((key, index) => (
              <div key={index}>
                {drawerList[key].some((d) => !d.disabled) && (
                  <div key={key + '_' + index + '_div'}>
                    <List>
                      {drawerList[key].map((data, index) => (
                        <ListItem key={data.name} disablePadding sx={{ display: data?.disabled ? 'none' : 'block' }}>
                          <ListItemButton
                            sx={{
                              minHeight: 48,
                              justifyContent: open ? 'initial' : 'center',
                              px: 2.5,
                              ...((currentUrlPath === data.navigation || data?.expandedList?.find((d) => d.navigation === currentUrlPath)) && {
                                borderLeft: `3px solid ${theme.palette.primary.main}`,
                              }),
                            }}
                            onClick={() => {
                              data?.expandable ? handleDrawerButtons(key, index) : navigate(data.navigation);
                            }}
                            selected={!!(currentUrlPath === data.navigation || data?.expandedList?.find((d) => d.navigation === currentUrlPath))}
                          >
                            <ListItemIcon
                              sx={{
                                minWidth: 0,
                                mr: open ? 3 : 'auto',
                                justifyContent: 'center',
                                ...((currentUrlPath === data.navigation || data?.expandedList?.find((d) => d.navigation === currentUrlPath)) && {
                                  color: theme.palette.primary.main,
                                }),
                              }}
                            >
                              {data.icon}
                            </ListItemIcon>
                            <ListItemText
                              primaryTypographyProps={{
                                ...((currentUrlPath === data.navigation || data?.expandedList?.find((d) => d.navigation === currentUrlPath)) && {
                                  style: { color: theme.palette.primary.main },
                                }),
                              }}
                              primary={data.name}
                              sx={{ opacity: open ? 1 : 0 }}
                            />
                            <ListItemIcon sx={{ minWidth: 0 }}>{data?.expandable && open && (data?.isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />)}</ListItemIcon>
                          </ListItemButton>

                          {data?.expandable && open && (
                            <Collapse in={data?.isExpanded} timeout="auto" unmountOnExit>
                              <List component="div" disablePadding>
                                {data.expandedList.map((exData) => (
                                  <ListItemButton
                                    key={`${exData.name}_collapseItemButton`}
                                    sx={{ pl: 2, ml: 4, borderLeft: `1px solid ${theme.custom.lightGrey}`, display: exData?.disabled ? 'none' : 'block' }}
                                    onClick={() => navigate(exData.navigation)}
                                  >
                                    <ListItemText
                                      primaryTypographyProps={{ ...(currentUrlPath === exData.navigation && { style: { color: theme.palette.primary.main } }) }}
                                      primary={`\u25CF \u00A0 ${exData.name}`}
                                    />
                                  </ListItemButton>
                                ))}
                              </List>
                            </Collapse>
                          )}
                        </ListItem>
                      ))}
                    </List>
                    <Divider />
                  </div>
                )}
              </div>
            ))}
            <List>
              <ListItem disablePadding>
                <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }} onClick={() => signOutUser()}>
                  <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                    <ExitToAppOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={'Logout'} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>

          {open && (
            <Typography variant="body2" sx={{ textAlign: 'center', p: 1 }}>
              Version {process.env.REACT_APP_VERSION}
            </Typography>
          )}
        </Box>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {/* <Container fixed maxWidth={false} className="app-container"> */}

        <RouterConfig />
        {/* </Container> */}
      </Box>
    </Box>
  );
}
