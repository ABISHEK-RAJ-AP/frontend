import React from 'react';
import { Divider, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const SimpleSideBar = ({ basePath }) => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/');
  return (
    <>
      <ListItemButton component={Link} to={`/${basePath}/dashboard`}>
        <ListItemIcon>
          <HomeIcon color={isActive(`/${basePath}/dashboard`) ? 'primary' : 'inherit'} />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItemButton>
      <ListItemButton component={Link} to={`/${basePath}/profile`}>
        <ListItemIcon>
          <AccountCircleOutlinedIcon color={isActive(`/${basePath}/profile`) ? 'primary' : 'inherit'} />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
      <Divider sx={{ my: 1 }} />
      <ListItemButton component={Link} to="/logout">
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItemButton>
    </>
  );
};

export default SimpleSideBar;
