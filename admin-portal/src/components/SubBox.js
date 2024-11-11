import React from 'react';
import { Box, Typography } from '@mui/material';

const SubBox = ({ text, count, showIcon, top, left }) => {
  return (
    <Box
      sx={{
        width: {lg:'190px'},
        height: {lg:'90px'},
        position: 'absolute',
        top: top,
        left: left,
        marginLeft: '-40px',
        display: 'flex',
        alignItems: 'flex-start',
        padding: {lg: '10px'}, 
        backgroundColor: '#005640',
        borderRadius: '10px',
        boxShadow: '4px 4px 4px 0px #0000001A',
      }}
    >
      <Box
        sx={{
          width: 'auto',
          height: 'auto',
          padding: '16px 28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}
      >
        {/* Text */}
        <Typography
          sx={{
            width: '185px',
            height: '32px',
            fontFamily: 'Lato',
            fontSize: '18px',
            fontWeight: '400',
            marginLeft: '-20px',
            marginTop: '-10px',
            lineHeight: '21.6px',
            textAlign: 'left',
            color: '#FFFFFF',
          }}
        >
          {text}
        </Typography>

        {/* Count */}
        <Typography
          sx={{
            width: '172px',
            height: '82px',
            fontFamily: 'Lato',
            fontSize: '36px',
            fontWeight: '700',
            lineHeight: '43.2px',
            marginLeft: '-20px',
            marginTop: '10px',
            textAlign: 'left',
            color: '#00CE7E',
          }}
        >
          {count}
        </Typography>
      </Box>

      {showIcon && (
        <Box
          component="img"
          src="BK_Icons_Final_Paths_Update-05 1.png"
          alt="Icon"
          sx={{
            width: '26px',
            height: '24.75px',
            alignSelf: 'flex-start',
            marginLeft: '-50px',
            marginTop: '-10px',
          }}
        />
      )}
    </Box>
  );
};

export default SubBox;

