import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
  { text: 'Dashboard', path: '/dashboard', isSelected: true },
  { text: 'Reports', path: '/reports', isSelected: false },
  { text: 'Unmatched', path: '/unmatched', isSelected: false },
  { text: 'Matched', path: '/matched', isSelected: false },
  { text: 'Withdraw', path: '/withdraw', isSelected: false },
  { text: 'Profiles', path: '/profiles', isSelected: false },
  { text: 'Bank', path: '/bank', isSelected: false }, 
  { text: 'Fees', path: '/fees', isSelected: false },
  { text: 'User Rights', path: '/user-rights', isSelected: false },
  { text: 'Settings', path: '/settings', isSelected: false },
  { text: 'Archive', path: '/archive', isSelected: false },
];

const Sidebar = () => {
  const [items, setItems] = useState(menuItems); 
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const updatedItems = items.map(item => ({
      ...item,
      isSelected: item.path === location.pathname,
    }));
    setItems(updatedItems);
  }, [location.pathname]); 

  const handleMenuItemClick = (path, index) => {
    navigate(path); 
  };

  return (
    <Box
      sx={{
        width: {lg:'270px'},
        height: '100vh',
        position: 'fixed',
        zIndex: 1000,
        borderRadius: '0px 10px 10px 0px',
        background: '#FFFFFF',
        boxShadow: '0px 4px 20px 0px #00000040',
        marginTop: '-85px',
      }}
    >
      <Box
        sx={{
          width: '130px',
          height: '56px',
          padding: '27px 66px 0px 43px',
          background: '#FFFFFF',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <img
          src="Logo_BK_Mint_RGB-01 1.png" 
          alt="Description" 
          style={{
            width: '195px',
            opacity: 1,
          }}
        />
      </Box>

      <Box
        sx={{
          width: '174px',
          height: 'calc(100vh - 112px)',
          position: 'relative',
          top: '50px',
          left: '49px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: '174px',
              height: '36px',
              padding: '0px 7px 0px 0px',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              opacity: 1,
              cursor: 'pointer',
            }}
            onClick={() => handleMenuItemClick(item.path, index)}
          >
            <Typography
              sx={{
                fontFamily: 'Lato',
                fontSize: '20px',
                fontWeight: item.isSelected ? '700' : '400',
                lineHeight: '31.2px',
                textAlign: 'right',
                color: item.isSelected ? '#00CE7E' : '#14302A',
              }}
            >
              {item.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Sidebar;



