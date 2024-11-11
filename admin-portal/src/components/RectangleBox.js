import React from 'react';
import { Box } from '@mui/material';

const RectangleBox = ({ width = '1350px', height = '877px', children, sx = {} }) => {
  return (
    <Box
      sx={{
        width: width,
        height: height,
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
        boxShadow: '10px 10px 4px 0px #0000000D',
        position: 'relative',
        ...sx, 
        '@media (max-width: 1440px)': {
          left: '0px',
          width: '980px',
          height: '727px'
        },
      }}
    >
      {children}
    </Box>
  );
};

export default RectangleBox;
