import {
  getDepreciationHandling,
  getExploitationBelowCapacity,
  getFollowPreSales,
  getIncreaseCapacity,
  getOweALot,
} from '@/api/chart';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import { columns0, columns1, columns2, columns3, columns4 } from './customPT';

export const Pattern = () => {
  const [value, setValue] = useState(0);
  const [tableData, setTableData] = useState(0);

  const convertData = (data) => {
    return data.map((e, index) => ({
      ...e,
      id: index,
      stockCode: e.id.stockCode,
      quarter: e.id.quarter,
      year: e.id.year,
    }));
  };

  const getDataTable = async () => {
    let result = [];
    let temp = [];
    if (value === 0) {
      result = await getIncreaseCapacity();
      if (result) {
        temp = convertData(result);
      }
    }
    if (value === 1) {
      result = await getFollowPreSales();
      if (result) {
        temp = convertData(result);
      }
    }
    if (value === 2) {
      result = await getOweALot();
      if (result) {
        temp = convertData(result);
      }
    }
    if (value === 3) {
      result = await getDepreciationHandling();
      if (result) {
        temp = convertData(result);
      }
    }
    if (value === 4) {
      result = await getExploitationBelowCapacity();
      if (result) {
        temp = convertData(result);
      }
    }
    setTableData(temp);
  };

  useEffect(() => {
    getDataTable();
  }, [value]);

  const paginationModel = { page: 0, pageSize: 10 };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ padding: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  };

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', height: '100vh', marginTop: '2rem', marginLeft: '1rem' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        sx={{
          '.MuiButtonBase-root': { textTransform: 'none', alignItems: 'start', textAlign: 'start' },
        }}
      >
        <Tab label="Gia tăng công suất" {...a11yProps(0)} />
        <Tab label="Theo dõi Pre-Sales" {...a11yProps(1)} />
        <Tab label="DN nợ nhiều, nhưng có điều kiện sớm chi trả" {...a11yProps(2)} />
        <Tab label="Xử lý Khấu hao nặng" {...a11yProps(3)} />
        <Tab label="Khai thác dưới công suất" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <DataGrid
          rows={tableData}
          columns={columns0}
          initialState={{ pagination: { paginationModel } }}
          disableColumnMenu
          sx={{
            border: 1,
            borderColor: '#EDE9DC',
            '.MuiDataGrid-row--borderBottom': { backgroundColor: 'transparent !important' },
          }}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DataGrid
          rows={tableData}
          columns={columns1}
          initialState={{ pagination: { paginationModel } }}
          disableColumnMenu
          sx={{
            border: 1,
            borderColor: '#EDE9DC',
            '.MuiDataGrid-row--borderBottom': { backgroundColor: 'transparent !important' },
          }}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DataGrid
          rows={tableData}
          columns={columns2}
          initialState={{ pagination: { paginationModel } }}
          disableColumnMenu
          sx={{
            border: 1,
            borderColor: '#EDE9DC',
            '.MuiDataGrid-row--borderBottom': { backgroundColor: 'transparent !important' },
          }}
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <DataGrid
          rows={tableData}
          columns={columns3}
          initialState={{ pagination: { paginationModel } }}
          disableColumnMenu
          sx={{
            border: 1,
            borderColor: '#EDE9DC',
            '.MuiDataGrid-row--borderBottom': { backgroundColor: 'transparent !important' },
          }}
        />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <DataGrid
          rows={tableData}
          columns={columns4}
          initialState={{ pagination: { paginationModel } }}
          disableColumnMenu
          sx={{
            border: 1,
            borderColor: '#EDE9DC',
            '.MuiDataGrid-row--borderBottom': { backgroundColor: 'transparent !important' },
          }}
        />
      </TabPanel>
    </Box>
  );
};
