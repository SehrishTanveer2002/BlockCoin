import React from 'react'; 
import { Box } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <> 
      <Navbar />
      <Box sx={{display: 'flex'}}>
        <Sidebar />
        <Box sx={{overflow: 'hidden' }}>
          {children}
        </Box>
      </Box>
    </>
  );
};

export default MainLayout;

