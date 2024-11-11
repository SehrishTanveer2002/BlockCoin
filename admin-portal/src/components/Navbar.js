import React from 'react';
import { Box, Typography} from '@mui/material';

const Navbar = () => {
  return (
    <Box
      sx={{
        height: '85px',
        width: { xs: '100%', md: '97%', xl: '133.45%' },
        borderRadius: '0px 0px 10px 10px',
        boxShadow: '0px 4px 40px 10px rgba(0, 0, 0, 0.25)',
        background: '#FFFFFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 20px',
        overflow: 'hidden',
      }}
    >
        <Typography
        sx={{
          position: 'relative',
          width: '135px',
          height: '28px',
          left: {lg: '1220px' }, 
          fontFamily: 'Lato',
          fontSize: { xs: '14px', sm: '15px', md: '16px' },
          fontWeight: 400,
          lineHeight: '19.2px',
          textAlign: 'left',
          color: '#14302A',
        }}
      >
        Blockkoin Admin
      </Typography>

      <Box
        sx={{
          position: 'relative',
          width: '50px',
          height: '0px',
          top: '-4px',
          left: { lg: '635px'},
          borderTop: '2px solid #F0F3EE',
          opacity: 1, 
          transform: 'rotate(-90deg)', 
        }}
      />
<Box
  component="img"
  src="User_cicrle_light.png"
  alt="Description"
  sx={{
    position: 'relative',
    width: '52px',
    height: '52px',
    top: '-4px',
    left: {lg: '254px'},
  }}
/>

<Box
  component="img"
  src="Expand_down_light.png"
  alt="Expand Down"
  sx={{
    position: 'relative',
    width: '24px',
    height: '24px',
    top: '-5px',
    padding: '0px 6px',
    left: { lg: '8px' },
  }}
/>
    </Box>
  );
};

export default Navbar;
