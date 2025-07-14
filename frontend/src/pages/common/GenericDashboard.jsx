import React, { useState } from 'react';
import { CssBaseline, Box, Toolbar, List, Typography, IconButton, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Routes, Route, Navigate } from 'react-router-dom';
import AccountMenu from '../../components/AccountMenu';
import { AppBar, Drawer } from '../../components/styles';
import SimpleSideBar from './SimpleSideBar';
import PlaceholderDashboard from './PlaceholderDashboard';
import PlaceholderProfile from './PlaceholderProfile';

const GenericDashboard = ({ role }) => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => setOpen(!open);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar open={open} position="absolute">
        <Toolbar sx={{ pr: '24px' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            {role} Dashboard
          </Typography>
          <AccountMenu />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open} sx={open ? styles.drawerStyled : styles.hideDrawer}>
        <Toolbar sx={styles.toolBarStyled}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav">
          <SimpleSideBar basePath={role} />
        </List>
      </Drawer>
      <Box component="main" sx={styles.boxStyled}>
        <Toolbar />
        <Routes>
          <Route path="/" element={<PlaceholderDashboard role={role} />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path={`/${role}/dashboard`} element={<PlaceholderDashboard role={role} />} />
          <Route path={`/${role}/profile`} element={<PlaceholderProfile role={role} />} />
        </Routes>
      </Box>
    </Box>
  );
};

const styles = {
  boxStyled: {
    backgroundColor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  toolBarStyled: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    px: [1],
  },
  drawerStyled: {
    display: 'flex',
  },
  hideDrawer: {
    display: 'flex',
    '@media (max-width: 600px)': {
      display: 'none',
    },
  },
};

export default GenericDashboard;
