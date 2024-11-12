import { Box, Stack, styled, Switch, Tab, Tabs, Typography } from '@mui/material';
import React, { useState } from 'react';
import LineComponent from './line';
import Chart10 from './chart10';
import Chart16 from './chart16';
import { ResponsiveContainer } from 'recharts';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 50,
  height: 24,
  padding: 0,
  borderRadius: 50,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(26px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#1890ff',
        ...theme.applyStyles('dark', {
          backgroundColor: '#177ddc',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 20,
    height: 20,
    borderRadius: 50,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
    ...theme.applyStyles('dark', {
      backgroundColor: 'rgba(255,255,255,.35)',
    }),
  },
}));

export const TabChart = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <div className="flex justify-between">
          <Tabs
            sx={{ '.css-1h9z7r5-MuiButtonBase-root-MuiTab-root': { fontWeight: 'bold' } }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Tổng quan" {...a11yProps(0)} />
            <Tab label="Định giá" {...a11yProps(1)} />
            <Tab label="Lợi nhuận" {...a11yProps(2)} />
          </Tabs>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Typography>Năm</Typography>
            <AntSwitch defaultChecked={false} inputProps={{ 'aria-label': 'ant design' }} />
            <Typography>Quý</Typography>
          </Stack>
        </div>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="flex flex-col gap-8">
          <div className="flex md:flex-col lg:flex-row  gap-8">
            <div className="lg:w-1/2 md:w-full">
              <div className="mb-4">
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                  <Typography>Năm</Typography>
                  <AntSwitch defaultChecked={false} inputProps={{ 'aria-label': 'ant design' }} />
                  <Typography>Quý</Typography>
                </Stack>
              </div>
              <ResponsiveContainer width={'100%'} height={400}>
                <LineComponent />
              </ResponsiveContainer>
            </div>
            <div className="lg:w-1/2 md:w-full">
              <div className="mb-4">
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                  <Typography>Năm</Typography>
                  <AntSwitch defaultChecked={false} inputProps={{ 'aria-label': 'ant design' }} />
                  <Typography>Quý</Typography>
                </Stack>
              </div>
              <ResponsiveContainer width={'100%'} height={400}>
                <Chart10 />
              </ResponsiveContainer>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <Typography>Năm</Typography>
                <AntSwitch defaultChecked={false} inputProps={{ 'aria-label': 'ant design' }} />
                <Typography>Quý</Typography>
              </Stack>
            </div>
            <ResponsiveContainer width={'100%'} height={400}>
              <Chart16 />
            </ResponsiveContainer>
          </div>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Định giá
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Lợi nhuận
      </CustomTabPanel>
    </Box>
  );
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
