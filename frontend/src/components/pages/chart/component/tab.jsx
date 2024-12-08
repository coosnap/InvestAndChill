import { getDataChartNonFinancial, getDataChartStock, getTypeDataChart } from '@/api/chart';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Box, FormControlLabel, Stack, styled, Switch, Tab, Tabs, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import StackChart from './stack-chart';
import {
  customPerfPTC1,
  customPerfPTC2,
  customPerfPTC3,
  customPerfPTC4,
  customPerfPTC5,
  customPerfPTC6,
  customPerfPTC7,
  customPerfPTC8,
  customCFPTC1,
  customCFPTC2,
  customCFPTC4,
} from './custom';

const bal2 = {
  dataset: [
    { min: 12, max: 40, bar3: 1, bar2: 20, bar1: 7, month: '2019.Q4' },
    { min: 11, max: 30, bar3: 1, bar2: 40, bar1: 6, month: '2020.Q1' },
    { min: 6, max: 40, bar3: 1, bar2: 30, bar1: 6, month: '2020.Q2' },
    { min: 1, max: 30, bar3: 1, bar2: 20, bar1: 16, month: '2020.Q3' },
    { min: 8, max: 47, bar3: 1, bar2: 4, bar1: 15, month: '2020.Q4' },
    { min: 15, max: 44, bar3: 1, bar2: 5, bar1: 14, month: '2021.Q1' },
    { min: 18, max: 46, bar3: 1, bar2: 3, bar1: 16, month: '2021.Q2' },
    { min: 17, max: 46, bar3: 1, bar2: 2, bar1: 15, month: '2021.Q3' },
    { min: 13, max: 41, bar3: 1, bar2: 4, bar1: 10, month: '2021.Q4' },
    { min: 6, max: 43, bar3: -5, bar2: 5, bar1: 6, month: '2022.Q1' },
    { min: 0, max: 60, bar3: -5, bar2: 6, bar1: 3, month: '2022.Q2' },
    { min: 8, max: 40, bar3: -5, bar2: 3, bar1: 3, month: '2022.Q3' },
    { min: 1, max: 40, bar3: -5, bar2: 2, bar1: 13, month: '2022.Q4' },
    { min: 10, max: 50, bar3: -5, bar2: 4, bar1: 5, month: '2023.Q1' },
    { min: 8, max: 40, bar3: -5, bar2: 5, bar1: 3, month: '2023.Q2' },
    { min: 7, max: 40, bar3: 1, bar2: 6, bar1: 3, month: '2023.Q3' },
    { min: 1, max: 50, bar3: 1, bar2: 4, bar1: 3, month: '2023.Q4' },
    { min: 8, max: 40, bar3: 1, bar2: 2, bar1: 11, month: '2024.Q1' },
    { min: 10, max: 41, bar3: 1, bar2: 2, bar1: 33, month: '2024.Q2' },
    { min: 8, max: 40, bar3: 1, bar2: 2, bar1: 11, month: '2024.Q3' },
    { min: 8, max: 51, bar3: 1, bar2: 2, bar1: 5, month: '2024.Q4' },
  ],
  series: [
    {
      type: 'line',
      label: 'max',
      dataKey: 'max',
      color: '#C10404',
      yAxisId: 'rightAxis',
      area: true,
      stack: 'total',
      showMark: false,
    },
    {
      type: 'line',
      label: 'bar1',
      dataKey: 'bar1',
      color: '#3B64AD',
      yAxisId: 'rightAxis',
      area: true,
      stack: 'total',
      showMark: false,
    },
    {
      type: 'line',
      label: 'bar2',
      dataKey: 'bar2',
      color: '#929292',
      yAxisId: 'rightAxis',
      area: true,
      stack: 'total',
      showMark: false,
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
    categoryGapRatio: 0.5,
    // barGapRatio: -1.005,
  },
  yAxis: {
    left: { type: 'bil' },
    right: { type: 'per' },
  },
};

export const TabChart = () => {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [dataChart, setDataChart] = useState([]);
  const [tabType, setTabType] = useState('');
  const [checked, setChecked] = useState({
    chart: true,
    perf1: true,
    perf2: true,
    perf4: true,
    perf5: true,
    perf7: true,
    cf1: true,
    cf2: true,
    cf4: true,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const codeValue = searchParams.get('code') || '';

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
    '& .css-byenzh-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked': {
      color: 'grey',
    },
    '& .css-byenzh-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
      backgroundColor: 'grey',
    },
    '& .css-jsexje-MuiSwitch-thumb': {
      backgroundColor: 'grey',
    },
    '& .css-1yjjitx-MuiSwitch-track': {
      backgroundColor: 'grey',
    },
  }));

  const IOSSwitchSum = styled((props) => <Switch {...props} />)(({ theme }) => ({
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
    '& .css-byenzh-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked': {
      color: 'red',
    },
    '& .css-byenzh-MuiButtonBase-root-MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
      backgroundColor: 'red',
    },
  }));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const formatData = (data) => {
    let temp = data.map((e) => ({ ...e, month: e.id.year + '.Q' + e.id.quarter }));
    return {
      title: data[0].title,
      dataset: [...temp],
    };
  };

  const mapDataChart = async (custom) => {
    const result = await getDataChartNonFinancial(custom.type, codeValue, custom.year);
    let format = await formatData(result);
    let perf = {
      ...format,
      series: custom.series,
      xAxis: {
        scaleType: 'band',
        dataKey: 'month',
        tickInterval: (value) =>
          !custom.year ? value.includes('Q1') && Number(value.split('.')[0]) % 2 === 0 : value,
        valueFormatter: (value, context) =>
          context.location === 'tick' ? value.split('.')[0] : value,
        categoryGapRatio: 0.5,
      },
      yAxis: custom.yAxis,
    };
    return perf;
  };

  useEffect(() => {
    const loadData = async () => {
      if (codeValue) {
        setDataChart([]);
        setIsLoading(true);
        try {
          const type = await getTypeDataChart(codeValue);
          setTabType(type.type);
          if (type.type === 'PTC') {
            let perf1 = await mapDataChart(customPerfPTC1);
            let perf2 = await mapDataChart(customPerfPTC2);
            let perf3 = await mapDataChart(customPerfPTC3);
            let perf4 = await mapDataChart(customPerfPTC4);
            let perf5 = await mapDataChart(customPerfPTC5);
            let perf6 = await mapDataChart(customPerfPTC6);
            let perf7 = await mapDataChart(customPerfPTC7);
            let perf8 = await mapDataChart(customPerfPTC8);

            let cf1 = await mapDataChart(customCFPTC1);
            let cf2 = await mapDataChart(customCFPTC2);
            let cf4 = await mapDataChart(customCFPTC4);

            if (
              perf1 &&
              perf2 &&
              perf3 &&
              perf4 &&
              perf5 &&
              perf6 &&
              perf7 &&
              perf8 &&
              cf1 &&
              cf2 &&
              cf4
            ) {
              setDataChart({
                perf1: perf1,
                perf2: perf2,
                perf3: perf3,
                perf4: perf4,
                perf5: perf5,
                perf6: perf6,
                perf7: perf7,
                perf8: perf8,
                cf1: cf1,
                cf2: cf2,
                cf4: cf4,
              });
            }
            setValue(0);
            setIsLoading(false);
          }
          if (type.type === 'ChungKhoan') {
            const result1 = await getDataChartStock('perf1', codeValue, false);
            let format1 = await formatData(result1);
            let perf1 = {
              ...format1,
              series: [
                {
                  type: 'line',
                  label: 'bienLaiGop',
                  dataKey: 'bienLaiGop',
                  curve: 'linear',
                  yAxisId: 'rightAxis',
                },
                {
                  type: 'line',
                  label: 'bienLaiRong',
                  dataKey: 'bienLaiRong',
                  curve: 'linear',
                  yAxisId: 'rightAxis',
                },
                {
                  type: 'bar',
                  label: 'doanhSoThuan',
                  dataKey: 'doanhSoThuan',
                  yAxisId: 'leftAxis',
                },
                {
                  type: 'bar',
                  label: 'loiNhuanCuaCoDongCongTyMe',
                  dataKey: 'loiNhuanCuaCoDongCongTyMe',
                  yAxisId: 'leftAxis',
                },
              ],
              xAxis: {
                scaleType: 'band',
                dataKey: 'month',
                tickInterval: (value) =>
                  value.includes('Q1') && Number(value.split('.')[0]) % 2 === 0,
                valueFormatter: (value, context) =>
                  context.location === 'tick' ? value.split('.')[0] : value,
                categoryGapRatio: 0.5,
                // barGapRatio: -1.005,
              },
              yAxis: {
                left: { type: 'bil' },
                right: { type: 'per' },
              },
            };
            const result2 = await getDataChartStock('perf2', codeValue, false);
            let format2 = await formatData(result2);
            let perf2 = {
              ...format2,
              series: [
                {
                  type: 'line',
                  label: 'roe',
                  dataKey: 'roe',
                  curve: 'linear',
                  yAxisId: 'leftAxis',
                },
                {
                  type: 'line',
                  label: 'roa',
                  dataKey: 'roa',
                  curve: 'linear',
                  yAxisId: 'leftAxis',
                },
                {
                  type: 'line',
                  label: 'roic',
                  dataKey: 'roic',
                  curve: 'linear',
                  yAxisId: 'leftAxis',
                },
              ],
              xAxis: {
                scaleType: 'band',
                dataKey: 'month',
                tickInterval: (value) =>
                  value.includes('Q1') && Number(value.split('.')[0]) % 2 === 0,
                valueFormatter: (value, context) =>
                  context.location === 'tick' ? value.split('.')[0] : value,
                categoryGapRatio: 0.5,
                // barGapRatio: -1.005,
              },
              yAxis: {
                left: { type: 'per' },
                right: { type: 'bil' },
              },
            };
            const result3 = await getDataChartStock('perf3', codeValue, false);
            let format3 = await formatData(result3);
            let perf3 = {
              ...format3,
              series: [
                {
                  type: 'bar',
                  label: 'loiNhuanCotLoi',
                  dataKey: 'loiNhuanCotLoi',
                  yAxisId: 'leftAxis',
                  stack: 'stack',
                },
                {
                  type: 'bar',
                  label: 'loiNhuanTaiChinh',
                  dataKey: 'loiNhuanTaiChinh',
                  yAxisId: 'leftAxis',
                  stack: 'stack',
                },
                {
                  type: 'bar',
                  label: 'thuNhapKhac',
                  dataKey: 'thuNhapKhac',
                  yAxisId: 'leftAxis',
                  stack: 'stack',
                },
              ],
              xAxis: {
                scaleType: 'band',
                dataKey: 'month',
                tickInterval: (value) =>
                  value.includes('Q1') && Number(value.split('.')[0]) % 2 === 0,
                valueFormatter: (value, context) =>
                  context.location === 'tick' ? value.split('.')[0] : value,
                categoryGapRatio: 0.5,
                // barGapRatio: -1.005,
              },
              yAxis: {
                left: { type: 'bil' },
                right: { type: 'per' },
              },
            };
            const result4 = await getDataChartStock('perf4', codeValue, false);
            let format4 = await formatData(result4);
            let perf4 = {
              ...format4,
              series: [
                {
                  type: 'bar',
                  label: 'salesTrailing',
                  dataKey: 'salesTrailing',
                  yAxisId: 'leftAxis',
                  stack: 'stack',
                },
                {
                  type: 'line',
                  label: 'gpmtrailing',
                  dataKey: 'gpmtrailing',
                  curve: 'linear',
                  yAxisId: 'rightAxis',
                },
                {
                  type: 'line',
                  label: 'sgamtrailing',
                  dataKey: 'sgamtrailing',
                  curve: 'linear',
                  yAxisId: 'rightAxis',
                },
                {
                  type: 'line',
                  label: 'ebitmTrailing',
                  dataKey: 'ebitmTrailing',
                  curve: 'linear',
                  yAxisId: 'rightAxis',
                },
              ],
              xAxis: {
                scaleType: 'band',
                dataKey: 'month',
                tickInterval: (value) =>
                  value.includes('Q1') && Number(value.split('.')[0]) % 2 === 0,
                valueFormatter: (value, context) =>
                  context.location === 'tick' ? value.split('.')[0] : value,
                categoryGapRatio: 0.5,
                // barGapRatio: -1.005,
              },
              yAxis: {
                left: { type: 'bil' },
                right: { type: 'per' },
              },
            };
            // const perf5 = await getDataChartStock('perf3', codeValue, false);
            if (perf1 && perf2 && perf3 && perf4) {
              setDataChart({
                perf1: perf1,
                perf2: perf2,
                perf3: perf3,
                perf4: perf4,
                // perf5: perf5,
              });
            }
            setIsLoading(false);
            setValue(1);
          }
        } catch (error) {
          setIsLoading(false);
        }
      }
    };
    loadData();
  }, [codeValue]);

  console.log('dataChart', dataChart);

  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleToggle = async (typeChart) => {
    if (typeChart === 'perf1') {
      customPerfPTC1.year = checked.perf1;
      let newPerf = await mapDataChart(customPerfPTC1);
      setDataChart((prev) => ({ ...prev, perf1: newPerf }));
      setChecked((prev) => ({ ...prev, perf1: !prev.perf1 }));
    }
    if (typeChart === 'perf2') {
      customPerfPTC2.year = checked.perf2;
      let newPerf = await mapDataChart(customPerfPTC2);
      setDataChart((prev) => ({ ...prev, perf2: newPerf }));
      setChecked((prev) => ({ ...prev, perf2: !prev.perf2 }));
    }
    if (typeChart === 'perf4') {
      if (checked.perf4) {
        customPerfPTC4.series[1] = {
          type: 'bar',
          label: 'Lợi nhuận tài chính TTM (one-off adjusted)',
          dataKey: 'netFinancialAdjustTrailing',
          yAxisId: 'leftAxis',
        };
        let newPerf = await mapDataChart(customPerfPTC4);
        console.log('newPerf', newPerf);
        setDataChart((prev) => ({ ...prev, perf4: newPerf }));
        setChecked((prev) => ({ ...prev, perf4: !prev.perf4 }));
      } else {
        customPerfPTC4.series[1] = {
          type: 'bar',
          label: 'Lợi nhuận tài chính TTM',
          dataKey: 'netFinanceialTrailing',
          yAxisId: 'leftAxis',
        };
        let newPerf = await mapDataChart(customPerfPTC4);
        setDataChart((prev) => ({ ...prev, perf4: newPerf }));
        setChecked((prev) => ({ ...prev, perf4: !prev.perf4 }));
      }
    }
    if (typeChart === 'perf5') {
      if (checked.perf5) {
        customPerfPTC5.series[0] = {
          type: 'bar',
          label: 'Lợi nhuận ròng TTM (one-off adjusted)',
          dataKey: 'nitrailingAdjust',
          yAxisId: 'rightAxis',
          stack: 'stack',
        };
        let newPerf = await mapDataChart(customPerfPTC5);
        setDataChart((prev) => ({ ...prev, perf5: newPerf }));
        setChecked((prev) => ({ ...prev, perf5: !prev.perf5 }));
      } else {
        customPerfPTC5.series[1] = {
          type: 'bar',
          label: 'Lợi nhuận ròng TTM',
          dataKey: 'nitrailing',
          yAxisId: 'rightAxis',
          stack: 'stack',
        };
        let newPerf = await mapDataChart(customPerfPTC5);
        setDataChart((prev) => ({ ...prev, perf5: newPerf }));
        setChecked((prev) => ({ ...prev, perf5: !prev.perf4 }));
      }
    }
    if (typeChart === 'perf7') {
      customPerfPTC7.year = checked.perf7;
      let newPerf = await mapDataChart(customPerfPTC7);
      setDataChart((prev) => ({ ...prev, perf7: newPerf }));
      setChecked((prev) => ({ ...prev, perf7: !prev.perf7 }));
    }
    if (typeChart === 'cf1') {
      customCFPTC1.year = checked.cf1;
      let newPerf = await mapDataChart(customCFPTC1);
      setDataChart((prev) => ({ ...prev, cf1: newPerf }));
      setChecked((prev) => ({ ...prev, cf1: !prev.cf1 }));
    }
    if (typeChart === 'cf2') {
      customCFPTC2.year = checked.cf2;
      let newPerf = await mapDataChart(customCFPTC2);
      setDataChart((prev) => ({ ...prev, cf2: newPerf }));
      setChecked((prev) => ({ ...prev, cf2: !prev.cf2 }));
    }
    if (typeChart === 'cf4') {
      customCFPTC4.year = checked.cf4;
      let newPerf = await mapDataChart(customCFPTC4);
      setDataChart((prev) => ({ ...prev, cf4: newPerf }));
      setChecked((prev) => ({ ...prev, cf4: !prev.cf4 }));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  if (isLoading) {
    return <></>;
  }

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
            {tabType === 'PTC' &&
              [
                'Chi phí và Sinh lời',
                'Tài sản & Nguồn vốn',
                'Hiệu quả đồng vốn',
                'Cash flow',
                'Định giá',
              ].map((e, index) => <Tab key={e} label={e} {...a11yProps(index)} />)}
            {tabType === 'ChungKhoan' && <Tab label="Chứng khoán" {...a11yProps(1)} />}
            {tabType === 'NganHang' && <Tab label="Ngân hàng" {...a11yProps(2)} />}
          </Tabs>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Typography>Năm</Typography>
            <FormControlLabel control={<IOSSwitchSum sx={{ m: 1 }} defaultChecked />} />
            <Typography>Quý</Typography>
          </Stack>
        </div>
      </Box>
      {tabType === 'PTC' && (
        <>
          <CustomTabPanel value={value} index={0}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold">{dataChart?.perf1?.title || ''}</div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel
                            checked={checked.perf1}
                            onChange={() => handleToggle('perf1')}
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.perf1 && <StackChart data={dataChart.perf1} />}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold">{dataChart?.perf2?.title || ''}</div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel
                            checked={checked.perf2}
                            onChange={() => handleToggle('perf2')}
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.perf2 && <StackChart data={dataChart.perf2} />}
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold">{dataChart?.perf3?.title || ''}</div>
                      </div>
                    </div>
                    {dataChart && dataChart.perf3 && <StackChart data={dataChart.perf3} />}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold">{dataChart?.perf4?.title || ''}</div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Adjust</Typography>
                          <FormControlLabel
                            checked={checked.perf4}
                            onChange={() => handleToggle('perf4')}
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          />
                          <Typography>No Adjust</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.perf4 && <StackChart data={dataChart.perf4} />}
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold">{dataChart?.perf5?.title || ''}</div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Adjust</Typography>
                          <FormControlLabel
                            checked={checked.perf5}
                            onChange={() => handleToggle('perf5')}
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          />
                          <Typography>No Adjust</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.perf5 && <StackChart data={dataChart.perf5} />}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold">{dataChart?.perf6?.title || ''}</div>
                      </div>
                    </div>
                    {dataChart && dataChart.perf6 && <StackChart data={dataChart.perf6} />}
                  </div>
                </div>
              </div>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className="flex gap-8">
              <div className="lg:w-1/2 md:w-full">
                <div className="mb-4">
                  <div className="flex">
                    <div className="flex flex-1 font-bold">{dataChart?.perf7?.title || ''}</div>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <Typography>Năm</Typography>
                      <FormControlLabel
                        checked={checked.perf7}
                        onChange={() => handleToggle('perf7')}
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>Quý</Typography>
                    </Stack>
                  </div>
                </div>
                {dataChart && dataChart.perf7 && <StackChart data={dataChart.perf7} />}
              </div>
              <div className="lg:w-1/2 md:w-full">
                <div className="mb-4">
                  <div className="flex">
                    <div className="flex flex-1 font-bold">{dataChart?.perf8?.title || ''}</div>
                  </div>
                </div>
                {/* <StackChart data={bal2} /> */}
                {dataChart && dataChart.perf8 && <StackChart data={dataChart.perf8} />}
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <div className="flex gap-8">
              <div className="lg:w-1/2 md:w-full">
                <div className="mb-4">
                  <div className="flex">
                    <div className="flex flex-1 font-bold">{dataChart?.cf1?.title || ''}</div>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <Typography>Năm</Typography>
                      <FormControlLabel
                        checked={checked.cf1}
                        onChange={() => handleToggle('cf1')}
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>Quý</Typography>
                    </Stack>
                  </div>
                </div>
                {dataChart && dataChart.cf1 && <StackChart data={dataChart.cf1} />}
              </div>
              <div className="lg:w-1/2 md:w-full">
                <div className="mb-4">
                  <div className="flex">
                    <div className="flex flex-1 font-bold">{dataChart?.perf8?.title || ''}</div>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <Typography>Năm</Typography>
                      <FormControlLabel
                        checked={checked.cf2}
                        onChange={() => handleToggle('cf2')}
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>Quý</Typography>
                    </Stack>
                  </div>
                </div>
                {dataChart && dataChart.cf2 && <StackChart data={dataChart.cf2} />}
              </div>
            </div>
            <div className="flex gap-8">
              <div className="lg:w-1/2 md:w-full">
                <div className="mb-4">
                  <div className="flex">
                    <div className="flex flex-1 font-bold">{dataChart?.cf1?.title || ''}</div>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <Typography>Năm</Typography>
                      <FormControlLabel
                        checked={checked.cf1}
                        onChange={() => handleToggle('cf1')}
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>Quý</Typography>
                    </Stack>
                  </div>
                </div>
                {/* {dataChart && dataChart.cf1 && <StackChart data={dataChart.cf1} />} */}
              </div>
              <div className="lg:w-1/2 md:w-full">
                <div className="mb-4">
                  <div className="flex">
                    <div className="flex flex-1 font-bold">{dataChart?.perf8?.title || ''}</div>
                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                      <Typography>Năm</Typography>
                      <FormControlLabel
                        checked={checked.cf4}
                        onChange={() => handleToggle('cf4')}
                        control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                      />
                      <Typography>Quý</Typography>
                    </Stack>
                  </div>
                </div>
                {dataChart && dataChart.cf4 && <StackChart data={dataChart.cf4} />}
              </div>
            </div>
          </CustomTabPanel>
          {/* <StackChart data={bal2} /> */}
        </>
      )}
      {tabType === 'ChungKhoan' && (
        <>
          <CustomTabPanel value={value} index={1}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold">{dataChart?.perf1?.title || ''}</div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.perf1 && <StackChart data={dataChart.perf1} />}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold">{dataChart?.perf2?.title || ''}</div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.perf2 && <StackChart data={dataChart.perf2} />}
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold">{dataChart?.perf3?.title || ''}</div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.perf3 && <StackChart data={dataChart.perf3} />}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold">{dataChart?.perf4?.title || ''}</div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.perf4 && <StackChart data={dataChart.perf4} />}
                  </div>
                </div>
              </div>
            )}
          </CustomTabPanel>
        </>
      )}
      {tabType === 'NganHang' && (
        <>
          <CustomTabPanel value={value} index={2}>
            Lợi nhuận
          </CustomTabPanel>
        </>
      )}
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
