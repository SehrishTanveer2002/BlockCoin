// AccountBox.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const AccountBox = ({ title, amount , top, left}) => {
  return (
    <Box
      sx={{
        borderRadius: '10px',
        backgroundColor: '#FFFFFF',
        boxShadow: '4px 4px 4px 0px #0000001A',
        position: 'absolute',
        top: top,
        left: left,
        width: '410px',
        height: '90px',
        padding: '10px',
      }}
    >
     

      {/* Title */}
      <Typography
        sx={{
          fontFamily: 'Lato',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '21.6px',
          textAlign: 'left',
          color: '#14302A',
          position: 'absolute',
          top: '25px',
          left: '28px',
        }}
      >
        {title}
      </Typography>

      {/* Currency */}
      <Typography
        sx={{
          fontFamily: 'Lato',
          fontSize: '26px',
          fontWeight: '700',
          lineHeight: '28.8px',
          textAlign: 'left',
          color: '#14302A',
          position: 'absolute',
          top: '58px',
          left: '30px',
        }}
      >
      $
      </Typography>

      {/* Total Amount */}
      <Typography
        sx={{
          fontFamily: 'Lato',
          fontSize: '33px',
          fontWeight: '400',
          lineHeight: '43.2px',
          textAlign: 'left',
          color: '#005640',
          position: 'absolute',
          top: '64px',
          left: '50px',
        }}
      >
        {amount}
      </Typography>
    </Box>
  );
};

export default AccountBox;



