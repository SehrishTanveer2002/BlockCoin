import React from 'react';
import { Box, Typography } from '@mui/material';

const DashboardCard = ({ title, amount, bgColor, color, top, left, currency,image }) => {
  return (
    <Box
      sx={{
        borderRadius: '10px',
        backgroundColor: bgColor,
        boxShadow: '4px 4px 4px 0px #0000001A',
        position: 'absolute',
        top: top,
        left: left, 
        width: '410px',
        height: '90px',
        padding: '10px',
      }}
    >
         {/* Image */}
      {image && (
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: '26px',
            height: '24.75px',
            marginLeft: '390px',
            marginTop: '-10px',
          }}
        />
      )}
      {/* Title */}
      <Typography
        sx={{
          width: '448px',
          height: '32px',
          fontFamily: 'Lato',
          fontSize: '19px',
          fontWeight: '400',
          lineHeight: '21.6px',
          textAlign: 'left',
          color: '#FFFFFF',
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
          width: '30px',
          height: '32px',
          fontFamily: 'Lato',
          fontSize: '26px',
          fontWeight: '700',
          lineHeight: '28.8px',
          textAlign: 'left',
          color: '#FFFFFF',
          position: 'absolute',
          top: '58px',
          left: '30px',
        }}
      >
        {currency}
      </Typography>

      {/* Total Amount */}
      <Typography
        sx={{
          width: '411px',
          height: '82px',
          fontFamily: 'Lato',
          fontSize: '33px',
          fontWeight: '700',
          lineHeight: '43.2px',
          textAlign: 'left',
          color: color,
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

export default DashboardCard;

