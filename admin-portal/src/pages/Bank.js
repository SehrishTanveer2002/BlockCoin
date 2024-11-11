import React from 'react';
import { Box } from '@mui/material';
import SectionHeading from '../components/SectionHeading';
import RectangleBox from '../components/RectangleBox';
import FilterInput from '../components/FilterInput';
import ActionButton from '../components/ActionButton';
import StyledText from '../components/StyledText';
import CustomTable from '../components/Table';
import MainLayout from '../layouts/MainLayout';

const Bank = () => {
  // Table 1
  const columnsSA = ['Bank', 'Active', 'Rank', 'Default', 'Intl. Default', 'Details'];
  const rowsSA = [
    { id: 0, Bank: 'FNB', Active: 'Yes', Rank: '1', Default: 'No', 'Intl. Default': 'No', Details: 'Currencies receivable: ZAR' },
    { id: 1, Bank: 'Standard Bank', Active: 'Yes', Rank: '2', Default: 'Yes', 'Intl. Default': 'No', Details: 'Currencies receivable: N/A' },
    { id: 2, Bank: 'ABSA', Active: 'No', Rank: '3', Default: 'No', 'Intl. Default': 'Yes', Details: 'Currencies receivable: ZAR' },
  ];

  // Table 2
  const columnsUK = ['Bank', 'Active', 'Rank', 'Default', 'Intl. Default', 'Details'];
  const rowsUK = [
    { id: 0, Bank: 'WISE', Active: 'Yes', Rank: '1', Default: 'Yes', 'Intl. Default': 'Yes', Details: 'Currencies receivable: GBP' },
    { id: 1, Bank: 'Circle', Active: 'Yes', Rank: '2', Default: 'No', 'Intl. Default': 'No', Details: 'Currencies receivable: EUR' },
    { id: 2, Bank: 'Sample', Active: 'No', Rank: '3', Default: 'No', 'Intl. Default': 'Yes', Details: 'Currencies receivable: N/A' },
  ];

  return (
    <MainLayout>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          background: '#F0F3EE',
          flexDirection: 'column',
          width: { lg: '80.79%' },
          height: { lg: '150vh' },
          left: '270px',
          position: 'absolute',
          overflow: 'hidden',
          boxShadow: 'inset 0px 6px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Section Heading */}
        <SectionHeading
          text="Bank"
          sx={{ width: { lg: '100%' }, height: '38px', top: {lg:'50px'}, left: { lg: '80px' } }}
        />

        {/* Rectangle Component */}
        <RectangleBox
          sx={{
            marginTop: '30px',
            top: '80px',
            left: '10px',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              top: '30px',
              left: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              gap: '20px',
              width: '95%',
            }}
          >
            {/* Filter Inputs */}
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <FilterInput label="Filter by country" />
              <FilterInput label="Filter by bank" />
            </Box>

            {/* Action buttons */}
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <ActionButton
                label="ADD"
                backgroundColor="#00CE7E"
                boxShadow="4px 4px 4px 0px #0000001A"
              />
              <ActionButton
                label="DELETE"
                backgroundColor="#AA322D"
                boxShadow="4px 4px 4px 0px #0000001A"
              />
            </Box>
          </Box>

          <StyledText text="SOUTH AFRICA" sx={{ marginTop: '55px', marginLeft: '10px' }} />
          <CustomTable
            rows={rowsSA}
            columns={columnsSA}
            sx={{ marginTop: '5px', marginLeft: '35px' }}
            defaultCheckedRows={{ 0: { Default: true } }}
          />

          <StyledText text="UNITED KINGDOM" sx={{ marginTop: '32px', marginLeft: '35px' }} />
          <CustomTable
            rows={rowsUK}
            columns={columnsUK}
            sx={{ marginTop: '5px', marginLeft: '35px' }}
            defaultCheckedRows={{ 0: { 'Intl. Default': true } }}
          />
        </RectangleBox>
      </Box>
    </MainLayout>
  );
};

export default Bank;


