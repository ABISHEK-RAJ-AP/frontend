import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AccountMenu from './AccountMenu';

const Header = () => {
  const { currentUser } = useSelector(state => state.user);

  return (
    <AppBar position="static" color="primary">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://www.pkiindia.in/Views/pkiinc/image/CDAC-Logo.png" alt="CDAC" style={{ height: 40, marginRight: 8 }} />
          <Typography variant="h6" component={Link} to="/" sx={{ color: '#fff', textDecoration: 'none' }}>
            Training Centre Management System
          </Typography>
        </Box>
        {currentUser && <AccountMenu />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
