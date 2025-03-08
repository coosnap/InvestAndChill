import {
  getDepreciationHandling,
  getExploitationBelowCapacity,
  getFollowPreSales,
  getIncreaseCapacity,
  getOweALot,
} from '@/api/chart';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import {
  Autocomplete,
  Dialog,
  FormControl,
  InputLabel,
  MenuItem,
  Popover,
  Select,
  TextField,
} from '@mui/material';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import { DataGridComponent } from './component/data-grid';
import SortItem from './component/sort-item';
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

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElPopover, setAnchorElPopover] = useState(null);
  const [sortValue, setSortValue] = useState([
    { headerName: 'stockCode', adesc: 'asc' },
    { headerName: 'year', adesc: 'asc' },
  ]);

  const dragItem = useRef(0);
  const draggedOverItem = useRef(0);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const openPopover = Boolean(anchorElPopover);
  const idPopover = openPopover ? 'simple-popover' : undefined;

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClickPopover = (event) => {
    setAnchorElPopover(anchorElPopover ? null : event.currentTarget);
  };

  const handleRemove = (value) => {
    const findItem = sortValue.findIndex((item) => item.headerName === value.headerName);
    setSortValue(sortValue.splice(findItem - 1, 1));
  };

  const handleSort = () => {
    const listItemClone = [...sortValue];
    const temp = listItemClone[dragItem.current];
    listItemClone[dragItem.current] = listItemClone[draggedOverItem.current];
    listItemClone[draggedOverItem.current] = temp;
    setSortValue(listItemClone);
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
          <div>
            <button
              aria-describedby={id}
              type="button"
              onClick={handleClick}
              className="border border-gray rounded-full mb-2 p-1"
            >
              <SwapVertIcon />
            </button>
            <Dialog
              onClose={handleClick}
              id={id}
              open={open}
              anchorel={anchorEl}
              hideBackdrop
              sx={{
                '& .MuiDialog-container': {
                  justifyContent: 'flex-start',
                  alignItems: 'flex-start',
                },

                '& .MuiPaper-root': {
                  top: '115px',
                  left: '115px',
                  boxShadow: 'none',
                },
              }}
            >
              <div className="bg-[#f9eec1] rounded">
                <div className="pt-3">
                  {sortValue.map((item, index) => (
                    <div
                      key={item.headerName}
                      className="flex items-center ml-2 cursor-pointer"
                      draggable
                      onDragStart={() => (dragItem.current = index)}
                      onDragEnter={() => (draggedOverItem.current = index)}
                      onDragEnd={handleSort}
                      onDragOver={(e) => e.preventDefault()}
                    >
                      <DragIndicatorIcon fontSize="small" />
                      <SortItem columns={columns0} item={item} handleRemove={handleRemove} />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col ml-4 pb-4 gap-2">
                  <button
                    className="flex items-center text-sm w-[92px]"
                    aria-describedby={id}
                    onClick={handleClickPopover}
                  >
                    <AddIcon fontSize="small" />
                    <span className="ml-1">Add sort</span>
                  </button>
                  <Popover
                    id={idPopover}
                    open={openPopover}
                    anchorEl={anchorElPopover}
                    onClose={handleClickPopover}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                    sx={{
                      '& .MuiPopover-paper': {
                        top: '280px !important',
                        left: '158px !important',
                        boxShadow: 'none',
                      },
                    }}
                  >
                    <div className="bg-[#ffeea8] h-[200px] p-4">
                      <Autocomplete
                        disablePortal
                        size="small"
                        options={[{ label: 'The Shawshank Redemption', year: 1994 }]}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </div>
                  </Popover>
                  <button className="flex items-center text-sm w-[92px]" onClick={() => {}}>
                    <DeleteIcon fontSize="small" />
                    <span className="ml-1">Delete sort</span>
                  </button>
                </div>
              </div>
            </Dialog>
          </div>
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
