import React from 'react';
import { Box, Typography } from '@mui/material';

const SectionHeading = ({ text = "Admin Dashboard", sx = {} }) => {
  return (
    <Box
      sx={{
        width: '451px',
        height: '38px',
        position: 'absolute',
        top: '399px',
        left: '169px',
        ...sx, 
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'Aleo, serif',
          fontSize: '40px',
          fontWeight: 700,
          lineHeight: '48px',
          textAlign: 'left',
          color: '#005640',
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default SectionHeading;

