// import AccessibilityOutlinedIcon from '@mui/icons-material/AccessibilityOutlined';
// import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
// import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
// import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
// import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
// import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import MenuIcon from "@mui/icons-material/Menu";
// import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
// import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
// import VolunteerActivismOutlinedIcon from '@mui/icons-material/VolunteerActivismOutlined';
// import { Collapse, Stack } from "@mui/material";
// import MuiAppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
// import Divider from "@mui/material/Divider";
// import MuiDrawer from "@mui/material/Drawer";
// import IconButton from "@mui/material/IconButton";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import { styled, useTheme } from "@mui/material/styles";
// import { useEffect, useState } from 'react';
// import CircleIcon from '@mui/icons-material/Circle';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ExpandLessIcon from '@mui/icons-material/ExpandLess';
// import ViewFamilyBook from '../../pages/FamilyBook/View';
// import RouterConfig from '../../navigation/RouterConfig';

// const drawerWidth = 280;

// const openedMixin = (theme) => ({
//   width: drawerWidth,
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: "hidden",
// });

// const closedMixin = (theme) => ({
//   transition: theme.transitions.create("width", {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: "hidden",
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up("sm")]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: "nowrap",
//   boxSizing: "border-box",
//   ...(open && {
//     ...openedMixin(theme),
//     "& .MuiDrawer-paper": openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     "& .MuiDrawer-paper": closedMixin(theme),
//   }),
// }));

// export default function Dashboard() {
//   const theme = useTheme();
//   const [open, setOpen] = useState(false);
//   const [drawerList, setDrawerList] = useState({
//     main: [
//       {
//         name: 'Home',
//         icon: <HomeOutlinedIcon />,
//         navigation: ''
//       },
//       {
//         name: 'Family Books',
//         icon: <MenuBookOutlinedIcon />,
//         navigation: '',
//         expandable: true,
//         isExpanded: false,
//         expandedList: [
//           {
//             name: 'View Book',
//             navigation: ''
//           },
//           {
//             name: 'Create New Book',
//             navigation: ''
//           },
//           {
//             name: 'Upload Book',
//             navigation: ''
//           },
//         ]
//       },
//       {
//         name: 'Baptism Certificate',
//         icon: <ChildCareOutlinedIcon />,
//         navigation: ''
//       },
//       {
//         name: 'Marriage Certificate',
//         icon: <VolunteerActivismOutlinedIcon />,
//         navigation: ''
//       },
//       {
//         name: 'Death Certificates',
//         icon: <AccessibilityOutlinedIcon />,
//         navigation: ''
//       }
//     ],
//     section1: [
//       {
//         name: 'Novenas',
//         icon: <GroupsOutlinedIcon />,
//         expandable: true,
//         isExpanded: false,
//         expandedList: [
//           {
//             name: 'View Novenas',
//             navigation: ''
//           },
//           {
//             name: 'Create Novenas',
//             navigation: ''
//           }
//         ]
//       },
//       {
//         name: 'Zones',
//         icon: <GroupsOutlinedIcon />,
//         expandable: true,
//         isExpanded: false,
//         expandedList: [
//           {
//             name: 'View Zones',
//             navigation: ''
//           },
//           {
//             name: 'Create Zones',
//             navigation: ''
//           }
//         ]
//       },
//     ],
//     section2: [
//       {
//         name: 'Assistance',
//         icon: <VolunteerActivismOutlinedIcon />,
//         expandable: true,
//         isExpanded: false,
//         expandedList: [
//           {
//             name: 'View Families',
//             navigation: ''
//           },
//           {
//             name: 'Categories',
//             navigation: ''
//           }
//         ]
//       },
//     ],
//     section3: [
//       {
//         name: 'Celebrations',
//         icon: <CakeOutlinedIcon />,
//         navigation: ''
//       },
//     ],
//     misc: [
//       {
//         name: 'Settings',
//         icon: <SettingsOutlinedIcon />,
//         navigation: '',
//         expandable: true,
//         isExpanded: false,
//         expandedList: [
//           {
//             name: 'Users',
//             navigation: ''
//           }
//         ]
//       },
//       {
//         name: 'Logout',
//         icon: <ExitToAppOutlinedIcon />,
//         navigation: ''
//       },
//     ]
//   });

//   useEffect(() => {
//     console.log('drawerList', drawerList)
//   }, [drawerList])

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const handleDrawerButtons = (key, index) => {
//     let list = { ...drawerList };
//     list[key][index].isExpanded = !list[key][index].isExpanded;
//     setDrawerList(list);
//   }

//   return (
//     <Box sx={{ display: "flex" }}>
//       <CssBaseline />
//       <AppBar sx={{ bgcolor: "white" }} position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             // color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: "none" }),
//             }}
//           >
//             <MenuIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>
//       <Drawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <Stack
//             spacing={1}
//             direction={"column"}
//             justifyContent={"center"}
//             alignItems={"center"}
//           >
//             <Typography sx={{ fontSize: 14}} noWrap component="p">
//               ST JOSHEP CHURCH
//             </Typography>
//             <Typography sx={{ fontSize: 14 }} noWrap component="p">
//               KANUWANA
//             </Typography>
//           </Stack>

//           <IconButton onClick={handleDrawerClose}>
//             <MenuIcon />
//           </IconButton>
//         </DrawerHeader>
//         <Divider />

//         {Object.keys(drawerList).map((key) => (
//           <>
//             <List>
//               {drawerList[key].map((data, index) => (
//                 <ListItem key={data.name} disablePadding sx={{ display: "block" }}>
//                   <ListItemButton
//                     sx={{
//                       minHeight: 48,
//                       justifyContent: open ? "initial" : "center",
//                       px: 2.5,
//                     }}
//                     onClick={() => handleDrawerButtons(key, index)}
//                   >
//                     <ListItemIcon
//                       sx={{
//                         minWidth: 0,
//                         mr: open ? 3 : "auto",
//                         justifyContent: "center",
//                       }}
//                     >
//                       {data.icon}
//                     </ListItemIcon>
//                     <ListItemText primary={data.name} sx={{ opacity: open ? 1 : 0 }} />
//                     <ListItemIcon
//                       sx={{minWidth: 0}}
//                     >
//                       {data?.expandable && open && (data?.isExpanded ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
//                     </ListItemIcon>
//                   </ListItemButton>

//                   {data?.expandable && open &&
//                     <Collapse in={data?.isExpanded} timeout="auto" unmountOnExit>
//                       <List component="div" disablePadding>
//                         {
//                           data.expandedList.map((exData) => (
//                             <ListItemButton sx={{ pl: 8 }}>
//                               <ListItemIcon style={{ minWidth: '30px' }} >
//                                 <CircleIcon fontSize='inherit' />
//                               </ListItemIcon>
//                               <ListItemText primary={exData.name} />
//                             </ListItemButton>
//                           ))
//                         }
//                       </List>
//                     </Collapse>
//                   }
//                 </ListItem>
//               ))}
//             </List>
//             <Divider />
//           </>
//         ))
//         }
//       </Drawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <DrawerHeader />
//        {/* <ViewFamilyBook/> */}
//        <RouterConfig/>
        
//       </Box>
//     </Box>
//   );
// }
