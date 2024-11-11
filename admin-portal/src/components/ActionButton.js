import React from 'react';
import { Button } from '@mui/material';

const ActionButton = ({ label, backgroundColor, boxShadow }) => {
  return (
    <Button
      sx={{
        width: '100px',
        height: '40px',
        borderRadius: '10px',
        backgroundColor: backgroundColor,
        color: '#FFFFFF',
        fontFamily: 'Lato',
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '19.2px',
        textAlign: 'center',
        boxShadow: boxShadow,
        '&:hover': {
          backgroundColor: backgroundColor, 
        },
      }}
    >
      {label}
    </Button>
  );
};

export default ActionButton;
