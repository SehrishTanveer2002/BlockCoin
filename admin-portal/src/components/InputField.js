import React from 'react';
import { Box, Typography } from '@mui/material';

const InputField = ({ placeholder, customStyles }) => {
  return (
    <Box
      sx={{
        width: '331.23px',
        height: '42.26px',
        borderRadius: '5px',
        backgroundColor: '#F0F3EE',
        boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        ...customStyles, 
      }}
    >
      <Typography
        sx={{
          width: '233.46px',
          height: '21.13px',
          fontFamily: 'Lato, sans-serif',
          fontSize: '16px',
          fontStyle: 'italic',
          fontWeight: 400,
          lineHeight: '19.2px',
          textAlign: 'left',
          color: '#8C9B91',
          marginLeft: '12px',
        }}
      >
        {placeholder}
      </Typography>
    </Box>
  );
};

export default InputField;
