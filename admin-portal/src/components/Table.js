import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const CustomTable = ({ rows, columns, sx, defaultCheckedRows = {} }) => {
  const [checkedStates, setCheckedStates] = useState({});

  useEffect(() => {
    setCheckedStates(defaultCheckedRows);
  }, [defaultCheckedRows]);

  const handleCheckboxChange = (rowId, type) => {
    setCheckedStates((prev) => ({
      ...prev,
      [rowId]: {
        ...prev[rowId],
        [type]: !prev[rowId]?.[type],
      },
    }));
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        width: '100%', 
        maxWidth: {lg:'905px'},
        borderRadius: '10px',
        backgroundColor: '#F0F3EE',
        boxShadow: '4px 4px 4px 0px #0000001A',
        padding: '8px',
        overflowX: 'auto',
        ...sx,
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell
                key={index}
                align="left"
                sx={{
                  width: index === 0 ? '200px' : 'auto',
                  fontFamily: 'Lato',
                  fontSize: {lg:'16px'},
                  fontWeight: 700,
                  textAlign: 'left',
                  color: '#14302A',
                  padding: '8px',
                  borderBottom: '1px solid #8C9B9180',
                  borderRight: index < columns.length - 1 ? '1px solid #8C9B9180' : 'none',
                }}
              >
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{
                borderBottom: rowIndex < rows.length - 1 ? '1px solid #8C9B9180' : 'none',
              }}
            >
              {columns.map((column, colIndex) => (
                <TableCell
                  key={colIndex}
                  align="left"
                  sx={{
                    fontFamily: 'Lato',
                    fontSize: {lg:'16px'},
                    fontWeight: 400,
                    color: '#14302A',
                    padding: '8px',
                   
                    borderRight: colIndex < columns.length - 1 ? '1px solid #8C9B9180' : 'none',

                    borderBottom: rowIndex < rows.length - 1 ? '1px solid #8C9B9180' : 'none',
                  }}
                >
                  {column === 'Default' || column === 'Intl. Default' ? (
                    <div
                    onClick={() => handleCheckboxChange(row.id, column)}
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '3px',
                      border: '1px solid #005640',
                      background: checkedStates[row.id]?.[column] ? '#FFFFFF' : '#FFFFFF',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center', 
                    }}
                  >
                    {checkedStates[row.id]?.[column] && (
                      <div
                        style={{
                          width: '11px',
                          height: '11px',
                          borderRadius: '3px',
                          background: '#005640', 
                        }}
                      />
                    )}
                  </div>
                  ) : column === 'Details' ? (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span>{row[column]}</span>
                      <IconButton
                        sx={{
                          color: '#00CE7E',
                          marginLeft: {lg:'138px'},
                        }}
                      >
                        <OpenInNewIcon />
                      </IconButton>
                    </div>
                  ) : (
                    row[column]
                  )}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;













