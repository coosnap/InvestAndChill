import { getDataChart } from '@/api/chart';
import Loader from '@/components/common/Loader';
import { CodeValue } from '@/store/common';
import { Box, Stack, Switch, Tab, Tabs, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { ResponsiveContainer } from 'recharts';
import { useRecoilValue } from 'recoil';
import LineComponent from './line';
import StackedBarChart from './stacked-bar';

export const TabChart = () => {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [dataChart, setDataChart] = useState([]);

  const codeValue = useRecoilValue(CodeValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const loadData = async () => {
      if (codeValue) {
        setIsLoading(true);
        try {
          const perf1 = await getDataChart('perf1', codeValue, false);
          const perf2 = await getDataChart('perf2', codeValue, false);
          const perf3 = await getDataChart('perf3', codeValue, false);
          if (perf1 && perf2) {
            setDataChart({
              perf1: perf1.reverse(),
              perf2: perf2.reverse(),
              perf3: perf3.reverse(),
            });
            setIsLoading(false);
          } else {
            setIsLoading(false);
          }
        } catch (error) {
          setIsLoading(false);
        }
      }
    };
    loadData();
  }, [codeValue]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Box sx={{ width: '98%', margin: 'auto' }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: 'divider',
          margin: '0 24px',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          backgroundColor: '#FFF4C7',
        }}
      >
        <div className="text-[2rem] font-bold pt-4">{codeValue}</div>
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
          <Stack direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
            <Typography>Năm</Typography>
            <Switch defaultChecked={false} inputProps={{ 'aria-label': 'ant design' }} />
            <Typography>Quý</Typography>
          </Stack>
        </div>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="flex flex-col gap-8">
          <div className="flex md:flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 md:w-full">
              <div className="mb-4">
                <Stack direction="row" sx={{ alignItems: 'center' }}>
                  <Typography>Năm</Typography>
                  <Switch defaultChecked={false} inputProps={{ 'aria-label': 'ant design' }} />
                  <Typography>Quý</Typography>
                </Stack>
                <ResponsiveContainer width={'100%'} height={400}>
                  <LineComponent dataChart={dataChart} />
                </ResponsiveContainer>
              </div>
            </div>
            {/* <div className="lg:w-1/2 md:w-full">
              <div className="mb-4">
                <Stack direction="row" sx={{ alignItems: 'center' }}>
                  <Typography>Năm</Typography>
                  <Switch defaultChecked={false} inputProps={{ 'aria-label': 'ant design' }} />
                  <Typography>Quý</Typography>
                </Stack>
              </div>
              <ResponsiveContainer width={'100%'} height={400}>
                <StackedBarChart dataChart={dataChart} />
              </ResponsiveContainer>
            </div> */}
          </div>
          <div className="flex md:flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 md:w-full">
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <Typography>Năm</Typography>
                <Switch defaultChecked={false} inputProps={{ 'aria-label': 'ant design' }} />
                <Typography>Quý</Typography>
              </Stack>
              <ResponsiveContainer width={'100%'} height={400}>
                <StackedBarChart dataChart={dataChart} />
              </ResponsiveContainer>
            </div>
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
