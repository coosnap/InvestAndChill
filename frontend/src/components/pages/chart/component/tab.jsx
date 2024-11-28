import { CodeValue } from '@/store/common';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Box, FormControlLabel, Stack, styled, Switch, Tab, Tabs, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import StackChart from './stack-chart';

const perf1 = {
  dataset: [
    { min: -12, max: -4, test: 155, precip: 79, month: '2019.Q4' },
    { min: -11, max: -3, test: 244, precip: 66, month: '2020.Q1' },
    { min: -6, max: 2, test: 133, precip: -76, month: '2020.Q2' },
    { min: 1, max: 9, test: 222, precip: -106, month: '2020.Q3' },
    { min: 8, max: 17, test: 111, precip: 105, month: '2020.Q4' },
    { min: 15, max: 24, test: 222, precip: 114, month: '2021.Q1' },
    { min: 18, max: 26, test: 333, precip: 106, month: '2021.Q2' },
    { min: 17, max: 26, test: 414, precip: -105, month: '2021.Q3' },
    { min: 13, max: 21, test: 155, precip: 100, month: '2021.Q4' },
    { min: 6, max: 13, test: 266, precip: 116, month: '2022.Q1' },
    { min: 0, max: 6, test: 177, precip: -93, month: '2022.Q2' },
    { min: -8, max: -1, test: 188, precip: 93, month: '2022.Q3' },
    { min: 1, max: 3, test: 220, precip: 13, month: '2022.Q4' },
    { min: 10, max: 5, test: 88, precip: 55, month: '2023.Q1' },
    { min: -8, max: 1, test: 115, precip: 93, month: '2023.Q2' },
    { min: 7, max: -1, test: 88, precip: 33, month: '2023.Q3' },
    { min: -1, max: -5, test: 333, precip: 93, month: '2023.Q4' },
    { min: 8, max: 1, test: 88, precip: 11, month: '2024.Q1' },
    { min: 50, max: 21, test: 110, precip: 33, month: '2024.Q2' },
    { min: -8, max: 1, test: 88, precip: 11, month: '2024.Q3' },
    { min: 8, max: 51, test: 881, precip: 55, month: '2024.Q4' },
  ],
  series: [
    { type: 'line', label: 'min', dataKey: 'min', color: '#C0BDAF', curve: 'linear' },
    { type: 'line', label: 'max', dataKey: 'max', color: '#FFC308', curve: 'linear' },
    {
      type: 'bar',
      label: 'test',
      dataKey: 'test',
      color: '#5B9BD5',
      yAxisId: 'rightAxis',
    },
    {
      type: 'bar',
      label: 'precip',
      dataKey: 'precip',
      color: '#ED7D31',
      yAxisId: 'rightAxis',
    },
  ],
  xAxis: {
    scaleType: 'band',
    dataKey: 'month',
    tickInterval: (value) => value.includes('Q1') && Number(value.split('.')[0]) % 2 === 0,
    valueFormatter: (value, context) => (context.location === 'tick' ? value.split('.')[0] : value),
    tickLabelStyle: {
      // angle: 270,
      textAnchor: 'end',
      // fontSize: 14,
      // fontWeight: 600,
    },
    categoryGapRatio: 0,
    barGapRatio: -1.005,
  },
};

const perf2 = {
  dataset: [
    { min: -12, max: -4, test: 155, precip: 79, month: '2019Q4' },
    { min: -11, max: -3, test: 244, precip: 66, month: '2020Q1' },
    { min: -6, max: 2, test: 133, precip: -76, month: '2020Q2' },
    { min: 1, max: 9, test: 222, precip: -106, month: '2020Q3' },
    { min: 8, max: 17, test: 111, precip: 105, month: '2020Q4' },
    { min: 15, max: 24, test: 222, precip: 114, month: '2021Q1' },
    { min: 18, max: 26, test: 333, precip: 106, month: '2021Q2' },
    { min: 17, max: 26, test: 414, precip: -105, month: '2021Q3' },
    { min: 13, max: 21, test: 155, precip: 100, month: '2021Q4' },
    { min: 6, max: 13, test: 266, precip: 116, month: '2022Q1' },
    { min: 0, max: 6, test: 177, precip: -93, month: '2022Q2' },
    { min: -8, max: -1, test: 188, precip: 93, month: '2022Q3' },
    { min: 1, max: 3, test: 220, precip: 13, month: '2022Q4' },
    { min: 10, max: 5, test: 88, precip: 55, month: '2023Q1' },
    { min: -8, max: 1, test: 115, precip: 93, month: '2023Q2' },
    { min: 7, max: -1, test: 88, precip: 33, month: '2023Q3' },
    { min: -1, max: -5, test: 333, precip: 93, month: '2023Q4' },
    { min: 8, max: 1, test: 88, precip: 11, month: '2024Q1' },
    { min: 50, max: 21, test: 110, precip: 33, month: '2024Q2' },
    { min: -8, max: 1, test: 88, precip: 11, month: '2024Q3' },
    { min: 8, max: 51, test: 881, precip: 55, month: '2024Q4' },
  ],
  series: [
    {
      type: 'bar',
      label: 'min',
      dataKey: 'min',
      color: '#BDBDBD',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'test',
      dataKey: 'test',
      color: '#5B9BD5',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'precip',
      dataKey: 'precip',
      color: '#ED7D31',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
  ],
  xAxis: {
    scaleType: 'band',
    dataKey: 'month',
    tickLabelStyle: {
      angle: 270,
      textAnchor: 'end',
      fontSize: 14,
      fontWeight: 600,
    },
    categoryGapRatio: 0.2,
    // barGapRatio: -1.005,
  },
};

const perf3 = {
  dataset: [
    { min: 12, max: 40, med: 4, precip: 79, month: '2019Q4' },
    { min: 11, max: 30, med: 3, precip: 66, month: '2020Q1' },
    { min: 6, max: 40, med: 2, precip: 76, month: '2020Q2' },
    { min: 1, max: 90, med: 9, precip: 106, month: '2020Q3' },
    { min: 8, max: 47, med: 1, precip: 105, month: '2020Q4' },
    { min: 15, max: 44, med: 2, precip: 114, month: '2021Q1' },
    { min: 18, max: 46, med: 2, precip: 106, month: '2021Q2' },
    { min: 17, max: 46, med: 2, precip: 105, month: '2021Q3' },
    { min: 13, max: 41, med: 2, precip: 100, month: '2021Q4' },
    { min: 6, max: 43, med: 1, precip: 116, month: '2022Q1' },
    { min: 0, max: 60, med: 6, precip: 93, month: '2022Q2' },
    { min: 8, max: 40, med: 1, precip: 93, month: '2022Q3' },
    { min: 1, max: 40, med: 3, precip: 13, month: '2022Q4' },
    { min: 10, max: 50, med: 5, precip: 55, month: '2023Q1' },
    { min: 8, max: 40, med: 1, precip: 93, month: '2023Q2' },
    { min: 7, max: 40, med: 2, precip: 33, month: '2023Q3' },
    { min: 1, max: 50, med: 5, precip: 93, month: '2023Q4' },
    { min: 8, max: 40, med: 1, precip: 11, month: '2024Q1' },
    { min: 10, max: 41, med: 2, precip: 33, month: '2024Q2' },
    { min: 8, max: 40, med: 1, precip: 11, month: '2024Q3' },
    { min: 8, max: 51, med: 5, precip: 55, month: '2024Q4' },
  ],
  series: [
    { type: 'line', label: 'min', dataKey: 'min', color: '#FFCF3D', curve: 'linear' },
    { type: 'line', label: 'med', dataKey: 'med', color: '#C32121', curve: 'linear' },
    { type: 'line', label: 'max', dataKey: 'max', color: '#FFCF3D', curve: 'linear' },
    {
      type: 'bar',
      label: 'precip',
      dataKey: 'precip',
      color: '#BDBDBD',
      yAxisId: 'rightAxis',
    },
  ],
  xAxis: {
    scaleType: 'band',
    dataKey: 'month',
    tickLabelStyle: {
      angle: 315,
      textAnchor: 'end',
      fontSize: 14,
      fontWeight: 600,
    },
    categoryGapRatio: 0.5,
    // barGapRatio: -1.005,
  },
};

const perf4 = {
  dataset: [
    { min: 12, max: 40, bar3: 1, bar2: 2, bar1: 79, month: '2019Q4' },
    { min: 11, max: 30, bar3: 1, bar2: 2, bar1: 66, month: '2020Q1' },
    { min: 6, max: 40, bar3: 1, bar2: 2, bar1: 76, month: '2020Q2' },
    { min: 1, max: 90, bar3: 1, bar2: 2, bar1: 106, month: '2020Q3' },
    { min: 8, max: 47, bar3: 1, bar2: 2, bar1: 105, month: '2020Q4' },
    { min: 15, max: 44, bar3: 1, bar2: 2, bar1: 114, month: '2021Q1' },
    { min: 18, max: 46, bar3: 1, bar2: 2, bar1: 106, month: '2021Q2' },
    { min: 17, max: 46, bar3: 1, bar2: 2, bar1: 105, month: '2021Q3' },
    { min: 13, max: 41, bar3: 1, bar2: 2, bar1: 100, month: '2021Q4' },
    { min: 6, max: 43, bar3: -5, bar2: 2, bar1: 116, month: '2022Q1' },
    { min: 0, max: 60, bar3: -5, bar2: 2, bar1: 93, month: '2022Q2' },
    { min: 8, max: 40, bar3: -5, bar2: 2, bar1: 93, month: '2022Q3' },
    { min: 1, max: 40, bar3: -5, bar2: 2, bar1: 13, month: '2022Q4' },
    { min: 10, max: 50, bar3: -5, bar2: 2, bar1: 55, month: '2023Q1' },
    { min: 8, max: 40, bar3: -5, bar2: 2, bar1: 93, month: '2023Q2' },
    { min: 7, max: 40, bar3: 1, bar2: 2, bar1: 33, month: '2023Q3' },
    { min: 1, max: 50, bar3: 1, bar2: 2, bar1: 93, month: '2023Q4' },
    { min: 8, max: 40, bar3: 1, bar2: 2, bar1: 11, month: '2024Q1' },
    { min: 10, max: 41, bar3: 1, bar2: 2, bar1: 33, month: '2024Q2' },
    { min: 8, max: 40, bar3: 1, bar2: 2, bar1: 11, month: '2024Q3' },
    { min: 8, max: 51, bar3: 1, bar2: 2, bar1: 55, month: '2024Q4' },
  ],
  series: [
    { type: 'line', label: 'min', dataKey: 'min', color: '#FFCF3D', curve: 'linear' },
    { type: 'line', label: 'max', dataKey: 'max', color: '#7131A1', curve: 'linear' },
    {
      type: 'bar',
      label: 'bar1',
      dataKey: 'bar1',
      color: '#BDBDBD',
      yAxisId: 'rightAxis',
    },
    {
      type: 'bar',
      label: 'bar2',
      dataKey: 'bar2',
      color: '#1CB7F0',
      yAxisId: 'rightAxis',
    },
    {
      type: 'bar',
      label: 'bar3',
      dataKey: 'bar3',
      color: '#C82020',
      yAxisId: 'rightAxis',
    },
  ],
  xAxis: {
    scaleType: 'band',
    dataKey: 'month',
    tickLabelStyle: {
      angle: 315,
      textAnchor: 'end',
      fontSize: 14,
      fontWeight: 600,
    },
    categoryGapRatio: 0.5,
    // barGapRatio: -1.005,
  },
};

const perf5 = {
  dataset: [
    { min: 12, max: 40, bar3: 1, bar2: 2, bar1: 79, month: '2019Q4' },
    { min: 11, max: 30, bar3: 1, bar2: 2, bar1: 66, month: '2020Q1' },
    { min: 6, max: 40, bar3: 1, bar2: 2, bar1: 76, month: '2020Q2' },
    { min: 1, max: 90, bar3: 1, bar2: 2, bar1: 106, month: '2020Q3' },
    { min: 8, max: 47, bar3: 1, bar2: 2, bar1: 105, month: '2020Q4' },
    { min: 15, max: 44, bar3: 1, bar2: 2, bar1: 114, month: '2021Q1' },
    { min: 18, max: 46, bar3: 1, bar2: 2, bar1: 106, month: '2021Q2' },
    { min: 17, max: 46, bar3: 1, bar2: 2, bar1: 105, month: '2021Q3' },
    { min: 13, max: 41, bar3: 1, bar2: 2, bar1: 100, month: '2021Q4' },
    { min: 6, max: 43, bar3: -5, bar2: 2, bar1: 116, month: '2022Q1' },
    { min: 0, max: 60, bar3: -5, bar2: 2, bar1: 93, month: '2022Q2' },
    { min: 8, max: 40, bar3: -5, bar2: 2, bar1: 93, month: '2022Q3' },
    { min: 1, max: 40, bar3: -5, bar2: 2, bar1: 13, month: '2022Q4' },
    { min: 10, max: 50, bar3: -5, bar2: 2, bar1: 55, month: '2023Q1' },
    { min: 8, max: 40, bar3: -5, bar2: 2, bar1: 93, month: '2023Q2' },
    { min: 7, max: 40, bar3: 1, bar2: 2, bar1: 33, month: '2023Q3' },
    { min: 1, max: 50, bar3: 1, bar2: 2, bar1: 93, month: '2023Q4' },
    { min: 8, max: 40, bar3: 1, bar2: 2, bar1: 11, month: '2024Q1' },
    { min: 10, max: 41, bar3: 1, bar2: 2, bar1: 33, month: '2024Q2' },
    { min: 8, max: 40, bar3: 1, bar2: 2, bar1: 11, month: '2024Q3' },
    { min: 8, max: 51, bar3: 1, bar2: 2, bar1: 55, month: '2024Q4' },
  ],
  series: [
    { type: 'line', label: 'max', dataKey: 'max', color: '#7131A1', curve: 'linear' },
    {
      type: 'bar',
      label: 'bar1',
      dataKey: 'bar1',
      color: '#FFC000',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
    {
      type: 'bar',
      label: 'bar2',
      dataKey: 'bar2',
      color: '#C10404',
      yAxisId: 'rightAxis',
      stack: 'stack',
    },
  ],
  xAxis: {
    scaleType: 'band',
    dataKey: 'month',
    tickLabelStyle: {
      angle: 315,
      textAnchor: 'end',
      fontSize: 14,
      fontWeight: 600,
    },
    categoryGapRatio: 0.5,
    // barGapRatio: -1.005,
  },
};

const perf6 = {
  dataset: [
    { min: 12, max: 40, bar3: 1, bar2: 20, bar1: 79, month: '2019Q4' },
    { min: 11, max: 30, bar3: 1, bar2: 40, bar1: 66, month: '2020Q1' },
    { min: 6, max: 40, bar3: 1, bar2: 30, bar1: 76, month: '2020Q2' },
    { min: 1, max: 90, bar3: 1, bar2: 20, bar1: 106, month: '2020Q3' },
    { min: 8, max: 47, bar3: 1, bar2: 40, bar1: 105, month: '2020Q4' },
    { min: 15, max: 44, bar3: 1, bar2: 50, bar1: 114, month: '2021Q1' },
    { min: 18, max: 46, bar3: 1, bar2: 30, bar1: 106, month: '2021Q2' },
    { min: 17, max: 46, bar3: 1, bar2: 20, bar1: 105, month: '2021Q3' },
    { min: 13, max: 41, bar3: 1, bar2: 40, bar1: 100, month: '2021Q4' },
    { min: 6, max: 43, bar3: -5, bar2: 50, bar1: 116, month: '2022Q1' },
    { min: 0, max: 60, bar3: -5, bar2: 60, bar1: 93, month: '2022Q2' },
    { min: 8, max: 40, bar3: -5, bar2: 30, bar1: 93, month: '2022Q3' },
    { min: 1, max: 40, bar3: -5, bar2: 20, bar1: 13, month: '2022Q4' },
    { min: 10, max: 50, bar3: -5, bar2: 40, bar1: 55, month: '2023Q1' },
    { min: 8, max: 40, bar3: -5, bar2: 50, bar1: 93, month: '2023Q2' },
    { min: 7, max: 40, bar3: 1, bar2: 60, bar1: 33, month: '2023Q3' },
    { min: 1, max: 50, bar3: 1, bar2: 40, bar1: 93, month: '2023Q4' },
    { min: 8, max: 40, bar3: 1, bar2: 2, bar1: 11, month: '2024Q1' },
    { min: 10, max: 41, bar3: 1, bar2: 20, bar1: 33, month: '2024Q2' },
    { min: 8, max: 40, bar3: 1, bar2: 2, bar1: 11, month: '2024Q3' },
    { min: 8, max: 51, bar3: 1, bar2: 20, bar1: 55, month: '2024Q4' },
  ],
  series: [
    { type: 'line', label: 'max', dataKey: 'max', color: '#C10404', curve: 'linear' },
    {
      type: 'bar',
      label: 'bar1',
      dataKey: 'bar1',
      color: '#D0D0D0',
      yAxisId: 'rightAxis',
    },
    {
      type: 'bar',
      label: 'bar2',
      dataKey: 'bar2',
      color: '#A6A6A6',
      yAxisId: 'rightAxis',
    },
  ],
  xAxis: {
    scaleType: 'band',
    dataKey: 'month',
    tickLabelStyle: {
      angle: 315,
      textAnchor: 'end',
      fontSize: 14,
      fontWeight: 600,
    },
    categoryGapRatio: 0.5,
    // barGapRatio: -1.005,
  },
};

const perf7 = {
  dataset: [
    { min: -12, max: -4, month: '2019Q4' },
    { min: -11, max: -3, month: '2020Q1' },
    { min: -6, max: 2, month: '2020Q2' },
    { min: 1, max: 9, month: '2020Q3' },
    { min: 8, max: 17, month: '2020Q4' },
    { min: 15, max: 24, month: '2021Q1' },
    { min: 18, max: 26, month: '2021Q2' },
    { min: 17, max: 26, month: '2021Q3' },
    { min: 13, max: 21, month: '2021Q4' },
    { min: 6, max: 13, month: '2022Q1' },
    { min: 0, max: 6, month: '2022Q2' },
    { min: -8, max: -1, month: '2022Q3' },
    { min: 1, max: 3, month: '2022Q4' },
    { min: 10, max: 5, month: '2023Q1' },
    { min: -8, max: 1, month: '2023Q2' },
    { min: 7, max: -1, month: '2023Q3' },
    { min: -1, max: -5, month: '2023Q4' },
    { min: 8, max: 1, month: '2024Q1' },
    { min: 50, max: 21, month: '2024Q2' },
    { min: -8, max: 1, month: '2024Q3' },
    { min: 8, max: 51, month: '2024Q4' },
  ],
  series: [
    { type: 'line', label: 'min', dataKey: 'min', color: '#C0BDAF', curve: 'linear' },
    { type: 'line', label: 'max', dataKey: 'max', color: '#FFC308', curve: 'linear' },
  ],
  xAxis: {
    scaleType: 'band',
    dataKey: 'month',
    tickLabelStyle: {
      angle: 270,
      textAnchor: 'end',
      fontSize: 14,
      fontWeight: 600,
    },
    categoryGapRatio: 0,
    barGapRatio: -1.005,
  },
};

export const TabChart = () => {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [dataChart, setDataChart] = useState([]);

  const codeValue = useRecoilValue(CodeValue);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   const loadData = async () => {
  //     if (codeValue) {
  //       setIsLoading(true);
  //       try {
  //         const perf1 = await getDataChart('perf1', codeValue, false);
  //         const perf2 = await getDataChart('perf2', codeValue, false);
  //         const perf3 = await getDataChart('perf3', codeValue, false);
  //         const perf4 = await getDataChart('perf3', codeValue, false);
  //         const perf5 = await getDataChart('perf3', codeValue, false);
  //         const perf6 = await getDataChart('perf3', codeValue, false);
  //         const perf7 = await getDataChart('perf3', codeValue, false);
  //         if (perf1 && perf2 && perf3 && perf4 && perf5 && perf6 && perf7) {
  //           setDataChart({
  //             perf1: perf1,
  //             perf2: perf2,
  //             perf3: perf3,
  //             perf4: perf4,
  //             perf5: perf5,
  //             perf6: perf6,
  //             perf7: perf7,
  //           });
  //           setIsLoading(false);
  //         } else {
  //           setIsLoading(false);
  //         }
  //       } catch (error) {
  //         setIsLoading(false);
  //       }
  //     }
  //   };
  //   loadData();
  // }, [codeValue]);

  const IOSSwitch = styled((props) => <Switch {...props} />)(({ theme }) => ({
    width: 38,
    height: 18,
    padding: 2,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 0,
      // transform: 'translateX(2px)',
      '&.Mui-checked': {
        transform: 'translateX(20px)',
      },
    },
    '& .MuiSwitch-thumb': {
      width: 17.5,
      height: 17.5,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
    },
  }));

  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  return (
    <Box sx={{ width: '98%', margin: 'auto' }}>
      {show && (
        <div
          className="fixed bottom-2 right-2 cursor-pointer"
          onClick={() => window.scrollTo(0, 0)}
        >
          <ArrowCircleUpIcon color="warning" fontSize="large" />
        </div>
      )}
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
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Typography>Năm</Typography>
            <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
            <Typography>Quý</Typography>
          </Stack>
        </div>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {codeValue && (
          <div className="flex flex-col gap-8">
            <div className="flex gap-8">
              <div className="lg:w-1/2 md:w-full">
                <div className="mb-4">
                  <div className="flex">
                    <div className="flex flex-1 font-bold">Chart title</div>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <Typography>Năm</Typography>
                      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                      <Typography>Quý</Typography>
                    </Stack>
                  </div>
                </div>
                <StackChart data={perf1} />
              </div>
              <div className="lg:w-1/2 md:w-full">
                <div className="mb-4">
                  <div className="flex">
                    <div className="flex flex-1 font-bold"></div>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <Typography>Năm</Typography>
                      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                      <Typography>Quý</Typography>
                    </Stack>
                  </div>
                </div>
                <StackChart data={perf2} />
              </div>
            </div>
            <div className="flex gap-8">
              <div className="lg:w-1/2 md:w-full">
                <div className="mb-4">
                  <div className="flex">
                    <div className="flex flex-1 font-bold"></div>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <Typography>Năm</Typography>
                      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                      <Typography>Quý</Typography>
                    </Stack>
                  </div>
                </div>
                <StackChart data={perf3} />
              </div>
              <div className="lg:w-1/2 md:w-full">
                <div className="mb-4">
                  <div className="flex">
                    <div className="flex flex-1 font-bold"></div>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <Typography>Năm</Typography>
                      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                      <Typography>Quý</Typography>
                    </Stack>
                  </div>
                </div>
                <StackChart data={perf4} />
              </div>
            </div>
            <div className="flex gap-8">
              <div className="lg:w-1/2 md:w-full">
                <div className="mb-4">
                  <div className="flex">
                    <div className="flex flex-1 font-bold"></div>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <Typography>Năm</Typography>
                      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                      <Typography>Quý</Typography>
                    </Stack>
                  </div>
                </div>
                <StackChart data={perf5} />
              </div>
              <div className="lg:w-1/2 md:w-full">
                <div className="mb-4">
                  <div className="flex">
                    <div className="flex flex-1 font-bold"></div>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <Typography>Năm</Typography>
                      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                      <Typography>Quý</Typography>
                    </Stack>
                  </div>
                </div>
                <StackChart data={perf6} />
              </div>
            </div>
            <div className="flex gap-8">
              <div className="lg:w-1/2 md:w-full">
                <div className="mb-4">
                  <div className="flex">
                    <div className="flex flex-1 font-bold"></div>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <Typography>Năm</Typography>
                      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                      <Typography>Quý</Typography>
                    </Stack>
                  </div>
                </div>
                <StackChart data={perf7} />
              </div>
              <div className="lg:w-1/2 md:w-full">
                <div className="mb-4">
                  <div className="flex">
                    <div className="flex flex-1 font-bold"></div>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <Typography>Năm</Typography>
                      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                      <Typography>Quý</Typography>
                    </Stack>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
