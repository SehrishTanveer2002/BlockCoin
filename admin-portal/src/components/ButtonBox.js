import React from 'react';
import { Box, Typography } from '@mui/material';

const ButtonBox = ({ onClick, label, customStyles }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: '100px',
        height: '40px',
        borderRadius: '10px',
        backgroundColor: '#00CE7E',
        boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        position: 'relative',
        ...customStyles, 
      }}
    >
      <Typography
        sx={{
          width: '100px',
          height: '24px',
          fontFamily: 'Lato, sans-serif',
          fontSize: '20px',
          fontWeight: 700,
          lineHeight: '24px',
          textAlign: 'center',
          color: '#FFFFFF',
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default ButtonBox;
