import React from 'react';
import { Typography } from '@mui/material';

const StyledText = ({ text, sx = {} }) => {
  return (
    <Typography
      sx={{
        fontFamily: 'Lato',
        fontSize: '24px',
        fontWeight: '700',
        lineHeight: '28.8px',
        textAlign: 'center',
        color: '#005640',
        width: '259px',
        height: '29px',
        ...sx, 
      }}
    >
      {text}
    </Typography>
  );
};

export default StyledText;
