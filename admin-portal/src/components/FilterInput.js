import React from 'react';
import { Box, TextField, InputAdornment } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const FilterInput = ({ label }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        background: '#F0F3EE',
        borderRadius: '10px',
        width: '259px',
        height: '40px',
        padding: '0 10px',
      }}
    >
      <TextField
        placeholder={label}
        variant="standard"
        InputProps={{
          disableUnderline: true,
          startAdornment: (
            <InputAdornment position="start">
              <FilterListIcon
                sx={{
                  color: '#8C9B91',
                  width: '24px',
                  height: '24px',
                }}
              />
            </InputAdornment>
          ),
        }}
        sx={{
          width: '100%',
          height: '100%',
          fontFamily: 'Lato',
          fontSize: '18px',
          fontWeight: '400',
          lineHeight: '19.2px',
          color: '#8C9B91',
          top: '5px',
        }}
      />
    </Box>
  );
};

export default FilterInput;
