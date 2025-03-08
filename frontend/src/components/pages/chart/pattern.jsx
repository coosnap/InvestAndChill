import {
  getDepreciationHandling,
  getExploitationBelowCapacity,
  getFollowPreSales,
  getIncreaseCapacity,
  getOweALot,
} from '@/api/chart';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { DataGridComponent } from './component/data-grid';
import { SortPopupComponent } from './component/sort-popup';
import { columns0, columns1, columns2, columns3, columns4 } from './customPT';

export const Pattern = () => {
  const [value, setValue] = useState(0);
  const [condition, setCondition] = useState({ quarter: '1', year: dayjs() });
  const [tableData, setTableData] = useState(0);

  const currentYear = dayjs();

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
      if (condition.quarter) {
        result = await getIncreaseCapacity(condition);
        if (result) {
          temp = convertData(result);
        }
      } else {
        result = await getIncreaseCapacity();
        if (result) {
          temp = convertData(result);
        }
      }
    }
    if (value === 1) {
      if (condition) {
        result = await getFollowPreSales(condition);
        if (result) {
          temp = convertData(result);
        }
      } else {
        result = await getFollowPreSales();
        if (result) {
          temp = convertData(result);
        }
      }
    }
    if (value === 2) {
      if (condition) {
        result = await getOweALot(condition);
        if (result) {
          temp = convertData(result);
        }
      } else {
        result = await getOweALot();
        if (result) {
          temp = convertData(result);
        }
      }
    }
    if (value === 3) {
      if (condition) {
        result = await getDepreciationHandling(condition);
        if (result) {
          temp = convertData(result);
        }
      } else {
        result = await getDepreciationHandling();
        if (result) {
          temp = convertData(result);
        }
      }
    }
    if (value === 4) {
      if (condition) {
        result = await getExploitationBelowCapacity(condition);
        if (result) {
          temp = convertData(result);
        }
      } else {
        result = await getExploitationBelowCapacity();
        if (result) {
          temp = convertData(result);
        }
      }
    }
    setTableData(temp);
  };

  useEffect(() => {
    getDataTable();
  }, [value, condition]);

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
          <Box sx={{ padding: 3, paddingTop: 0 }}>
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

  const FilterComponent = () => {
    return (
      <div className="flex items-end gap-4 mb-4">
        <FormControl sx={{ width: '10rem' }} size="small">
          <InputLabel
            id="quarter-select-label"
            sx={{
              backgroundColor: '#FFF8DC',
            }}
          >
            Quý
          </InputLabel>
          <Select
            labelId="quarter-select-label"
            id="quarter-select"
            value={condition.quarter || ''}
            onChange={(e) => setCondition((prev) => ({ ...prev, quarter: e.target.value }))}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label={'Năm'}
              openTo="year"
              views={['year']}
              yearsOrder="desc"
              maxDate={currentYear}
              sx={{ width: '10%' }}
              value={condition?.year ? dayjs(condition?.year) : dayjs()}
              onChange={(newValue) => setCondition((prev) => ({ ...prev, year: newValue }))}
              slotProps={{ textField: { size: 'small' } }}
            />
          </DemoContainer>
        </LocalizationProvider>
      </div>
    );
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        marginTop: '2rem',
        marginLeft: '1rem',
      }}
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
        <Tab label="Chiếm dụng vốn của khách hàng" {...a11yProps(1)} />
        <Tab label="Dòng tiền trả nợ tốt" {...a11yProps(2)} />
        <Tab label="Chi phí khấu hao nhiều" {...a11yProps(3)} />
        <Tab label="Khai thác dưới công suất" {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="flex items-center gap-4">
          <SortPopupComponent columns={columns0} />
          <FilterComponent />
        </div>
        <DataGridComponent tableData={tableData} columns={columns0} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FilterComponent />
        <DataGridComponent tableData={tableData} columns={columns1} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <FilterComponent />
        <DataGridComponent tableData={tableData} columns={columns2} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <FilterComponent />
        <DataGridComponent tableData={tableData} columns={columns3} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <FilterComponent />
        <DataGridComponent tableData={tableData} columns={columns4} />
      </TabPanel>
    </Box>
  );
};
