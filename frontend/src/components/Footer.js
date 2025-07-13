import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box component="footer" sx={{ textAlign: 'center', p: 2, mt: 'auto', backgroundColor: '#f5f5f5' }}>
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} Training Centre Management System
    </Typography>
  </Box>
);

export default Footer;
