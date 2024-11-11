import React from 'react';
import { Box, Typography } from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import SubBox from '../components/SubBox';
import MainLayout from '../layouts/MainLayout';
import DashboardCard from '../components/DashboardCard';
import AccountBox from '../components/AccountBox';

const Dashboard = () => {
  return (
    <MainLayout>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: '#F0F3EE',
        flexDirection: 'column',
        width: {lg:'80.79%'},
        height: {lg:'150vh'},
        padding: {lg:'0px'}, 
        position: 'absolute',
        left: '270px',
        overflow: 'hidden',
        boxShadow: 'inset 0px 6px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      {/* Section Heading */}
      <SectionHeading
        text="Dashboard"
        sx={{ width: {lg:'100%'}, height: '38px', top: {lg:'50px'}, left: {lg:'80px'}, 
         }}
      />

<div style={{ position: 'relative', height: '100vh' }}>

      {/* Total Company Funds Under Management */}
      <DashboardCard
        title="Total Company Funds Under Management"
        amount="999,999,999,999,999.99"
        bgColor="#14302A"
        currency="$"
        color="#00CE7E"
        top="120px"
        left="-480px"
      />

      {/* Unmatched Funds Box */}
      <DashboardCard
        title="Unmatched Funds"
        amount="999,999,999,999,999.99"
        bgColor="#BA8F52"
        currency="$"
        color="#FFFFFF"
        top="270px"
        left="-480px"
      />

       {/* Pending Release Box */}
       <DashboardCard
        title="Pending Release"
        amount="999,999,999,999,999.99"
        bgColor="#00CE7E"
        currency="$"
        color="#FFFFFF"
        top="420px"
        left="-480px"
      />

       {/* Revenue (Month to Date) */}
       <DashboardCard
        title="Revenue (Month to Date)"
        amount="999,999,999,999,999.99"
        bgColor="#005640"
        currency="$"
        color="#00CE7E"
        top="570px"
        left="-480px"
        image="BK_Icons_Final_Paths_Update-05 1.png"
      />  

<AccountBox
        title="Due To Trading Account Box"
        amount="999,999,999,999,999.99"
        top="120px"
        left="66px"
      /> 

<AccountBox
        title="Due To Trading Account Box"
        amount="999,999,999,999,999.99"
        top="270px"
        left="66px"
      /> 

<AccountBox
        title="Total Cash"
        amount="999,999,999,999,999.99"
        top="420px"
        left="66px"
      /> 

     <SubBox 
     text="New Accounts" 
     count="99999999"
     showIcon={true} 
     top="570px" 
     left="105px" />

     <SubBox 
     text="1st Time Deposits" 
      count="99999999" 
      showIcon={true} 
      top="570px"
      left="330px" />
  </div>

    </Box>
    </MainLayout>
  );
};

export default Dashboard;


