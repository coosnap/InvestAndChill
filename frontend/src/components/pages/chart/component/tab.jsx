import {
  getDataChartBank,
  getDataChartNonFinancial,
  getDataChartStock,
  getTitle,
  getTypeDataChart,
} from '@/api/chart';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Box, FormControlLabel, Stack, styled, Switch, Tab, Tabs } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  customBalCK1,
  customBalCK2,
  customBalCK3,
  customBalCK4,
  customBalCK5,
  customPerfCK1,
  customPerfCK2,
  customPerfCK3,
  customPerfCK4,
  customPerfCK5,
  customValCK1,
  customValCK2,
  customValCK3,
  customValCK4,
} from './customCK';
import {
  customNHBal1,
  customNHBal10,
  customNHBal11,
  customNHBal12,
  customNHBal2,
  customNHBal3,
  customNHBal4,
  customNHBal5,
  customNHBal6,
  customNHBal7,
  customNHBal8,
  customNHBal9,
  customNHPerf1,
  customNHPerf2,
  customNHPerf3,
  customNHPerf4,
  customNHVal1,
  customNHVal2,
  customNHVal3,
  customNHVal4,
} from './customNH';
import {
  customBalPTC1,
  customBalPTC2,
  customBalPTC3,
  customBalPTC4,
  customBalPTC5,
  customBalPTC6,
  customCFPTC1,
  customCFPTC2,
  customCFPTC3,
  customCFPTC4,
  customPerfPTC1,
  customPerfPTC2,
  customPerfPTC3,
  customPerfPTC4,
  customPerfPTC5,
  customPerfPTC6,
  customPerfPTC7,
  customPerfPTC8,
  customValPTC1,
  customValPTC2,
  customValPTC3,
  customValPTC4,
  customValPTC5,
  customValPTC6,
  customValPTC7,
  customValPTC8,
} from './customPTC';
import StackChart from './stack-chart';

import './style.scss';

export const TabChart = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const codeValue = searchParams.get('code') || '';
  const tab = window.localStorage.getItem('tab');

  const [value, setValue] = useState(tab - 0 || 0);
  const [dataChart, setDataChart] = useState([]);
  const [tabType, setTabType] = useState('');
  const [title, setTitle] = useState('');
  const [checked, setChecked] = useState({
    chart: true,
    perf1: true,
    perf2: true,
    perf4: true,
    perf5: true,
    perf7: true,
    bal1: true,
    bal1ajust: true,
    bal2: true,
    bal2ajust: true,
    bal3: true,
    bal4: true,
    bal6: true,
    cf1: true,
    cf2: true,
    cf3: true,
    cf3adjust: true,
    cf4: true,
  });
  const [checkedCK, setCheckedCK] = useState({
    chart: true,
    perf1: true,
    perf2: true,
    perf3: true,
    bal1: true,
    bal2: true,
    bal2ajust: true,
    bal3: true,
    bal3ajust: true,
    bal4: true,
    bal4ajust: true,
    bal5: true,
    bal5ajust: true,
  });
  const [checkedBank, setCheckedBank] = useState({
    chart: true,
    perf1: true,
    perf2: true,
    perf3: true,
    perf3adjust: true,
    perf4: true,
    bal1: true,
    bal1adjust: true,
    bal2: true,
    bal2adjust: true,
    bal3: true,
    bal4: true,
    bal5: true,
    bal6: true,
    bal7: true,
    bal8: true,
    bal9adjust: true,
    bal10adjust: true,
    bal11adjust: true,
    bal12adjust: true,
  });
  const [isOpened, setIsOpened] = useState(false);

  const IOSSwitch = styled((props) => <Switch {...props} />)(() => ({
    width: 74,
    height: 30,
    padding: 2,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 0,
      transform: 'translate(7px, 7px)',
      '&.Mui-checked': {
        transform: 'translate(35px, 7px)',
      },
    },
    '& .MuiSwitch-thumb': {
      width: 32,
      height: 16,
      borderRadius: 50,
      backgroundColor: 'gray',
      boxShadow: 'none',
    },
    '& .MuiSwitch-track::before': {
      content: `'Năm'`,
      position: 'absolute',
      top: '5px',
      left: '9px',
      color: 'gray',
      fontSize: 11,
      fontWeight: 'bold',
    },
    '& .MuiSwitch-track::after': {
      content: `'Quý'`,
      position: 'absolute',
      top: '5px',
      right: '10px',
      color: 'gray',
      fontSize: 11,
      fontWeight: 'bold',
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: 'gray',
    },
    '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
      backgroundColor: 'gray',
    },
    '& .MuiSwitch-track': {
      borderRadius: 50,
      opacity: '1 !important',
      border: '3px solid gray',
      backgroundColor: 'transparent !important',
    },
  }));

  const IOSSwitchAdjust = styled((props) => <Switch {...props} />)(() => ({
    width: 64,
    height: 30,
    padding: 2,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 0,
      transform: 'translate(7px, 7px)',
      '&.Mui-checked': {
        width: '45px !important',
        transform: 'translate(20px, 7px)',
      },
    },
    '& .MuiSwitch-thumb': {
      width: 30,
      height: 16,
      borderRadius: 50,
      backgroundColor: 'gray',
      boxShadow: 'none',
    },
    '& .MuiSwitch-track::before': {
      content: `'On'`,
      position: 'absolute',
      top: '5px',
      left: '9px',
      color: 'gray',
      fontSize: 11,
      fontWeight: 'bold',
    },
    '& .MuiSwitch-track::after': {
      content: `'Off'`,
      position: 'absolute',
      top: '5px',
      right: '9px',
      color: 'gray',
      fontSize: 11,
      fontWeight: 'bold',
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: 'gray',
    },
    '& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track': {
      backgroundColor: 'gray',
    },
    '& .MuiSwitch-track': {
      borderRadius: 50,
      opacity: '1 !important',
      border: '3px solid gray',
      backgroundColor: 'transparent !important',
    },
  }));

  const IOSSwitchSum = styled((props) => <Switch {...props} />)(() => ({
    width: 89,
    height: 30,
    padding: 2,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 0,
      transform: 'translate(2px, 0)',
      '&.Mui-checked': {
        transform: 'translate(44px, 0)',
      },
    },
    '& .MuiSwitch-thumb': {
      width: 43,
      height: 30,
      borderRadius: '4px',
      backgroundColor: 'red !important',
      boxShadow: 'none',
      // border: '2px solid #FFF4C7',
    },
    '& .MuiSwitch-track::before': {
      content: `'Năm'`,
      position: 'absolute',
      top: '4px',
      left: '8px',
      color: 'red',
      fontSize: 14,
      fontWeight: 500,
    },
    '& .MuiSwitch-track::after': {
      content: `'Quý'`,
      position: 'absolute',
      top: '4px',
      right: '10px',
      color: 'red',
      fontSize: 14,
      fontWeight: 500,
    },
    '& .MuiSwitch-track': {
      opacity: '0.8 !important',
      border: '2px solid red',
      backgroundColor: 'transparent !important',
    },
  }));

  const handleChange = (event, newValue) => {
    window.localStorage.setItem('tab', newValue);
    setValue(newValue);
  };

  const formatData = (data) => {
    let temp = data.map((e) => ({ ...e, month: e.id.year + '.Q' + e.id.quarter }));
    return {
      title: data[0]?.title || '',
      dataset: [...temp],
    };
  };

  const mapDataChart = async (custom, type, xAxis) => {
    let result;
    if (type === 'PTC') {
      result = await getDataChartNonFinancial(custom.type, codeValue, custom.year, custom.chart);
    }
    if (type === 'ChungKhoan') {
      result = await getDataChartStock(custom.type, codeValue, custom.year, custom.chart);
    }
    if (type === 'NganHang') {
      result = await getDataChartBank(custom.type, codeValue, custom.year, custom.chart);
    }
    if (result) {
      let format = await formatData(result);
      let perf = {
        ...format,
        series: custom.series,
        xAxis: {
          scaleType: 'band',
          dataKey: 'month',
          tickInterval: (value) => (!custom.year ? value.includes('Q1') : value),
          valueFormatter: (value, context) =>
            context.location === 'tick'
              ? value.split('.')[0]
              : custom.year
              ? value.split('.')[0]
              : value,
          categoryGapRatio: xAxis ? xAxis.categoryGapRatio : 0.5,
          barGapRatio: xAxis ? xAxis.barGapRatio : 0.5,
        },
        yAxis: custom.yAxis,
      };
      return perf;
    }
  };

  const loadData = async () => {
    if (codeValue) {
      setDataChart([]);
      try {
        const type = await getTypeDataChart(codeValue);
        const title = await getTitle(codeValue);
        setTitle(title.message);
        setTabType(type.type);
        if (type.type === 'PTC') {
          let perf1, perf2, perf3, perf4, perf5, perf6, perf7, perf8;
          let bal1, bal2, bal3, bal4, bal5, bal6;
          let cf1, cf2, cf3, cf4;
          let val1, val2, val3, val4, val5, val6, val7, val8;
          if (value === 0) {
            let callPerf1 = mapDataChart(customPerfPTC1, type.type);
            let callPerf2 = mapDataChart(customPerfPTC2, type.type);
            let callPerf3 = mapDataChart(customPerfPTC3, type.type);
            let callPerf4 = mapDataChart(customPerfPTC4, type.type);
            let callPerf5 = mapDataChart(customPerfPTC5, type.type);
            let callPerf6 = mapDataChart(customPerfPTC6, type.type);

            Promise.all([callPerf1, callPerf2, callPerf3, callPerf4, callPerf5, callPerf6])
              .then((values) => {
                perf1 = values[0];
                perf2 = values[1];
                perf3 = values[2];
                perf4 = values[3];
                perf5 = values[4];
                perf6 = values[5];
                setDataChart({
                  perf1,
                  perf2,
                  perf3,
                  perf4,
                  perf5,
                  perf6,
                });
              })
              .catch((error) => console.log('error', error));
          }

          if (value === 1) {
            let callBal1 = mapDataChart(customBalPTC1, type.type);
            let bal2ajust = !checked.bal2ajust
              ? {
                  categoryGapRatio: -0.05,
                  barGapRatio: 0,
                }
              : null;
            let callBal2 = mapDataChart(customBalPTC2, type.type, bal2ajust);
            let callBal3 = mapDataChart(customBalPTC3, type.type, {
              categoryGapRatio: 0.5,
              barGapRatio: -1,
            });
            let callBal4 = mapDataChart(customBalPTC4, type.type);
            let callBal5 = mapDataChart(customBalPTC5, type.type);
            let callBal6 = mapDataChart(customBalPTC6, type.type);

            Promise.all([callBal1, callBal2, callBal3, callBal4, callBal5, callBal6])
              .then((values) => {
                bal1 = values[0];
                bal2 = values[1];
                bal3 = values[2];
                bal4 = values[3];
                bal5 = values[4];
                bal6 = values[5];
                setDataChart({
                  bal1,
                  bal2,
                  bal3,
                  bal4,
                  bal5,
                  bal6,
                });
              })
              .catch((error) => console.log('error', error));
          }

          if (value === 2) {
            let callPerf7 = mapDataChart(customPerfPTC7, type.type);
            let callPerf8 = mapDataChart(customPerfPTC8, type.type);

            Promise.all([callPerf7, callPerf8])
              .then((values) => {
                perf7 = values[0];
                perf8 = values[1];
                setDataChart({
                  perf7,
                  perf8,
                });
              })
              .catch((error) => console.log('error', error));
          }

          if (value === 3) {
            let callCf1 = mapDataChart(customCFPTC1, type.type);
            let callCf2 = mapDataChart(customCFPTC2, type.type);
            let callCf3 = mapDataChart(customCFPTC3, type.type);
            let callCf4 = mapDataChart(customCFPTC4, type.type);

            Promise.all([callCf1, callCf2, callCf3, callCf4])
              .then((values) => {
                cf1 = values[0];
                cf2 = values[1];
                cf3 = values[2];
                cf4 = values[3];
                setDataChart({
                  cf1,
                  cf2,
                  cf3,
                  cf4,
                });
              })
              .catch((error) => console.log('error', error));
          }

          if (value === 4) {
            let callVal1 = mapDataChart(customValPTC1, type.type);
            let callVal2 = mapDataChart(customValPTC2, type.type);
            let callVal3 = mapDataChart(customValPTC3, type.type);
            let callVal4 = mapDataChart(customValPTC4, type.type);
            let callVal5 = mapDataChart(customValPTC5, type.type);
            let callVal6 = mapDataChart(customValPTC6, type.type);
            let callVal7 = mapDataChart(customValPTC7, type.type);
            let callVal8 = mapDataChart(customValPTC8, type.type);

            Promise.all([
              callVal1,
              callVal2,
              callVal3,
              callVal4,
              callVal5,
              callVal6,
              callVal7,
              callVal8,
            ])
              .then((values) => {
                val1 = values[0];
                val2 = values[1];
                val3 = values[2];
                val4 = values[3];
                val5 = values[4];
                val6 = values[5];
                val7 = values[6];
                val8 = values[7];
                setDataChart({
                  val1,
                  val2,
                  val3,
                  val4,
                  val5,
                  val6,
                  val7,
                  val8,
                });
              })
              .catch((error) => console.log('error', error));
          }
        }
        if (type.type === 'ChungKhoan') {
          let perf1, perf2, perf3, perf4, perf5;
          let bal1, bal2, bal3, bal4, bal5;
          let val1, val2, val3, val4;
          if (value === 0) {
            let callPerf1 = mapDataChart(customPerfCK1, type.type);
            let callPerf3 = mapDataChart(customPerfCK3, type.type);
            let callPerf4 = mapDataChart(customPerfCK4, type.type);
            let callBal4 = mapDataChart(customBalCK4, type.type);
            let callBal5 = mapDataChart(customBalCK5, type.type);

            Promise.all([callPerf1, callPerf3, callPerf4, callBal4, callBal5])
              .then((values) => {
                perf1 = values[0];
                perf3 = values[1];
                perf4 = values[2];
                bal4 = values[3];
                bal5 = values[4];
                setDataChart({
                  perf1,
                  perf3,
                  perf4,
                  bal4,
                  bal5,
                });
              })
              .catch((error) => console.log('error', error));
          }

          if (value === 1) {
            let callBal1 = mapDataChart(customBalCK1, type.type);
            let callBal2 = mapDataChart(customBalCK2, type.type);
            let callBal3 = mapDataChart(customBalCK3, type.type);

            Promise.all([callBal1, callBal2, callBal3])
              .then((values) => {
                bal1 = values[0];
                bal2 = values[1];
                bal3 = values[2];
                setDataChart({
                  bal1,
                  bal2,
                  bal3,
                });
              })
              .catch((error) => console.log('error', error));
          }

          if (value === 2) {
            let callPerf2 = mapDataChart(customPerfCK2, type.type);
            let callPerf5 = mapDataChart(customPerfCK5, type.type);

            Promise.all([callPerf2, callPerf5])
              .then((values) => {
                perf2 = values[0];
                perf5 = values[1];
                setDataChart({
                  perf2,
                  perf5,
                });
              })
              .catch((error) => console.log('error', error));
          }

          if (value === 3) {
            let callVal1 = mapDataChart(customValCK1, type.type);
            let callVal2 = mapDataChart(customValCK2, type.type);
            let callVal3 = mapDataChart(customValCK3, type.type);
            let callVal4 = mapDataChart(customValCK4, type.type);

            Promise.all([callVal1, callVal2, callVal3, callVal4])
              .then((values) => {
                val1 = values[0];
                val2 = values[1];
                val3 = values[2];
                val4 = values[3];
                setDataChart({
                  val1,
                  val2,
                  val3,
                  val4,
                });
              })
              .catch((error) => console.log('error', error));
          }
        }
        if (type.type === 'NganHang') {
          let perf1, perf2, perf3, perf4;
          let bal1, bal2, bal3, bal4, bal5, bal6, bal7, bal8, bal9, bal10, bal11, bal12;
          let val1, val2, val3, val4;
          if (value === 0) {
            let callPerf1 = mapDataChart(customNHPerf1, type.type);
            let callPerf2 = mapDataChart(customNHPerf2, type.type);
            let callPerf3 = mapDataChart(customNHPerf3, type.type);
            let callPerf4 = mapDataChart(customNHPerf4, type.type);

            Promise.all([callPerf1, callPerf2, callPerf3, callPerf4])
              .then((values) => {
                perf1 = values[0];
                perf2 = values[1];
                perf3 = values[2];
                perf4 = values[3];
                setDataChart({
                  perf1,
                  perf2,
                  perf3,
                  perf4,
                });
              })
              .catch((error) => console.log('error', error));
          }

          if (value === 1) {
            let callBal1 = mapDataChart(customNHBal1, type.type);
            let callBal2 = mapDataChart(customNHBal2, type.type);
            let callBal3 = mapDataChart(customNHBal3, type.type);
            let callBal4 = mapDataChart(customNHBal4, type.type);
            let callBal5 = mapDataChart(customNHBal5, type.type);
            let callBal6 = mapDataChart(customNHBal6, type.type);
            let callBal7 = mapDataChart(customNHBal7, type.type);
            let callBal8 = mapDataChart(customNHBal8, type.type);

            Promise.all([
              callBal1,
              callBal2,
              callBal3,
              callBal4,
              callBal5,
              callBal6,
              callBal7,
              callBal8,
            ])
              .then((values) => {
                bal1 = values[0];
                bal2 = values[1];
                bal3 = values[2];
                bal4 = values[3];
                bal5 = values[4];
                bal6 = values[5];
                bal7 = values[6];
                bal8 = values[7];
                setDataChart({
                  bal1,
                  bal2,
                  bal3,
                  bal4,
                  bal5,
                  bal6,
                  bal7,
                  bal8,
                });
              })
              .catch((error) => console.log('error', error));
          }

          if (value === 2) {
            let callBal9 = mapDataChart(customNHBal9, type.type);
            let callBal10 = mapDataChart(customNHBal10, type.type);
            let callBal11 = mapDataChart(customNHBal11, type.type);
            let callBal12 = mapDataChart(customNHBal12, type.type);

            Promise.all([callBal9, callBal10, callBal11, callBal12])
              .then((values) => {
                bal9 = values[0];
                bal10 = values[1];
                bal11 = values[2];
                bal12 = values[3];
                setDataChart({
                  bal9,
                  bal10,
                  bal11,
                  bal12,
                });
              })
              .catch((error) => console.log('error', error));
          }

          if (value === 3) {
            let callVal1 = mapDataChart(customNHVal1, type.type);
            let callVal2 = mapDataChart(customNHVal2, type.type);
            let callVal3 = mapDataChart(customNHVal3, type.type);
            let callVal4 = mapDataChart(customNHVal4, type.type);

            Promise.all([callVal1, callVal2, callVal3, callVal4])
              .then((values) => {
                val1 = values[0];
                val2 = values[1];
                val3 = values[2];
                val4 = values[3];
                setDataChart({
                  val1,
                  val2,
                  val3,
                  val4,
                });
              })
              .catch((error) => console.log('error', error));
          }
        }
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  useEffect(() => {
    if (tabType !== 'PTC' && value - 0 === 4) {
      window.localStorage.setItem('tab', 3);
      setValue(3);
    }
    if (tabType === 'PTC' && value - 0 === 3) {
      window.localStorage.setItem('tab', 4);
      setValue(4);
    }
    loadData();
  }, [codeValue, value, tabType]);

  console.log('dataChart', dataChart);

  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 250) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleToggleSum = async () => {
    if (tabType === 'PTC') {
      setChecked((prev) => ({ ...prev, chart: !prev.chart }));
      try {
        customPerfPTC1.year = checked.chart;
        let newPerf1 = await mapDataChart(customPerfPTC1, tabType);
        setDataChart((prev) => ({ ...prev, perf1: newPerf1 }));
        setChecked((prev) => ({ ...prev, perf1: !checked.chart }));
      } catch (error) {
        console.log('perf1', error);
      }
      try {
        customPerfPTC2.year = checked.chart;
        let newPerf2 = await mapDataChart(customPerfPTC2, tabType);
        setDataChart((prev) => ({ ...prev, perf2: newPerf2 }));
        setChecked((prev) => ({ ...prev, perf2: !checked.chart }));
      } catch (error) {
        console.log('perf2', error);
      }
      try {
        customPerfPTC7.year = checked.chart;
        let newPerf7 = await mapDataChart(customPerfPTC7, tabType);
        setDataChart((prev) => ({ ...prev, perf7: newPerf7 }));
        setChecked((prev) => ({ ...prev, perf7: !checked.chart }));
      } catch (error) {
        console.log('perf7', error);
      }
      try {
        customBalPTC1.year = checked.chart;
        let newBal1 = await mapDataChart(customBalPTC1, tabType);
        setDataChart((prev) => ({ ...prev, bal1: newBal1 }));
        setChecked((prev) => ({ ...prev, bal1: !checked.chart }));
      } catch (error) {
        console.log('bal1', error);
      }
      try {
        customBalPTC2.year = checked.chart;
        let newBal2 = await mapDataChart(customBalPTC2, tabType);
        setDataChart((prev) => ({ ...prev, bal2: newBal2 }));
        setChecked((prev) => ({ ...prev, bal2: !checked.chart }));
      } catch (error) {
        console.log('bal2', error);
      }
      try {
        customBalPTC3.year = checked.chart;
        let newBal3 = await mapDataChart(customBalPTC3, tabType);
        setDataChart((prev) => ({ ...prev, bal3: newBal3 }));
        setChecked((prev) => ({ ...prev, bal3: !checked.chart }));
      } catch (error) {
        console.log('bal3', error);
      }
      try {
        customBalPTC4.year = checked.chart;
        let newBal4 = await mapDataChart(customBalPTC4, tabType);
        setDataChart((prev) => ({ ...prev, bal4: newBal4 }));
        setChecked((prev) => ({ ...prev, bal4: !checked.chart }));
      } catch (error) {
        console.log('bal4', error);
      }
      try {
        customBalPTC6.year = checked.chart;
        let newBal6 = await mapDataChart(customBalPTC6, tabType);
        setDataChart((prev) => ({ ...prev, bal6: newBal6 }));
        setChecked((prev) => ({ ...prev, bal6: !checked.chart }));
      } catch (error) {
        console.log('bal6', error);
      }
      try {
        customCFPTC1.year = checked.chart;
        let newCf1 = await mapDataChart(customCFPTC1, tabType);
        setDataChart((prev) => ({ ...prev, cf1: newCf1 }));
        setChecked((prev) => ({ ...prev, cf1: !checked.chart }));
      } catch (error) {
        console.log('bal6', error);
      }
      try {
        customCFPTC2.year = checked.chart;
        let newCf2 = await mapDataChart(customCFPTC2, tabType);
        setDataChart((prev) => ({ ...prev, cf2: newCf2 }));
        setChecked((prev) => ({ ...prev, cf2: !checked.chart }));
      } catch (error) {
        console.log('cf2', error);
      }
      try {
        customCFPTC3.year = checked.chart;
        let newCf3 = await mapDataChart(customCFPTC3, tabType);
        setDataChart((prev) => ({ ...prev, cf3: newCf3 }));
        setChecked((prev) => ({ ...prev, cf3: !checked.chart }));
      } catch (error) {
        console.log('cf3', error);
      }
      try {
        customCFPTC4.year = checked.chart;
        let newCf4 = await mapDataChart(customCFPTC4, tabType);
        setDataChart((prev) => ({ ...prev, cf4: newCf4 }));
        setChecked((prev) => ({ ...prev, cf4: !checked.chart }));
      } catch (error) {
        console.log('cf4', error);
      }
    }
    if (tabType === 'ChungKhoan') {
      setCheckedCK((prev) => ({ ...prev, chart: !prev.chart }));
      try {
        customPerfCK1.year = checkedCK.chart;
        let newPerf1 = await mapDataChart(customPerfCK1, tabType);
        setDataChart((prev) => ({ ...prev, perf1: newPerf1 }));
        setCheckedCK((prev) => ({ ...prev, perf1: !checkedCK.chart }));
      } catch (error) {
        console.log('perf1', error);
      }
      try {
        customPerfCK2.year = checkedCK.chart;
        let newPerf2 = await mapDataChart(customPerfCK2, tabType);
        setDataChart((prev) => ({ ...prev, perf2: newPerf2 }));
        setCheckedCK((prev) => ({ ...prev, perf2: !checkedCK.chart }));
      } catch (error) {
        console.log('perf2', error);
      }
      try {
        customPerfCK3.year = checkedCK.chart;
        let newPerf3 = await mapDataChart(customPerfCK3, tabType);
        setDataChart((prev) => ({ ...prev, perf3: newPerf3 }));
        setCheckedCK((prev) => ({ ...prev, perf3: !checkedCK.chart }));
      } catch (error) {
        console.log('perf3', error);
      }

      try {
        customBalCK1.year = checkedCK.chart;
        let newBal1 = await mapDataChart(customBalCK1, tabType);
        setDataChart((prev) => ({ ...prev, bal1: newBal1 }));
        setCheckedCK((prev) => ({ ...prev, bal1: !checkedCK.chart }));
      } catch (error) {
        console.log('bal1', error);
      }
      try {
        customBalCK2.year = checkedCK.chart;
        let newBal2 = await mapDataChart(customBalCK2, tabType);
        setDataChart((prev) => ({ ...prev, bal2: newBal2 }));
        setCheckedCK((prev) => ({ ...prev, bal2: !checkedCK.chart }));
      } catch (error) {
        console.log('bal2', error);
      }
      try {
        customBalCK3.year = checkedCK.chart;
        let newBal3 = await mapDataChart(customBalCK3, tabType);
        setDataChart((prev) => ({ ...prev, bal3: newBal3 }));
        setCheckedCK((prev) => ({ ...prev, bal3: !checkedCK.chart }));
      } catch (error) {
        console.log('bal3', error);
      }
      try {
        customBalCK4.year = checkedCK.chart;
        let newBal4 = await mapDataChart(customBalCK4, tabType);
        setDataChart((prev) => ({ ...prev, bal4: newBal4 }));
        setCheckedCK((prev) => ({ ...prev, bal4: !checkedCK.chart }));
      } catch (error) {
        console.log('bal4', error);
      }
      try {
        customBalCK5.year = checkedCK.chart;
        let newBal5 = await mapDataChart(customBalCK5, tabType);
        setDataChart((prev) => ({ ...prev, bal5: newBal5 }));
        setCheckedCK((prev) => ({ ...prev, bal5: !checkedCK.chart }));
      } catch (error) {
        console.log('bal5', error);
      }
    }
    if (tabType === 'NganHang') {
      setCheckedBank((prev) => ({ ...prev, chart: !prev.chart }));
      try {
        customNHPerf1.year = checkedBank.chart;
        let newPerf = await mapDataChart(customNHPerf1, tabType);
        setDataChart((prev) => ({ ...prev, perf1: newPerf }));
        setCheckedBank((prev) => ({ ...prev, perf1: !prev.perf1 }));
      } catch (error) {
        console.log('perf1', error);
      }
      try {
        customNHPerf2.year = checkedBank.chart;
        let newPerf = await mapDataChart(customNHPerf2, tabType);
        setDataChart((prev) => ({ ...prev, perf2: newPerf }));
        setCheckedBank((prev) => ({ ...prev, perf2: !checkedBank.chart }));
      } catch (error) {
        console.log('perf2', error);
      }
      try {
        customNHPerf3.year = checkedBank.chart;
        let newPerf = await mapDataChart(customNHPerf3, tabType);
        setDataChart((prev) => ({ ...prev, perf3: newPerf }));
        setCheckedBank((prev) => ({ ...prev, perf3: !checkedBank.chart }));
      } catch (error) {
        console.log('perf3', error);
      }
      try {
        customNHPerf4.year = checkedBank.chart;
        let newPerf = await mapDataChart(customNHPerf4, tabType);
        setDataChart((prev) => ({ ...prev, perf4: newPerf }));
        setCheckedBank((prev) => ({ ...prev, perf4: !checkedBank.chart }));
      } catch (error) {
        console.log('perf4', error);
      }

      try {
        customNHBal1.year = checkedBank.chart;
        let newPerf = await mapDataChart(customNHBal1, tabType);
        setDataChart((prev) => ({ ...prev, bal1: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal1: !checkedBank.chart }));
      } catch (error) {
        console.log('bal1', error);
      }
      try {
        customNHBal2.year = checkedBank.chart;
        let newPerf = await mapDataChart(customNHBal2, tabType);
        setDataChart((prev) => ({ ...prev, bal2: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal2: !checkedBank.chart }));
      } catch (error) {
        console.log('bal2', error);
      }
      try {
        customNHBal3.year = checkedBank.chart;
        let newPerf = await mapDataChart(customNHBal3, tabType);
        setDataChart((prev) => ({ ...prev, bal3: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal3: !checkedBank.chart }));
      } catch (error) {
        console.log('bal3', error);
      }
      try {
        customNHBal4.year = checkedBank.chart;
        let newPerf = await mapDataChart(customNHBal4, tabType);
        setDataChart((prev) => ({ ...prev, bal4: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal4: !checkedBank.chart }));
      } catch (error) {
        console.log('bal4', error);
      }
      try {
        customNHBal5.year = checkedBank.chart;
        let newPerf = await mapDataChart(customNHBal5, tabType);
        setDataChart((prev) => ({ ...prev, bal5: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal5: !checkedBank.chart }));
      } catch (error) {
        console.log('bal5', error);
      }
      try {
        customNHBal6.year = checkedBank.chart;
        let newPerf = await mapDataChart(customNHBal6, tabType);
        setDataChart((prev) => ({ ...prev, bal6: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal6: !checkedBank.chart }));
      } catch (error) {
        console.log('bal6', error);
      }
      try {
        customNHBal7.year = checkedBank.chart;
        let newPerf = await mapDataChart(customNHBal7, tabType);
        setDataChart((prev) => ({ ...prev, bal7: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal7: !checkedBank.chart }));
      } catch (error) {
        console.log('bal7', error);
      }
      try {
        customNHBal8.year = checkedBank.chart;
        let newPerf = await mapDataChart(customNHBal8, tabType);
        setDataChart((prev) => ({ ...prev, bal8: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal8: !checkedBank.chart }));
      } catch (error) {
        console.log('bal8', error);
      }
    }
  };

  const handleToggle = async (typeChart) => {
    if (tabType === 'PTC') {
      if (typeChart === 'perf1') {
        customPerfPTC1.year = checked.perf1;
        let newPerf = await mapDataChart(customPerfPTC1, tabType);
        setDataChart((prev) => ({ ...prev, perf1: newPerf }));
        setChecked((prev) => ({ ...prev, perf1: !prev.perf1 }));
      }
      if (typeChart === 'perf2') {
        customPerfPTC2.year = checked.perf2;
        let newPerf = await mapDataChart(customPerfPTC2, tabType);
        setDataChart((prev) => ({ ...prev, perf2: newPerf }));
        setChecked((prev) => ({ ...prev, perf2: !prev.perf2 }));
      }
      if (typeChart === 'perf4') {
        if (checked.perf4) {
          customPerfPTC4.series = [
            {
              type: 'bar',
              label: 'EBIT TTM',
              dataKey: 'ebittrailing',
              yAxisId: 'leftAxis',
              color: '#C8D0D2',
              valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
            },
            {
              type: 'bar',
              label: 'Lợi nhuận tài chính TTM (one-off adjusted)',
              dataKey: 'netFinancialAdjustTrailing',
              yAxisId: 'leftAxis',
              color: '#6EA2DF',
              valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
            },
            {
              type: 'line',
              label: 'EBIT Margin TTM',
              dataKey: 'ebitmTrailing',
              curve: 'linear',
              yAxisId: 'rightAxis',
              color: '#CFAB6D',
              valueFormatter: (v) => (v === null ? '' : v + ' %'),
            },
            {
              type: 'line',
              label: 'Biên lợi nhuận ròng TTM',
              dataKey: 'nimgTrailing',
              curve: 'linear',
              yAxisId: 'rightAxis',
              color: '#0D6B64',
              valueFormatter: (v) => (v === null ? '' : v + ' %'),
            },
          ];
          let newPerf = await mapDataChart(customPerfPTC4, tabType);
          setDataChart((prev) => ({ ...prev, perf4: newPerf }));
          setChecked((prev) => ({ ...prev, perf4: !prev.perf4 }));
        } else {
          customPerfPTC4.series = [
            {
              type: 'bar',
              label: 'EBIT TTM',
              dataKey: 'ebittrailing',
              yAxisId: 'leftAxis',
              color: '#C8D0D2',
              valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
            },
            {
              type: 'bar',
              label: 'Lợi nhuận tài chính TTM',
              dataKey: 'netFinanceialTrailing',
              yAxisId: 'leftAxis',
              color: '#6EA2DF',
              changeColor: true,
              valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
            },
            {
              type: 'line',
              label: 'EBIT Margin TTM',
              dataKey: 'ebitmTrailing',
              curve: 'linear',
              yAxisId: 'rightAxis',
              color: '#CFAB6D',
              valueFormatter: (v) => (v === null ? '' : v + ' %'),
            },
            {
              type: 'line',
              label: 'Biên lợi nhuận ròng TTM',
              dataKey: 'nimgTrailing',
              curve: 'linear',
              yAxisId: 'rightAxis',
              color: '#0D6B64',
              valueFormatter: (v) => (v === null ? '' : v + ' %'),
            },
          ];
          let newPerf = await mapDataChart(customPerfPTC4, tabType);
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
            color: '#ABB2B4',
            valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
          };
        } else {
          customPerfPTC5.series[0] = {
            type: 'bar',
            label: 'Lợi nhuận ròng TTM',
            dataKey: 'nitrailing',
            yAxisId: 'rightAxis',
            stack: 'stack',
            color: '#ABB2B4',
            valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
          };
        }
        let newPerf = await mapDataChart(customPerfPTC5, tabType);
        setDataChart((prev) => ({ ...prev, perf5: newPerf }));
        setChecked((prev) => ({ ...prev, perf5: !prev.perf5 }));
      }
      if (typeChart === 'perf7') {
        customPerfPTC7.year = checked.perf7;
        let newPerf = await mapDataChart(customPerfPTC7, tabType);
        setDataChart((prev) => ({ ...prev, perf7: newPerf }));
        setChecked((prev) => ({ ...prev, perf7: !prev.perf7 }));
      }
      if (typeChart === 'bal1') {
        customBalPTC1.year = checked.bal1;
        let newPerf = await mapDataChart(customBalPTC1, tabType);
        setDataChart((prev) => ({ ...prev, bal1: newPerf }));
        setChecked((prev) => ({ ...prev, bal1: !prev.bal1 }));
      }
      if (typeChart === 'bal1ajust') {
        if (checked.bal1ajust) {
          try {
            customBalPTC1.chart = true;
            customBalPTC1.series = [
              {
                dataKey: 'tienDTNGDaoHan',
                type: 'line',
                curve: 'linear',
                label: 'Tiền',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#C8D0D2',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                dataKey: 'phaiThu',
                type: 'line',
                curve: 'linear',
                label: 'Phải thu',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#93B6D6',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                dataKey: 'hangTonKhoRong',
                type: 'line',
                curve: 'linear',
                label: 'Hàng tồn kho',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#6EA2DF',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                dataKey: 'taiSanCoDinh',
                type: 'line',
                curve: 'linear',
                label: 'Tài sản cố định',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#014388',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                dataKey: 'taiSanDoDangDaiHan',
                type: 'line',
                curve: 'linear',
                label: 'Tài sản dở dang',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#2471BE',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                dataKey: 'giaTriRongTaiSanDauTu',
                type: 'line',
                curve: 'linear',
                label: 'Bất động sản đầu tư',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#585D5D',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                dataKey: 'taiSanKhac',
                type: 'line',
                curve: 'linear',
                label: 'Tài sản khác',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#8F9596',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
            ];
            customBalPTC1.yAxis = {
              left: { type: 'bil', piecewise: false, legendNum: 4 },
              right: { type: 'per', piecewise: true },
            };
          } catch (error) {
            console.log('error', error);
          }
        } else {
          try {
            customBalPTC1.chart = false;
            customBalPTC1.series = [
              {
                type: 'bar',
                label: 'Tiền',
                dataKey: 'tienDTNGDaoHan',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#C8D0D2',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Phải thu',
                dataKey: 'phaiThu',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#93B6D6',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Hàng tồn kho',
                dataKey: 'hangTonKhoRong',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#6EA2DF',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Tài sản cố định',
                dataKey: 'taiSanCoDinh',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#014388',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Tài sản dở dang',
                dataKey: 'taiSanDoDangDaiHan',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#2471BE',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Bất động sản đầu tư',
                dataKey: 'giaTriRongTaiSanDauTu',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#585D5D',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Tài sản khác',
                dataKey: 'taiSanKhac',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#8F9596',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
            ];
            customBalPTC1.yAxis = {
              left: { type: 'bil', piecewise: false, legendNum: 4 },
              right: { type: 'bil', piecewise: false, showLineReference: true },
            };
          } catch (error) {
            console.log('error', error);
          }
        }
        let newPerf = await mapDataChart(customBalPTC1, tabType);
        setDataChart((prev) => ({ ...prev, bal1: newPerf }));
        setChecked((prev) => ({ ...prev, bal1ajust: !prev.bal1ajust }));
      }
      if (typeChart === 'bal2') {
        let newPerf = [];
        customBalPTC2.year = checked.bal2;
        if (!checked.bal2ajust) {
          newPerf = await mapDataChart(customBalPTC2, tabType, {
            categoryGapRatio: -0.05,
            barGapRatio: 0,
          });
        } else {
          newPerf = await mapDataChart(customBalPTC2, tabType);
        }
        setDataChart((prev) => ({ ...prev, bal2: newPerf }));
        setChecked((prev) => ({ ...prev, bal2: !prev.bal2 }));
      }
      if (typeChart === 'bal2ajust') {
        let newPerf = [];
        if (checked.bal2ajust) {
          customBalPTC2.chart = true;
          customBalPTC2.series = [
            {
              dataKey: 'vonGop',
              type: 'bar',
              label: 'Vốn góp của Chủ sở hữu',
              stack: 'stack',
              yAxisId: 'rightAxis',
              color: '#585D5D',
              valueFormatter: (v) => (v === null ? '' : v + ' %'),
            },
            {
              dataKey: 'laiChuaPhanPhoi',
              type: 'bar',
              label: 'LNST chưa phân phối',
              yAxisId: 'rightAxis',
              stack: 'stack',
              color: '#8F9596',
              valueFormatter: (v) => (v === null ? '' : v + ' %'),
            },
            {
              dataKey: 'vcshKhac',
              type: 'bar',
              label: 'Vốn chủ sở hữu khác',
              yAxisId: 'rightAxis',
              stack: 'stack',
              color: '#ABB2B4',
              valueFormatter: (v) => (v === null ? '' : v + ' %'),
            },
            {
              dataKey: 'noChiemDung',
              type: 'bar',
              label: 'Nợ chiếm dụng',
              yAxisId: 'rightAxis',
              stack: 'stack',
              color: '#CCBA95',
              valueFormatter: (v) => (v === null ? '' : v + ' %'),
            },
            {
              dataKey: 'noVay',
              type: 'bar',
              label: 'Nợ vay',
              yAxisId: 'rightAxis',
              stack: 'stack',
              color: '#AD5757',
              valueFormatter: (v) => (v === null ? '' : v + ' %'),
            },
          ];
          customBalPTC2.yAxis = {
            left: { type: 'per', piecewise: false, legendNum: 2 },
            right: { type: 'per', piecewise: true, showLineReference: true },
          };
          newPerf = await mapDataChart(customBalPTC2, tabType, {
            categoryGapRatio: -0.05,
            barGapRatio: 0,
          });
        } else {
          customBalPTC2.chart = false;
          customBalPTC2.series = [
            {
              type: 'bar',
              label: 'Vốn góp của Chủ sở hữu',
              dataKey: 'vonGop',
              yAxisId: 'rightAxis',
              stack: 'stack',
              color: '#585D5D',
              valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
            },
            {
              type: 'bar',
              label: 'LNST chưa phân phối',
              dataKey: 'laiChuaPhanPhoi',
              yAxisId: 'rightAxis',
              stack: 'stack',
              color: '#8F9596',
              valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
            },
            {
              type: 'bar',
              label: 'Vốn chủ sở hữu khác',
              dataKey: 'vcshKhac',
              yAxisId: 'rightAxis',
              stack: 'stack',
              color: '#ABB2B4',
              valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
            },
            {
              type: 'bar',
              label: 'Nợ chiếm dụng',
              dataKey: 'noChiemDung',
              yAxisId: 'rightAxis',
              stack: 'stack',
              color: '#CCBA95',
              valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
            },
            {
              type: 'bar',
              label: 'Nợ vay',
              dataKey: 'noVay',
              yAxisId: 'rightAxis',
              stack: 'stack',
              color: '#AD5757',
              valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
            },
          ];
          customBalPTC2.yAxis = {
            left: { type: 'per', piecewise: false, legendNum: 2 },
            right: { type: 'bil', piecewise: false, showLineReference: true },
          };
          newPerf = await mapDataChart(customBalPTC2, tabType);
        }
        setDataChart((prev) => ({ ...prev, bal2: newPerf }));
        setChecked((prev) => ({ ...prev, bal2ajust: !prev.bal2ajust }));
      }
      if (typeChart === 'bal3') {
        customBalPTC3.year = checked.bal3;
        let newPerf = await mapDataChart(customBalPTC3, tabType, {
          categoryGapRatio: 0.5,
          barGapRatio: -1,
        });
        setDataChart((prev) => ({ ...prev, bal3: newPerf }));
        setChecked((prev) => ({ ...prev, bal3: !prev.bal3 }));
      }
      if (typeChart === 'bal4') {
        customBalPTC4.year = checked.bal4;
        let newPerf = await mapDataChart(customBalPTC4, tabType);
        setDataChart((prev) => ({ ...prev, bal4: newPerf }));
        setChecked((prev) => ({ ...prev, bal4: !prev.bal4 }));
      }
      if (typeChart === 'bal6') {
        customBalPTC6.year = checked.bal6;
        let newPerf = await mapDataChart(customBalPTC6, tabType);
        setDataChart((prev) => ({ ...prev, bal6: newPerf }));
        setChecked((prev) => ({ ...prev, bal6: !prev.bal6 }));
      }
      if (typeChart === 'cf1') {
        customCFPTC1.year = checked.cf1;
        let newPerf = await mapDataChart(customCFPTC1, tabType);
        setDataChart((prev) => ({ ...prev, cf1: newPerf }));
        setChecked((prev) => ({ ...prev, cf1: !prev.cf1 }));
      }
      if (typeChart === 'cf2') {
        customCFPTC2.year = checked.cf2;
        let newPerf = await mapDataChart(customCFPTC2, tabType);
        setDataChart((prev) => ({ ...prev, cf2: newPerf }));
        setChecked((prev) => ({ ...prev, cf2: !prev.cf2 }));
      }
      if (typeChart === 'cf3') {
        customCFPTC3.year = checked.cf3;
        let newPerf = await mapDataChart(customCFPTC3, tabType);
        setDataChart((prev) => ({ ...prev, cf3: newPerf }));
        setChecked((prev) => ({ ...prev, cf3: !prev.cf3 }));
      }
      if (typeChart === 'cf3adjust') {
        if (checked.cf3adjust) {
          customCFPTC3.series.pop();
          let newPerf = await mapDataChart(customCFPTC3, tabType);
          console.log('newPerf', newPerf);
          setDataChart((prev) => ({ ...prev, cf3: newPerf }));
          setChecked((prev) => ({ ...prev, cf3adjust: !prev.cf3adjust }));
        } else {
          customCFPTC3.series.push({
            type: 'bar',
            label: 'Tiền cho vay',
            dataKey: 'tienLongTrongPhaiThuChoVay',
            yAxisId: 'rightAxis',
          });
          let newPerf = await mapDataChart(customCFPTC3, tabType);
          setDataChart((prev) => ({ ...prev, cf3: newPerf }));
          setChecked((prev) => ({ ...prev, cf3adjust: !prev.cf3adjust }));
        }
      }
      if (typeChart === 'cf4') {
        customCFPTC4.year = checked.cf4;
        let newPerf = await mapDataChart(customCFPTC4, tabType);
        setDataChart((prev) => ({ ...prev, cf4: newPerf }));
        setChecked((prev) => ({ ...prev, cf4: !prev.cf4 }));
      }
    }
    if (tabType === 'ChungKhoan') {
      if (typeChart === 'perf1') {
        customPerfCK1.year = checkedCK.perf1;
        let newPerf = await mapDataChart(customPerfCK1, tabType);
        setDataChart((prev) => ({ ...prev, perf1: newPerf }));
        setCheckedCK((prev) => ({ ...prev, perf1: !prev.perf1 }));
      }
      if (typeChart === 'perf2') {
        customPerfCK2.year = checkedCK.perf2;
        let newPerf = await mapDataChart(customPerfCK2, tabType);
        setDataChart((prev) => ({ ...prev, perf2: newPerf }));
        setCheckedCK((prev) => ({ ...prev, perf2: !prev.perf2 }));
      }
      if (typeChart === 'perf3') {
        customPerfCK3.year = checkedCK.perf3;
        let newPerf = await mapDataChart(customPerfCK3, tabType);
        setDataChart((prev) => ({ ...prev, perf3: newPerf }));
        setCheckedCK((prev) => ({ ...prev, perf3: !prev.perf3 }));
      }
      if (typeChart === 'bal1') {
        customBalCK1.year = checkedCK.bal1;
        let newPerf = await mapDataChart(customBalCK1, tabType);
        setDataChart((prev) => ({ ...prev, bal1: newPerf }));
        setCheckedCK((prev) => ({ ...prev, bal1: !prev.bal1 }));
      }
      if (typeChart === 'bal2') {
        customBalCK2.year = checkedCK.bal2;
        let newPerf = await mapDataChart(customBalCK2, tabType);
        setDataChart((prev) => ({ ...prev, bal2: newPerf }));
        setCheckedCK((prev) => ({ ...prev, bal2: !prev.bal2 }));
      }
      if (typeChart === 'bal2ajust') {
        if (checkedCK.bal2ajust) {
          try {
            customBalCK2.chart = true;
            customBalCK2.series = [
              {
                dataKey: 'tienVaTaiSanTuongDuongTien',
                type: 'line',
                label: 'Tiền',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#C8D0D2',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                dataKey: 'cacTaiSanTaiChinhThongQuaGhiNhanLaiLo',
                type: 'line',
                label: 'FVTPL',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#93B6D6',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                dataKey: 'cacKhoanDauTuNamGiuDenNgayDaoHan',
                type: 'line',
                label: 'HTM',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#6EA2DF',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                dataKey: 'cacKhoanChoVay',
                type: 'line',
                label: 'Cho vay',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#8F9596',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                dataKey: 'cacKhoanTaiChinhSanSangDeBan',
                type: 'line',
                label: 'AFS',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#014388',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                dataKey: 'taiSanKhac',
                type: 'line',
                label: 'Tài sản khác',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#202222',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
            ];
            customBalCK2.yAxis = {
              left: { type: 'bil', piecewise: false },
              right: { type: 'per', piecewise: true },
            };
          } catch (error) {
            console.log('error', error);
          }
        } else {
          try {
            customBalCK2.chart = false;
            customBalCK2.series = [
              {
                type: 'bar',
                label: 'Tiền',
                dataKey: 'tienVaTaiSanTuongDuongTien',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#C8D0D2',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'FVTPL',
                dataKey: 'cacTaiSanTaiChinhThongQuaGhiNhanLaiLo',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#93B6D6',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'HTM',
                dataKey: 'cacKhoanDauTuNamGiuDenNgayDaoHan',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#6EA2DF',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Cho vay',
                dataKey: 'cacKhoanChoVay',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#8F9596',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'AFS',
                dataKey: 'cacKhoanTaiChinhSanSangDeBan',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#014388',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Tài sản khác',
                dataKey: 'taiSanKhac',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#202222',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
            ];
            customBalCK2.yAxis = {
              left: { type: 'bil', piecewise: false },
              right: { type: 'bil', piecewise: false, showLineReference: true },
            };
          } catch (error) {
            console.log('error', error);
          }
        }
        let newPerf = await mapDataChart(customBalCK2, tabType);
        setDataChart((prev) => ({ ...prev, bal2: newPerf }));
        setCheckedCK((prev) => ({ ...prev, bal2ajust: !prev.bal2ajust }));
      }
      if (typeChart === 'bal3') {
        customBalCK3.year = checkedCK.bal3;
        let newPerf = await mapDataChart(customBalCK3, tabType);
        setDataChart((prev) => ({ ...prev, bal3: newPerf }));
        setCheckedCK((prev) => ({ ...prev, bal3: !prev.bal3 }));
      }
      if (typeChart === 'bal3ajust') {
        if (checkedCK.bal3ajust) {
          try {
            customBalCK3.chart = true;
            customBalCK3.series = [
              {
                label: 'Vốn góp của chủ sở hữu',
                dataKey: 'coPhieuPhoThongCoQuyenBieuQuyet',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#585D5D',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'LNST chưa phân phối',
                dataKey: 'loiNhuanChuaPhanPhoi',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#8F9596',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'VCSH khác',
                dataKey: 'vcshKhac',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#ABB2B4',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Nợ chiếm dụng',
                dataKey: 'noChiemDung',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#CCBA95',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Nợ vay',
                dataKey: 'noVay',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#AD5757',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
            ];
            customBalCK3.yAxis = {
              left: { type: 'bil', piecewise: false },
              right: { type: 'per', piecewise: true },
            };
          } catch (error) {
            console.log('error', error);
          }
        } else {
          try {
            customBalCK3.chart = false;
            customBalCK3.series = [
              {
                type: 'bar',
                label: 'Vốn góp của chủ sở hữu',
                dataKey: 'coPhieuPhoThongCoQuyenBieuQuyet',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#585D5D',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'LNST chưa phân phối',
                dataKey: 'loiNhuanChuaPhanPhoi',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#8F9596',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'VCSH khác',
                dataKey: 'vcshKhac',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#ABB2B4',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Nợ chiếm dụng',
                dataKey: 'noChiemDung',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#CCBA95',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Nợ vay',
                dataKey: 'noVay',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#AD5757',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
            ];
            customBalCK3.yAxis = {
              left: { type: 'bil', piecewise: false, showLineReference: true },
              right: { type: 'bil', piecewise: false },
            };
          } catch (error) {
            console.log('error', error);
          }
        }
        let newPerf = await mapDataChart(customBalCK3, tabType);
        setDataChart((prev) => ({ ...prev, bal3: newPerf }));
        setCheckedCK((prev) => ({ ...prev, bal3ajust: !prev.bal3ajust }));
      }
      if (typeChart === 'bal4') {
        customBalCK4.year = checkedCK.bal4;
        let newPerf = await mapDataChart(customBalCK4, tabType);
        setDataChart((prev) => ({ ...prev, bal4: newPerf }));
        setCheckedCK((prev) => ({ ...prev, bal4: !prev.bal4 }));
      }
      if (typeChart === 'bal4ajust') {
        if (checkedCK.bal4ajust) {
          try {
            customBalCK4.chart = true;
            customBalCK4.series = [
              {
                label: 'FVTPL',
                dataKey: 'laiTuCacTaiSanTaiChinhGhiNhanThongQuaLaiLo',
                type: 'line',
                curve: 'linear',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#93B6D6',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Cho vay và phải thu',
                dataKey: 'laiTuCacKhoanChoVayVaPhaiThu',
                type: 'line',
                curve: 'linear',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#8F9596',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Môi giới chứng khoán',
                dataKey: 'doanhThuNghiepVuMoiGioiChungKhoan',
                type: 'line',
                curve: 'linear',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#C8D0D2',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'HTM',
                dataKey: 'laiTuCacKhoanDauTuNamGiuDenNgayDaoHan',
                type: 'line',
                curve: 'linear',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#6EA2DF',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'AFS',
                dataKey: 'laiTuCacTaiSanTaiChinhSanSangDeBan',
                type: 'line',
                curve: 'linear',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#014388',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Bảo lãnh phát hành',
                dataKey: 'doanhThuNghiepVuBaoLanhPhatHanhChungKhoan',
                type: 'line',
                curve: 'linear',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#CFAB6D',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Khác',
                dataKey: 'tongDoanhThuKhac',
                type: 'line',
                curve: 'linear',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#202222',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
            ];
            customBalCK4.yAxis = {
              left: { type: 'bil', piecewise: false },
              right: { type: 'per', piecewise: true },
            };
          } catch (error) {
            console.log('error', error);
          }
        } else {
          try {
            customBalCK4.chart = false;
            customBalCK4.series = [
              {
                type: 'bar',
                label: 'FVTPL',
                dataKey: 'laiTuCacTaiSanTaiChinhGhiNhanThongQuaLaiLo',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#93B6D6',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Cho vay và phải thu',
                dataKey: 'laiTuCacKhoanChoVayVaPhaiThu',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#8F9596',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Môi giới chứng khoán',
                dataKey: 'doanhThuNghiepVuMoiGioiChungKhoan',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#C8D0D2',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'HTM',
                dataKey: 'laiTuCacKhoanDauTuNamGiuDenNgayDaoHan',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#6EA2DF',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'AFS',
                dataKey: 'laiTuCacTaiSanTaiChinhSanSangDeBan',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#014388',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Bảo lãnh phát hành',
                dataKey: 'doanhThuNghiepVuBaoLanhPhatHanhChungKhoan',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#CFAB6D',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Khác',
                dataKey: 'tongDoanhThuKhac',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#202222',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
            ];
            customBalCK4.yAxis = {
              left: { type: 'bil', piecewise: false },
              right: { type: 'bil', piecewise: false, showLineReference: true },
            };
          } catch (error) {
            console.log('error', error);
          }
        }
        let newPerf = await mapDataChart(customBalCK4, tabType);
        setDataChart((prev) => ({ ...prev, bal4: newPerf }));
        setCheckedCK((prev) => ({ ...prev, bal4ajust: !prev.bal4ajust }));
      }
      if (typeChart === 'bal5') {
        customBalCK5.year = checkedCK.bal5;
        let newPerf = await mapDataChart(
          customBalCK5,
          tabType,
          !checkedCK.bal5ajust
            ? {
                categoryGapRatio: -0.05,
                barGapRatio: 0,
              }
            : null
        );
        setDataChart((prev) => ({ ...prev, bal5: newPerf }));
        setCheckedCK((prev) => ({ ...prev, bal5: !prev.bal5 }));
      }
      if (typeChart === 'bal5ajust') {
        let newPerf = [];
        if (checkedCK.bal5ajust) {
          try {
            customBalCK5.chart = true;
            customBalCK5.series = [
              {
                label: 'FVTPL',
                dataKey: 'gpfvtpl',
                type: 'bar',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#93B6D6',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Cho vay và phải thu',
                dataKey: 'gpcvmargin',
                type: 'bar',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#8F9596',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Môi giới chứng khoán',
                dataKey: 'gpmoiGioi',
                type: 'bar',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#C8D0D2',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'HTM',
                dataKey: 'gphtm',
                type: 'bar',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#6EA2DF',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'AFS',
                dataKey: 'gpafs',
                type: 'bar',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#014388',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Bảo lãnh phát hành',
                dataKey: 'gpbaoLanhPhatHanh',
                type: 'bar',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#CFAB6D',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Khác',
                dataKey: 'gpkhac',
                type: 'bar',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#202222',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
            ];
            customBalCK5.yAxis = {
              left: { type: 'bil', piecewise: false },
              right: { type: 'per', piecewise: true },
            };
            newPerf = await mapDataChart(customBalCK5, tabType, {
              categoryGapRatio: -0.05,
              barGapRatio: 0,
            });
          } catch (error) {
            console.log('error', error);
          }
        } else {
          try {
            customBalCK5.chart = false;
            customBalCK5.series = [
              {
                type: 'bar',
                label: 'FVTPL',
                dataKey: 'gpfvtpl',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#93B6D6',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Cho vay và phải thu',
                dataKey: 'gpcvmargin',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#8F9596',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Môi giới chứng khoán',
                dataKey: 'gpmoiGioi',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#C8D0D2',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'HTM',
                dataKey: 'gphtm',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#6EA2DF',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'AFS',
                dataKey: 'gpafs',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#014388',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Bảo lãnh phát hành',
                dataKey: 'gpbaoLanhPhatHanh',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#CFAB6D',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Khác',
                dataKey: 'gpkhac',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#202222',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
            ];
            customBalCK5.yAxis = {
              left: { type: 'bil', piecewise: false },
              right: { type: 'bil', piecewise: false, showLineReference: true },
            };
            newPerf = await mapDataChart(customBalCK5, tabType);
          } catch (error) {
            console.log('error', error);
          }
        }
        setDataChart((prev) => ({ ...prev, bal5: newPerf }));
        setCheckedCK((prev) => ({ ...prev, bal5ajust: !prev.bal5ajust }));
      }
    }
    if (tabType === 'NganHang') {
      if (typeChart === 'perf1') {
        customNHPerf1.year = checkedBank.perf1;
        let newPerf = await mapDataChart(customNHPerf1, tabType);
        setDataChart((prev) => ({ ...prev, perf1: newPerf }));
        setCheckedBank((prev) => ({ ...prev, perf1: !prev.perf1 }));
      }
      if (typeChart === 'perf2') {
        customNHPerf2.year = checkedBank.perf2;
        let newPerf = await mapDataChart(customNHPerf2, tabType);
        setDataChart((prev) => ({ ...prev, perf2: newPerf }));
        setCheckedBank((prev) => ({ ...prev, perf2: !prev.perf2 }));
      }
      if (typeChart === 'perf3') {
        customNHPerf3.year = checkedBank.perf3;
        let newPerf = await mapDataChart(customNHPerf3, tabType);
        setDataChart((prev) => ({ ...prev, perf3: newPerf }));
        setCheckedBank((prev) => ({ ...prev, perf3: !prev.perf3 }));
      }
      if (typeChart === 'perf4') {
        customNHPerf4.year = checkedBank.perf4;
        let newPerf = await mapDataChart(customNHPerf4, tabType);
        setDataChart((prev) => ({ ...prev, perf4: newPerf }));
        setCheckedBank((prev) => ({ ...prev, perf4: !prev.perf4 }));
      }
      if (typeChart === 'bal1') {
        customNHBal1.year = checkedBank.bal1;
        let newPerf = await mapDataChart(customNHBal1, tabType);
        setDataChart((prev) => ({ ...prev, bal1: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal1: !prev.bal1 }));
      }
      if (typeChart === 'bal2') {
        customNHBal2.year = checkedBank.bal2;
        let newPerf = await mapDataChart(customNHBal2, tabType);
        setDataChart((prev) => ({ ...prev, bal2: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal2: !prev.bal2 }));
      }
      if (typeChart === 'bal3') {
        customNHBal3.year = checkedBank.bal3;
        let newPerf = await mapDataChart(customNHBal3, tabType);
        setDataChart((prev) => ({ ...prev, bal3: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal3: !prev.bal3 }));
      }
      if (typeChart === 'bal4') {
        customNHBal4.year = checkedBank.bal4;
        let newPerf = await mapDataChart(customNHBal4, tabType);
        setDataChart((prev) => ({ ...prev, bal4: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal4: !prev.bal4 }));
      }
      if (typeChart === 'bal5') {
        customNHBal5.year = checkedBank.bal5;
        let newPerf = await mapDataChart(customNHBal5, tabType, {
          categoryGapRatio: 0.5,
          barGapRatio: -1,
        });
        setDataChart((prev) => ({ ...prev, bal5: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal5: !prev.bal5 }));
      }
      if (typeChart === 'bal6') {
        customNHBal6.year = checkedBank.bal6;
        let newPerf = await mapDataChart(customNHBal6, tabType);
        setDataChart((prev) => ({ ...prev, bal6: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal6: !prev.bal6 }));
      }
      if (typeChart === 'bal7') {
        customNHBal7.year = checkedBank.bal7;
        let newPerf = await mapDataChart(customNHBal7, tabType);
        setDataChart((prev) => ({ ...prev, bal7: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal7: !prev.bal7 }));
      }
      if (typeChart === 'bal8') {
        customNHBal8.year = checkedBank.bal8;
        let newPerf = await mapDataChart(customNHBal8, tabType);
        setDataChart((prev) => ({ ...prev, bal8: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal8: !prev.bal8 }));
      }
      if (typeChart === 'bal9adjust') {
        if (checkedBank.bal9adjust) {
          try {
            customNHBal9.chart = true;
            customNHBal9.series = [
              {
                label: 'Cho vay ngắn hạn',
                dataKey: 'choVayNganHan',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#93B6D6',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Cho vay trung hạn',
                dataKey: 'choVayTrungHan',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#6EA2DF',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Cho vay dài hạn',
                dataKey: 'choVayDaiHan',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#014388',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
            ];
            customNHBal9.yAxis = {
              left: { type: 'bil', piecewise: false },
              right: { type: 'per', piecewise: true },
            };
          } catch (error) {
            console.log('error', error);
          }
        } else {
          try {
            customNHBal9.chart = false;
            customNHBal9.series = [
              {
                type: 'bar',
                label: 'Cho vay ngắn hạn',
                dataKey: 'choVayNganHan',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#93B6D6',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Cho vay trung hạn',
                dataKey: 'choVayTrungHan',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#6EA2DF',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Cho vay dài hạn',
                dataKey: 'choVayDaiHan',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#014388',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
            ];
            customNHBal9.yAxis = {
              right: { type: 'bil', piecewise: false, showLineReference: true },
              left: { type: 'bil', piecewise: false },
            };
          } catch (error) {
            console.log('error', error);
          }
        }
        let newPerf = await mapDataChart(customNHBal9, tabType);
        setDataChart((prev) => ({ ...prev, bal9: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal9adjust: !prev.bal9adjust }));
      }
      if (typeChart === 'bal10adjust') {
        if (checkedBank.bal10adjust) {
          try {
            customNHBal10.chart = true;
            customNHBal10.series = [
              {
                label: 'Doanh nghiệp nhà nước',
                dataKey: 'doanhNghiepNhaNuoc',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#CCBA95',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Công ty TNHH và cổ phần',
                dataKey: 'congTyTNHHVaCoPhan',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#014388',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Doanh nghiệp nước ngoài',
                dataKey: 'doanhNghiepNuocNgoai',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#6EA2DF',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Hợp tác xã và công ty tư nhân',
                dataKey: 'hopTacXaVaCongTyTuNhan',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#93B6D6',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Cá nhân',
                dataKey: 'caNhan',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#C8D0D2',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Khác',
                dataKey: 'khac',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#202222',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
            ];
            customNHBal10.yAxis = {
              right: { type: 'per', piecewise: true },
              left: { type: 'bil', piecewise: false },
            };
          } catch (error) {
            console.log('error', error);
          }
        } else {
          try {
            customNHBal10.chart = false;
            customNHBal10.series = [
              {
                type: 'bar',
                label: 'Doanh nghiệp nhà nước',
                dataKey: 'doanhNghiepNhaNuoc',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#CCBA95',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Công ty TNHH và cổ phần',
                dataKey: 'congTyTNHHVaCoPhan',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#014388',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Doanh nghiệp nước ngoài',
                dataKey: 'doanhNghiepNuocNgoai',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#6EA2DF',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Hợp tác xã và công ty tư nhân',
                dataKey: 'hopTacXaVaCongTyTuNhan',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#93B6D6',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Cá nhân',
                dataKey: 'caNhan',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#C8D0D2',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Khác',
                dataKey: 'khac',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#202222',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
            ];
            customNHBal10.yAxis = {
              right: { type: 'bil', piecewise: false, showLineReference: true },
              left: { type: 'bil', piecewise: false },
            };
          } catch (error) {
            console.log('error', error);
          }
        }
        let newPerf = await mapDataChart(customNHBal10, tabType);
        setDataChart((prev) => ({ ...prev, bal10: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal10adjust: !prev.bal10adjust }));
      }
      if (typeChart === 'bal11adjust') {
        if (checkedBank.bal11adjust) {
          try {
            customNHBal11.chart = true;
            customNHBal11.series = [
              {
                label: 'Tiền gửi không kỳ hạn',
                dataKey: 'tienGuiKhongKyHan',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#C8D0D2',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Tiền gửi có kỳ hạn',
                dataKey: 'tienGuiCoKyHan',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#93B6D6',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Tiền gửi tiết kiệm',
                dataKey: 'tienGuiTietKiem',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#6EA2DF',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Tiền gửi ký quỹ',
                dataKey: 'tienGuiKyQuy',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#CCBA95',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Tiền gửi cho những mục đích riêng biệt',
                dataKey: 'tienGuiChoNhungMucDichRiengBiet',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#202222',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
            ];
            customNHBal11.yAxis = {
              left: { type: 'bil', piecewise: false },
              right: { type: 'per', piecewise: true },
            };
          } catch (error) {
            console.log('error', error);
          }
        } else {
          try {
            customNHBal11.chart = false;
            customNHBal11.series = [
              {
                type: 'bar',
                label: 'Tiền gửi không kỳ hạn',
                dataKey: 'tienGuiKhongKyHan',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#C8D0D2',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Tiền gửi có kỳ hạn',
                dataKey: 'tienGuiCoKyHan',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#93B6D6',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Tiền gửi tiết kiệm',
                dataKey: 'tienGuiTietKiem',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#6EA2DF',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Tiền gửi ký quỹ',
                dataKey: 'tienGuiKyQuy',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#CCBA95',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Tiền gửi cho những mục đích riêng biệt',
                dataKey: 'tienGuiChoNhungMucDichRiengBiet',
                yAxisId: 'rightAxis',
                stack: 'stack',
                color: '#202222',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
            ];
            customNHBal11.yAxis = {
              right: { type: 'bil', piecewise: false, showLineReference: true },
              left: { type: 'bil', piecewise: false },
            };
          } catch (error) {
            console.log('error', error);
          }
        }
        let newPerf = await mapDataChart(customNHBal11, tabType);
        setDataChart((prev) => ({ ...prev, bal11: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal11adjust: !prev.bal11adjust }));
      }
      if (typeChart === 'bal12adjust') {
        if (checkedBank.bal12adjust) {
          try {
            customNHBal12.chart = true;
            customNHBal12.series = [
              {
                label: 'Doanh nghiệp nhà nước',
                dataKey: 'doanhNghiepNhaNuocTG',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#CCBA95',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Doanh nghiệp tư nhân',
                dataKey: 'doanhNghiepTuNhanTG',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#014388',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Doanh nghiệp nước ngoài',
                dataKey: 'doanhNghiepNuocNgoaiTG',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#6EA2DF',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Cá nhân',
                dataKey: 'caNhanTG',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#C8D0D2',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
              {
                label: 'Khác',
                dataKey: 'khacTG',
                type: 'line',
                area: true,
                stack: 'total',
                yAxisId: 'rightAxis',
                color: '#202222',
                valueFormatter: (v) => (v === null ? '' : v + ' %'),
              },
            ];
            customNHBal12.yAxis = {
              left: { type: 'bil', piecewise: false },
              right: { type: 'per', piecewise: true },
            };
          } catch (error) {
            console.log('error', error);
          }
        } else {
          try {
            customNHBal12.chart = false;
            customNHBal12.series = [
              {
                type: 'bar',
                label: 'Doanh nghiệp nhà nước',
                dataKey: 'doanhNghiepNhaNuocTG',
                stack: 'stack',
                yAxisId: 'rightAxis',
                color: '#CCBA95',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Doanh nghiệp tư nhân',
                dataKey: 'doanhNghiepTuNhanTG',
                stack: 'stack',
                yAxisId: 'rightAxis',
                color: '#014388',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Doanh nghiệp nước ngoài',
                dataKey: 'doanhNghiepNuocNgoaiTG',
                stack: 'stack',
                yAxisId: 'rightAxis',
                color: '#6EA2DF',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Cá nhân',
                dataKey: 'caNhanTG',
                stack: 'stack',
                yAxisId: 'rightAxis',
                color: '#C8D0D2',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
              {
                type: 'bar',
                label: 'Khác',
                dataKey: 'khacTG',
                stack: 'stack',
                yAxisId: 'rightAxis',
                color: '#202222',
                valueFormatter: (v) => (v === null ? '' : v + ' tỷ đồng'),
              },
            ];
            customNHBal12.yAxis = {
              left: { type: 'bil', piecewise: false },
              right: { type: 'bil', piecewise: false, showLineReference: true },
            };
          } catch (error) {
            console.log('error', error);
          }
        }
        let newPerf = await mapDataChart(customNHBal12, tabType);
        setDataChart((prev) => ({ ...prev, bal12: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal12adjust: !prev.bal12adjust }));
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  const handleToggleTitle = () => {
    setIsOpened(!isOpened);
  };
  const ChartItem = (dataChart, checked, type, year, addjust, checkedAdjust) => {
    return (
      dataChart && (
        <div className="lg:w-1/2 md:w-full">
          <div className="flex">
            <div
              className={`flex flex-1 font-bold text-xl ${!year && !addjust ? 'mb-[18px]' : ''}`}
            >
              <span className="cursor-pointer" onClick={handleToggleTitle}>
                {dataChart?.title || ''} {isOpened ? ' [' + codeValue + ']' : ''}
              </span>
            </div>
            {addjust && (
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <FormControlLabel
                  checked={!checkedAdjust}
                  onChange={() => handleToggle(addjust)}
                  control={<IOSSwitchAdjust sx={{ m: 1 }} defaultChecked disableRipple />}
                />
              </Stack>
            )}
            {year && (
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <FormControlLabel
                  checked={!checked}
                  onChange={() => handleToggle(type)}
                  control={<IOSSwitch sx={{ m: 1 }} defaultChecked disableRipple />}
                />
              </Stack>
            )}
          </div>
          {dataChart && <StackChart data={dataChart} />}
        </div>
      )
    );
  };

  return (
    <Box sx={{ width: '98%', margin: 'auto' }}>
      {show && (
        <div
          className="fixed bottom-2 right-2 cursor-pointer z-10"
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
          backgroundColor: '#FFF8DC',
        }}
      >
        <div className="text-[2rem] font-bold pt-4">{title}</div>
        <div className="flex justify-between">
          <Tabs
            sx={{ '.MuiTab-root': { fontWeight: 'bold' } }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {tabType === 'PTC' &&
              [
                'Chi phí và Sinh lời',
                'Tài sản và nguồn vốn',
                'Hiệu quả đồng vốn',
                'Dòng tiền',
                'Định giá',
              ].map((e, index) => <Tab key={e} label={e} {...a11yProps(index)} />)}
            {tabType === 'ChungKhoan' &&
              ['Hiệu quả kinh doanh', 'Tài sản và nguồn vốn', 'Hiểu quả đồng vốn', 'Định giá'].map(
                (e, index) => <Tab key={e} label={e} {...a11yProps(index)} />
              )}
            {tabType === 'NganHang' &&
              [
                'Hiệu quả kinh doanh',
                'Tài sản và nguồn vốn',
                'Cơ cấu tiền gửi và cho vay',
                'Định giá',
              ].map((e, index) => <Tab key={e} label={e} {...a11yProps(index)} />)}
          </Tabs>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            {tabType === 'PTC' && (
              <FormControlLabel
                checked={!checked.chart}
                onChange={() => handleToggleSum()}
                control={<IOSSwitchSum sx={{ m: 1 }} defaultChecked disableRipple />}
              />
            )}
            {tabType === 'ChungKhoan' && (
              <FormControlLabel
                checked={!checkedCK.chart}
                onChange={() => handleToggleSum()}
                control={<IOSSwitchSum sx={{ m: 1 }} defaultChecked disableRipple />}
              />
            )}
            {tabType === 'NganHang' && (
              <FormControlLabel
                checked={!checkedBank.chart}
                onChange={() => handleToggleSum()}
                control={<IOSSwitchSum sx={{ m: 1 }} defaultChecked disableRipple />}
              />
            )}
          </Stack>
        </div>
      </Box>
      {tabType === 'PTC' && (
        <>
          <CustomTabPanel value={value} index={0}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  {ChartItem(dataChart?.perf1, checked?.perf1, 'perf1', true)}
                  {ChartItem(dataChart?.perf2, checked?.perf2, 'perf2', true)}
                </div>
                <div className="flex gap-8">
                  {ChartItem(dataChart?.perf3, checked?.perf3, 'perf3')}
                  {ChartItem(dataChart?.perf4, null, 'perf4', null, 'perf4', checked?.perf4)}
                </div>
                <div className="flex gap-8">
                  {ChartItem(dataChart?.perf5, null, 'perf5', null, 'perf5', checked?.perf5)}
                  {ChartItem(dataChart?.perf6, checked?.perf6, 'perf6')}
                </div>
              </div>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  {ChartItem(
                    dataChart?.bal1,
                    checked?.bal1,
                    'bal1',
                    true,
                    'bal1ajust',
                    checked?.bal1ajust
                  )}
                  {ChartItem(
                    dataChart?.bal2,
                    checked?.bal2,
                    'bal2',
                    true,
                    'bal2ajust',
                    checked?.bal2ajust
                  )}
                </div>
                <div className="flex gap-8">
                  {ChartItem(dataChart?.bal3, checked?.bal3, 'bal3', true)}
                  {ChartItem(dataChart?.bal4, checked?.bal4, 'bal4', true)}
                </div>
                <div className="flex gap-8">
                  {ChartItem(dataChart?.bal5, checked?.bal5, 'bal5')}
                  {ChartItem(dataChart?.bal6, checked?.bal6, 'bal6', true)}
                </div>
              </div>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className="flex gap-8">
              {ChartItem(dataChart?.perf7, checked?.perf7, 'perf7', true)}
              {ChartItem(dataChart?.perf8, checked?.perf8, 'perf8')}
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <div className="flex flex-col gap-8">
              <div className="flex gap-8">
                {ChartItem(dataChart?.cf1, checked?.cf1, 'cf1', true)}
                {ChartItem(dataChart?.cf2, checked?.cf2, 'cf2', true)}
              </div>
              <div className="flex gap-8">
                {ChartItem(
                  dataChart?.cf3,
                  checked?.cf3,
                  'cf3',
                  true,
                  'cf3adjust',
                  checked?.cf3adjust
                )}
                {ChartItem(dataChart?.cf4, checked?.cf4, 'cf4', true)}
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={4}>
            <div className="flex flex-col gap-8">
              <div className="flex gap-8">
                {ChartItem(dataChart?.val1, checked?.val1, 'val1')}
                {ChartItem(dataChart?.val2, checked?.val2, 'val2')}
              </div>
              <div className="flex gap-8">
                {ChartItem(dataChart?.val3, checked?.val3, 'val3')}
                {ChartItem(dataChart?.val4, checked?.val4, 'val4')}
              </div>
              <div className="flex gap-8">
                {ChartItem(dataChart?.val5, checked?.val5, 'val5')}
                {ChartItem(dataChart?.val6, checked?.val6, 'val6')}
              </div>
              <div className="flex gap-8">
                {ChartItem(dataChart?.val7, checked?.val7, 'val7')}
                {ChartItem(dataChart?.val8, checked?.val8, 'val8')}
              </div>
            </div>
          </CustomTabPanel>
        </>
      )}
      {tabType === 'ChungKhoan' && (
        <>
          <CustomTabPanel value={value} index={0}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  {ChartItem(dataChart?.perf1, checkedCK?.perf1, 'perf1', true)}
                  {ChartItem(dataChart?.perf3, checkedCK?.perf3, 'perf3', true)}
                </div>
                <div className="flex gap-8">
                  {ChartItem(
                    dataChart?.bal4,
                    checkedCK?.bal4,
                    'bal4',
                    true,
                    'bal4ajust',
                    checkedCK?.bal4ajust
                  )}
                  {ChartItem(
                    dataChart?.bal5,
                    checkedCK?.bal5,
                    'bal5',
                    true,
                    'bal5ajust',
                    checkedCK?.bal5ajust
                  )}
                </div>
                <div className="flex gap-8">{ChartItem(dataChart?.perf4, null, 'perf4')}</div>
              </div>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  {ChartItem(
                    dataChart?.bal2,
                    checkedCK?.bal2,
                    'bal2',
                    true,
                    'bal2ajust',
                    checkedCK?.bal2ajust
                  )}
                  {ChartItem(
                    dataChart?.bal3,
                    checkedCK?.bal3,
                    'bal3',
                    true,
                    'bal3ajust',
                    checkedCK?.bal3ajust
                  )}
                </div>
                <div className="flex gap-8">
                  {ChartItem(dataChart?.bal1, checkedCK?.bal1, 'bal1', true)}
                </div>
              </div>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  {ChartItem(dataChart?.perf2, checkedCK?.perf2, 'perf2', true)}
                  {ChartItem(dataChart?.perf5, null, 'perf5')}
                </div>
              </div>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  {ChartItem(dataChart?.val1, null, 'val1')}
                  {ChartItem(dataChart?.val2, null, 'val2')}
                </div>
                <div className="flex gap-8">
                  {ChartItem(dataChart?.val4, null, 'val4')}
                  {ChartItem(dataChart?.val3, null, 'val3')}
                </div>
              </div>
            )}
          </CustomTabPanel>
        </>
      )}
      {tabType === 'NganHang' && (
        <>
          <CustomTabPanel value={value} index={0}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  {ChartItem(dataChart?.perf1, checkedBank?.perf1, 'perf1', true)}
                  {ChartItem(dataChart?.perf2, checkedBank?.perf2, 'perf2', true)}
                </div>
                <div className="flex gap-8">
                  {ChartItem(dataChart?.perf3, checkedBank?.perf3, 'perf3', true)}
                  {ChartItem(dataChart?.perf4, checkedBank?.perf4, 'perf4', true)}
                </div>
              </div>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  {ChartItem(dataChart?.bal1, checkedBank?.bal1, 'bal1', true)}
                  {ChartItem(dataChart?.bal2, checkedBank?.bal2, 'bal2', true)}
                </div>
                <div className="flex gap-8">
                  {ChartItem(dataChart?.bal3, checkedBank?.bal3, 'bal3', true)}
                  {ChartItem(dataChart?.bal4, checkedBank?.bal4, 'bal4', true)}
                </div>
                <div className="flex gap-8">
                  {ChartItem(dataChart?.bal5, checkedBank?.bal5, 'bal5', true)}
                  {ChartItem(dataChart?.bal6, checkedBank?.bal6, 'bal6', true)}
                </div>
                <div className="flex gap-8">
                  {ChartItem(dataChart?.bal7, checkedBank?.bal7, 'bal7', true)}
                  {ChartItem(dataChart?.bal8, checkedBank?.bal8, 'bal8', true)}
                </div>
              </div>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  {ChartItem(
                    dataChart?.bal9,
                    null,
                    'bal9',
                    false,
                    'bal9adjust',
                    checkedBank?.bal9adjust
                  )}
                  {ChartItem(
                    dataChart?.bal10,
                    null,
                    'bal10',
                    false,
                    'bal10adjust',
                    checkedBank?.bal10adjust
                  )}
                </div>
                <div className="flex gap-8">
                  {ChartItem(
                    dataChart?.bal11,
                    null,
                    'bal11',
                    false,
                    'bal11adjust',
                    checkedBank?.bal11adjust
                  )}
                  {ChartItem(
                    dataChart?.bal12,
                    null,
                    'bal12',
                    false,
                    'bal12adjust',
                    checkedBank?.bal12adjust
                  )}
                </div>
              </div>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  {ChartItem(dataChart?.val1, null, 'val1')}
                  {ChartItem(dataChart?.val2, null, 'val2')}
                </div>
                <div className="flex gap-8">
                  {ChartItem(dataChart?.val4, null, 'val4')}
                  {ChartItem(dataChart?.val3, null, 'val3')}
                </div>
              </div>
            )}
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
