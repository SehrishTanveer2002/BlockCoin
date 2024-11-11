import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import SectionHeading from '../components/SectionHeading';
import InputField from '../components/InputField';
import ButtonBox from '../components/ButtonBox';

const SignIn = () => {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleSignIn = () => {
      navigate('/dashboard'); 
    };

  return (
    <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      background: '#F0F3EE',
      width: '100%', 
      height: '1080px',
      position: 'relative',
      overflow: 'hidden',
      }}
    >
    <Box
        sx={{
        width: '89%',
        height: '120vh',
        justifyContent: 'center',
        background: '#FFFFFF', 
        borderRadius: '10px 10px 10px 10px', 
        boxShadow: '10px 10px 4px 0px rgba(0, 0, 0, 0.08)', 
        position: 'absolute',
         left: '87px',
        }}
      />

      <Box
        component="img"
        src="Logo_BK_Mint_RGB-01 1.png"
        alt="Logo"
        sx={{
          width: '205px',
          height: '65px',
          position: 'absolute',
          top: '252px',
          left: '112px',
          opacity: 1, 
        }}
      />
        <SectionHeading />
      <Box
        component="img"
        src="BLOCKOIN-COMP7_3500x3500px 1.png"
        alt=""
        sx={{
          width: '622px',
          height: '596px',
          position: 'absolute',
          top: '266px',
          left: '734px',
          opacity: 1,
        }}
      />

      <Typography
        sx={{
          width: '448px',
          height: '32px',
          position: 'relative',
          top: '-60px',
          left: '170px',
          fontFamily: 'Lato, sans-serif',
          fontSize: '21px',
          fontWeight: 400,
          lineHeight: '25.2px',
          color: '#14302A',
        }}
      >
        Please sign in
      </Typography>

       {/* Email Input */}
       <InputField
              placeholder="Enter Email Address"
              customStyles={{
                top: '22px',
                right: '285px',
              }}
            />

            {/* Password Input */}
            <InputField
              placeholder="Enter Password"
              customStyles={{
                top: '82px',
                right: '615px',
              }}
            />

        <ButtonBox
              onClick={handleSignIn}
              label="SIGN IN"
              customStyles={{
                top: '162px',
                right: '945px',
              }}
            />

      <Typography
        sx={{
          width: '130px',
          height: '25px',
          position: 'relative',
          top: '219px',
          right: '1045px',
          fontFamily: 'Lato, sans-serif',
          fontSize: '15px',
          fontWeight: 400,
          lineHeight: '18px',
          color: '#005640',
          textDecoration: 'underline',
          textDecorationColor: '#005640', 
          whiteSpace: 'nowrap',
        }}
      >
        Request Access
      </Typography>

      </Box>

  );
};

export default SignIn;

