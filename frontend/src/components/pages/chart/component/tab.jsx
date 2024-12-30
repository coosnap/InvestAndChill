import {
  getDataChartBank,
  getDataChartNonFinancial,
  getDataChartStock,
  getTypeDataChart,
} from '@/api/chart';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Box, FormControlLabel, Stack, styled, Switch, Tab, Tabs } from '@mui/material';
import { useEffect, useState } from 'react';
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
    bal3: true,
    bal4: true,
    bal5: true,
  });
  const [checkedBank, setCheckedBank] = useState({
    chart: true,
    perf1: true,
    perf2: true,
    perf3: true,
    perf4: true,
    bal1: true,
    bal2: true,
    bal3: true,
    bal4: true,
    bal5: true,
    bal6: true,
    bal7: true,
    bal8: true,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const codeValue = searchParams.get('code') || '';

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

  const tab = window.localStorage.getItem('tab');

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
      result = await getDataChartNonFinancial(custom.type, codeValue, custom.year);
    }
    if (type === 'ChungKhoan') {
      result = await getDataChartStock(custom.type, codeValue, custom.year);
    }
    if (type === 'NganHang') {
      result = await getDataChartBank(custom.type, codeValue, custom.year);
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

  useEffect(() => {
    const loadData = async () => {
      if (codeValue) {
        setDataChart([]);
        setIsLoading(true);
        try {
          const type = await getTypeDataChart(codeValue);
          setTabType(type.type);
          if (type.type === 'PTC') {
            let perf1, perf2, perf3, perf4, perf5, perf6, perf7, perf8;
            let bal1, bal2, bal3, bal4, bal5, bal6;
            let cf1, cf2, cf3, cf4;
            let val1, val2, val3, val4, val5, val6, val7, val8;
            try {
              perf1 = await mapDataChart(customPerfPTC1, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              perf2 = await mapDataChart(customPerfPTC2, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              perf3 = await mapDataChart(customPerfPTC3, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              perf4 = await mapDataChart(customPerfPTC4, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              perf5 = await mapDataChart(customPerfPTC5, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              perf6 = await mapDataChart(customPerfPTC6, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              perf7 = await mapDataChart(customPerfPTC7, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              perf8 = await mapDataChart(customPerfPTC8, type.type);
            } catch (error) {
              console.log('error', error);
            }

            try {
              bal1 = await mapDataChart(customBalPTC1, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              bal2 = await mapDataChart(customBalPTC2, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              bal3 = await mapDataChart(customBalPTC3, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              bal4 = await mapDataChart(customBalPTC4, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              bal5 = await mapDataChart(customBalPTC5, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              bal6 = await mapDataChart(customBalPTC6, type.type);
            } catch (error) {
              console.log('error', error);
            }

            try {
              cf1 = await mapDataChart(customCFPTC1, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              cf2 = await mapDataChart(customCFPTC2, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              cf3 = await mapDataChart(customCFPTC3, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              cf4 = await mapDataChart(customCFPTC4, type.type);
            } catch (error) {
              console.log('error', error);
            }

            try {
              val1 = await mapDataChart(customValPTC1, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              val2 = await mapDataChart(customValPTC2, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              val3 = await mapDataChart(customValPTC3, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              val4 = await mapDataChart(customValPTC4, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              val5 = await mapDataChart(customValPTC5, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              val6 = await mapDataChart(customValPTC6, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              val7 = await mapDataChart(customValPTC7, type.type);
            } catch (error) {
              console.log('error', error);
            }
            try {
              val8 = await mapDataChart(customValPTC8, type.type);
            } catch (error) {
              console.log('error', error);
            }

            if (
              perf1 ||
              perf2 ||
              perf3 ||
              perf4 ||
              perf5 ||
              perf6 ||
              perf7 ||
              perf8 ||
              bal1 ||
              bal2 ||
              bal3 ||
              bal4 ||
              bal5 ||
              bal6 ||
              cf1 ||
              cf2 ||
              cf3 ||
              cf4 ||
              val1 ||
              val2 ||
              val3 ||
              val4 ||
              val5 ||
              val6 ||
              val7 ||
              val8
            ) {
              setDataChart({
                perf1,
                perf2,
                perf3,
                perf4,
                perf5,
                perf6,
                perf7,
                perf8,
                bal1,
                bal2,
                bal3,
                bal4,
                bal5,
                bal6,
                cf1,
                cf2,
                cf3,
                cf4,
                val1,
                val2,
                val3,
                val4,
                val5,
                val6,
                val7,
                val8,
              });
            }
            setValue(0);
            setIsLoading(false);
          }
          if (type.type === 'ChungKhoan') {
            let perf1, perf2, perf3, perf4, perf5;
            let bal1, bal2, bal3, bal4, bal5;
            try {
              perf1 = await mapDataChart(customPerfCK1, type.type);
            } catch (error) {
              console.log('perf1', error);
            }
            try {
              perf2 = await mapDataChart(customPerfCK2, type.type);
            } catch (error) {
              console.log('perf2', error);
            }
            try {
              perf3 = await mapDataChart(customPerfCK3, type.type);
            } catch (error) {
              console.log('perf3', error);
            }
            try {
              perf4 = await mapDataChart(customPerfCK4, type.type);
            } catch (error) {
              console.log('perf4', error);
            }
            try {
              perf5 = await mapDataChart(customPerfCK5, type.type);
            } catch (error) {
              console.log('perf5', error);
            }

            try {
              bal1 = await mapDataChart(customBalCK1, type.type);
            } catch (error) {
              console.log('bal1', error);
            }
            try {
              bal2 = await mapDataChart(customBalCK2, type.type);
            } catch (error) {
              console.log('bal2', error);
            }
            try {
              bal3 = await mapDataChart(customBalCK3, type.type);
            } catch (error) {
              console.log('bal3', error);
            }
            try {
              bal4 = await mapDataChart(customBalCK4, type.type);
            } catch (error) {
              console.log('bal4', error);
            }
            try {
              bal5 = await mapDataChart(customBalCK5, type.type);
            } catch (error) {
              console.log('bal5', error);
            }
            if (perf1 && perf2 && perf3 && perf4 && perf5 && bal1 && bal2 && bal3 && bal4 && bal5) {
              setDataChart({
                perf1,
                perf2,
                perf3,
                perf4,
                perf5,

                bal1,
                bal2,
                bal3,
                bal4,
                bal5,
              });
            }
            setIsLoading(false);
          }
          if (type.type === 'NganHang') {
            let perf1, perf2, perf3, perf4;
            let bal1, bal2, bal3, bal4, bal5, bal6, bal7, bal8, bal9, bal10, bal11, bal12;
            try {
              perf1 = await mapDataChart(customNHPerf1, type.type);
            } catch (error) {
              console.log('perf1', error);
            }
            try {
              perf2 = await mapDataChart(customNHPerf2, type.type);
            } catch (error) {
              console.log('perf2', error);
            }
            try {
              perf3 = await mapDataChart(customNHPerf3, type.type);
            } catch (error) {
              console.log('perf3', error);
            }
            try {
              perf4 = await mapDataChart(customNHPerf4, type.type);
            } catch (error) {
              console.log('perf4', error);
            }

            try {
              bal1 = await mapDataChart(customNHBal1, type.type);
            } catch (error) {
              console.log('bal1', error);
            }
            try {
              bal2 = await mapDataChart(customNHBal2, type.type);
            } catch (error) {
              console.log('bal2', error);
            }
            try {
              bal3 = await mapDataChart(customNHBal3, type.type);
            } catch (error) {
              console.log('bal3', error);
            }
            try {
              bal4 = await mapDataChart(customNHBal4, type.type);
            } catch (error) {
              console.log('bal4', error);
            }
            try {
              bal5 = await mapDataChart(customNHBal5, type.type);
            } catch (error) {
              console.log('bal5', error);
            }
            try {
              bal6 = await mapDataChart(customNHBal6, type.type);
            } catch (error) {
              console.log('bal6', error);
            }
            try {
              bal7 = await mapDataChart(customNHBal7, type.type);
            } catch (error) {
              console.log('bal7', error);
            }
            try {
              bal8 = await mapDataChart(customNHBal8, type.type);
            } catch (error) {
              console.log('bal8', error);
            }
            try {
              bal9 = await mapDataChart(customNHBal9, type.type);
            } catch (error) {
              console.log('bal9', error);
            }
            try {
              bal10 = await mapDataChart(customNHBal10, type.type);
            } catch (error) {
              console.log('bal10', error);
            }
            try {
              bal11 = await mapDataChart(customNHBal11, type.type);
            } catch (error) {
              console.log('bal11', error);
            }
            try {
              bal12 = await mapDataChart(customNHBal12, type.type);
            } catch (error) {
              console.log('bal12', error);
            }

            if (
              perf1 &&
              perf2 &&
              perf3 &&
              perf4 &&
              bal1 &&
              bal2 &&
              bal3 &&
              bal4 &&
              bal5 &&
              bal6 &&
              bal7 &&
              bal8 &&
              bal9 &&
              bal10 &&
              bal11 &&
              bal12
            ) {
              setDataChart({
                perf1,
                perf2,
                perf3,
                perf4,
                bal1,
                bal2,
                bal3,
                bal4,
                bal5,
                bal6,
                bal7,
                bal8,
                bal9,
                bal10,
                bal11,
                bal12,
              });
            }
            setIsLoading(false);
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

  const handleToggleSum = async (typeChart) => {
    if (tabType === 'PTC') {
      setChecked((prev) => ({ ...prev, chart: !prev.chart }));
      try {
        customPerfPTC1.year = checked.perf1;
        let newPerf1 = await mapDataChart(customPerfPTC1, tabType);
        setDataChart((prev) => ({ ...prev, perf1: newPerf1 }));
        setChecked((prev) => ({ ...prev, perf1: !prev.perf1 }));
      } catch (error) {
        console.log('perf1', error);
      }
      try {
        customPerfPTC2.year = checked.perf2;
        let newPerf2 = await mapDataChart(customPerfPTC2, tabType);
        setDataChart((prev) => ({ ...prev, perf2: newPerf2 }));
        setChecked((prev) => ({ ...prev, perf2: !prev.perf2 }));
      } catch (error) {
        console.log('perf2', error);
      }
      try {
        customPerfPTC7.year = checked.perf7;
        let newPerf7 = await mapDataChart(customPerfPTC7, tabType);
        setDataChart((prev) => ({ ...prev, perf7: newPerf7 }));
        setChecked((prev) => ({ ...prev, perf7: !prev.perf7 }));
      } catch (error) {
        console.log('perf7', error);
      }
      try {
        customBalPTC1.year = checked.bal1;
        let newBal1 = await mapDataChart(customBalPTC1, tabType);
        setDataChart((prev) => ({ ...prev, bal1: newBal1 }));
        setChecked((prev) => ({ ...prev, bal1: !prev.bal1 }));
      } catch (error) {
        console.log('bal1', error);
      }
      try {
        customBalPTC2.year = checked.bal2;
        let newBal2 = await mapDataChart(customBalPTC2, tabType);
        setDataChart((prev) => ({ ...prev, bal2: newBal2 }));
        setChecked((prev) => ({ ...prev, bal2: !prev.bal2 }));
      } catch (error) {
        console.log('bal2', error);
      }
      try {
        customBalPTC3.year = checked.bal3;
        let newBal3 = await mapDataChart(customBalPTC3, tabType);
        setDataChart((prev) => ({ ...prev, bal3: newBal3 }));
        setChecked((prev) => ({ ...prev, bal3: !prev.bal3 }));
      } catch (error) {
        console.log('bal3', error);
      }
      try {
        customBalPTC4.year = checked.bal4;
        let newBal4 = await mapDataChart(customBalPTC4, tabType);
        setDataChart((prev) => ({ ...prev, bal4: newBal4 }));
        setChecked((prev) => ({ ...prev, bal4: !prev.bal4 }));
      } catch (error) {
        console.log('bal4', error);
      }
      try {
        customBalPTC6.year = checked.bal6;
        let newBal6 = await mapDataChart(customBalPTC6, tabType);
        setDataChart((prev) => ({ ...prev, bal6: newBal6 }));
        setChecked((prev) => ({ ...prev, bal6: !prev.bal6 }));
      } catch (error) {
        console.log('bal6', error);
      }
      try {
        customCFPTC1.year = checked.cf1;
        let newCf1 = await mapDataChart(customCFPTC1, tabType);
        setDataChart((prev) => ({ ...prev, cf1: newCf1 }));
        setChecked((prev) => ({ ...prev, cf1: !prev.cf1 }));
      } catch (error) {
        console.log('bal6', error);
      }
      try {
        customCFPTC2.year = checked.cf2;
        let newCf2 = await mapDataChart(customCFPTC2, tabType);
        setDataChart((prev) => ({ ...prev, cf2: newCf2 }));
        setChecked((prev) => ({ ...prev, cf2: !prev.cf2 }));
      } catch (error) {
        console.log('cf2', error);
      }
      try {
        customCFPTC3.year = checked.cf3;
        let newCf3 = await mapDataChart(customCFPTC3, tabType);
        setDataChart((prev) => ({ ...prev, cf3: newCf3 }));
        setChecked((prev) => ({ ...prev, cf3: !prev.cf3 }));
      } catch (error) {
        console.log('cf3', error);
      }
      try {
        customCFPTC4.year = checked.cf4;
        let newCf4 = await mapDataChart(customCFPTC4, tabType);
        setDataChart((prev) => ({ ...prev, cf4: newCf4 }));
        setChecked((prev) => ({ ...prev, cf4: !prev.cf4 }));
      } catch (error) {
        console.log('cf4', error);
      }
    }
    if (tabType === 'ChungKhoan') {
      setCheckedCK((prev) => ({ ...prev, chart: !prev.chart }));
      try {
        customPerfCK1.year = checkedCK.perf1;
        let newPerf1 = await mapDataChart(customPerfCK1, tabType);
        setDataChart((prev) => ({ ...prev, perf1: newPerf1 }));
        setCheckedCK((prev) => ({ ...prev, perf1: !prev.perf1 }));
      } catch (error) {
        console.log('perf1', error);
      }
      try {
        customPerfCK2.year = checkedCK.perf2;
        let newPerf2 = await mapDataChart(customPerfCK2, tabType);
        setDataChart((prev) => ({ ...prev, perf2: newPerf2 }));
        setCheckedCK((prev) => ({ ...prev, perf2: !prev.perf2 }));
      } catch (error) {
        console.log('perf2', error);
      }
      try {
        customPerfCK3.year = checkedCK.perf3;
        let newPerf3 = await mapDataChart(customPerfCK3, tabType);
        setDataChart((prev) => ({ ...prev, perf3: newPerf3 }));
        setCheckedCK((prev) => ({ ...prev, perf3: !prev.perf3 }));
      } catch (error) {
        console.log('perf3', error);
      }

      try {
        customBalCK1.year = checkedCK.bal1;
        let newBal1 = await mapDataChart(customBalCK1, tabType);
        setDataChart((prev) => ({ ...prev, bal1: newBal1 }));
        setCheckedCK((prev) => ({ ...prev, bal1: !prev.bal1 }));
      } catch (error) {
        console.log('bal1', error);
      }
      try {
        customBalCK2.year = checkedCK.bal2;
        let newBal2 = await mapDataChart(customBalCK2, tabType);
        setDataChart((prev) => ({ ...prev, bal2: newBal2 }));
        setCheckedCK((prev) => ({ ...prev, bal2: !prev.bal2 }));
      } catch (error) {
        console.log('bal2', error);
      }
      try {
        customBalCK3.year = checkedCK.bal3;
        let newBal3 = await mapDataChart(customBalCK3, tabType);
        setDataChart((prev) => ({ ...prev, bal3: newBal3 }));
        setCheckedCK((prev) => ({ ...prev, bal3: !prev.bal3 }));
      } catch (error) {
        console.log('bal3', error);
      }
      try {
        customBalCK4.year = checkedCK.bal4;
        let newBal4 = await mapDataChart(customBalCK4, tabType);
        setDataChart((prev) => ({ ...prev, bal4: newBal4 }));
        setCheckedCK((prev) => ({ ...prev, bal4: !prev.bal4 }));
      } catch (error) {
        console.log('bal4', error);
      }
      try {
        customBalCK5.year = checkedCK.bal5;
        let newBal5 = await mapDataChart(customBalCK5, tabType);
        setDataChart((prev) => ({ ...prev, bal5: newBal5 }));
        setCheckedCK((prev) => ({ ...prev, bal5: !prev.bal5 }));
      } catch (error) {
        console.log('bal5', error);
      }
    }
    if (tabType === 'NganHang') {
      setCheckedBank((prev) => ({ ...prev, chart: !prev.chart }));
      try {
        customNHPerf1.year = checkedBank.perf1;
        let newPerf = await mapDataChart(customNHPerf1, tabType);
        setDataChart((prev) => ({ ...prev, perf1: newPerf }));
        setCheckedBank((prev) => ({ ...prev, perf1: !prev.perf1 }));
      } catch (error) {
        console.log('perf1', error);
      }
      try {
        customNHPerf2.year = checkedBank.perf2;
        let newPerf = await mapDataChart(customNHPerf2, tabType);
        setDataChart((prev) => ({ ...prev, perf2: newPerf }));
        setCheckedBank((prev) => ({ ...prev, perf2: !prev.perf2 }));
      } catch (error) {
        console.log('perf2', error);
      }
      try {
        customNHPerf3.year = checkedBank.perf3;
        let newPerf = await mapDataChart(customNHPerf3, tabType);
        setDataChart((prev) => ({ ...prev, perf3: newPerf }));
        setCheckedBank((prev) => ({ ...prev, perf3: !prev.perf3 }));
      } catch (error) {
        console.log('perf3', error);
      }
      try {
        customNHPerf4.year = checkedBank.perf4;
        let newPerf = await mapDataChart(customNHPerf4, tabType);
        setDataChart((prev) => ({ ...prev, perf4: newPerf }));
        setCheckedBank((prev) => ({ ...prev, perf4: !prev.perf4 }));
      } catch (error) {
        console.log('perf4', error);
      }

      try {
        customNHBal1.year = checkedBank.bal1;
        let newPerf = await mapDataChart(customNHBal1, tabType);
        setDataChart((prev) => ({ ...prev, bal1: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal1: !prev.bal1 }));
      } catch (error) {
        console.log('bal1', error);
      }
      try {
        customNHBal2.year = checkedBank.bal2;
        let newPerf = await mapDataChart(customNHBal2, tabType);
        setDataChart((prev) => ({ ...prev, bal2: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal2: !prev.bal2 }));
      } catch (error) {
        console.log('bal2', error);
      }
      try {
        customNHBal3.year = checkedBank.bal3;
        let newPerf = await mapDataChart(customNHBal3, tabType);
        setDataChart((prev) => ({ ...prev, bal3: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal3: !prev.bal3 }));
      } catch (error) {
        console.log('bal3', error);
      }
      try {
        customNHBal4.year = checkedBank.bal4;
        let newPerf = await mapDataChart(customNHBal4, tabType);
        setDataChart((prev) => ({ ...prev, bal4: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal4: !prev.bal4 }));
      } catch (error) {
        console.log('bal4', error);
      }
      try {
        customNHBal5.year = checkedBank.bal5;
        let newPerf = await mapDataChart(customNHBal5, tabType);
        setDataChart((prev) => ({ ...prev, bal5: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal5: !prev.bal5 }));
      } catch (error) {
        console.log('bal5', error);
      }
      try {
        customNHBal6.year = checkedBank.bal6;
        let newPerf = await mapDataChart(customNHBal6, tabType);
        setDataChart((prev) => ({ ...prev, bal6: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal6: !prev.bal6 }));
      } catch (error) {
        console.log('bal6', error);
      }
      try {
        customNHBal7.year = checkedBank.bal7;
        let newPerf = await mapDataChart(customNHBal7, tabType);
        setDataChart((prev) => ({ ...prev, bal7: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal7: !prev.bal7 }));
      } catch (error) {
        console.log('bal7', error);
      }
      try {
        customNHBal8.year = checkedBank.bal8;
        let newPerf = await mapDataChart(customNHBal8, tabType);
        setDataChart((prev) => ({ ...prev, bal8: newPerf }));
        setCheckedBank((prev) => ({ ...prev, bal8: !prev.bal8 }));
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
          customPerfPTC4.series[1] = {
            type: 'bar',
            label: 'Lợi nhuận tài chính TTM (one-off adjusted)',
            dataKey: 'netFinancialAdjustTrailing',
            yAxisId: 'leftAxis',
          };
          let newPerf = await mapDataChart(customPerfPTC4, tabType);
          setDataChart((prev) => ({ ...prev, perf4: newPerf }));
          setChecked((prev) => ({ ...prev, perf4: !prev.perf4 }));
        } else {
          customPerfPTC4.series[1] = {
            type: 'bar',
            label: 'Lợi nhuận tài chính TTM',
            dataKey: 'netFinanceialTrailing',
            yAxisId: 'leftAxis',
          };
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
          };
        } else {
          customPerfPTC5.series[0] = {
            type: 'bar',
            label: 'Lợi nhuận ròng TTM',
            dataKey: 'nitrailing',
            yAxisId: 'rightAxis',
            stack: 'stack',
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
          const giaTriRongTaiSanDauTu = dataChart.bal1.dataset.map((v) => v.giaTriRongTaiSanDauTu);
          const hangTonKhoRong = dataChart.bal1.dataset.map((v) => v.hangTonKhoRong);
          const phaiThu = dataChart.bal1.dataset.map((v) => v.phaiThu);
          const taiSanCoDinh = dataChart.bal1.dataset.map((v) => v.taiSanCoDinh);
          const taiSanDoDangDaiHan = dataChart.bal1.dataset.map((v) => v.taiSanDoDangDaiHan);
          const taiSanKhac = dataChart.bal1.dataset.map((v) => v.taiSanKhac);
          const tienDTNGDaoHan = dataChart.bal1.dataset.map((v) => v.tienDTNGDaoHan);
          const getPercents = (array) =>
            array.map((v, index) => {
              const result =
                (v /
                  (phaiThu[index] +
                    tienDTNGDaoHan[index] +
                    hangTonKhoRong[index] +
                    taiSanCoDinh[index] +
                    taiSanDoDangDaiHan[index] +
                    giaTriRongTaiSanDauTu[index] +
                    taiSanKhac[index])) *
                  100 || 0;
              return result;
            });
          customBalPTC1.series = [
            {
              data: getPercents(tienDTNGDaoHan),
              type: 'line',
              label: 'Tiền',
              area: true,
              stack: 'total',
              yAxisId: 'leftAxis',
            },
            {
              data: getPercents(phaiThu),
              type: 'line',
              label: 'Phải thu',
              area: true,
              stack: 'total',
              yAxisId: 'leftAxis',
            },
            {
              data: getPercents(hangTonKhoRong),
              type: 'line',
              label: 'Hàng tồn kho',
              area: true,
              stack: 'total',
              yAxisId: 'leftAxis',
            },
            {
              data: getPercents(taiSanCoDinh),
              type: 'line',
              label: 'Tài sản cố định',
              area: true,
              stack: 'total',
              yAxisId: 'leftAxis',
            },
            {
              data: getPercents(taiSanDoDangDaiHan),
              type: 'line',
              label: 'Tài sản dở dang',
              area: true,
              stack: 'total',
              yAxisId: 'leftAxis',
            },
            {
              data: getPercents(giaTriRongTaiSanDauTu),
              type: 'line',
              label: 'Bất động sản đầu tư',
              area: true,
              stack: 'total',
              yAxisId: 'leftAxis',
            },
            {
              data: getPercents(taiSanKhac),
              type: 'line',
              label: 'Tài sản khác',
              area: true,
              stack: 'total',
              yAxisId: 'leftAxis',
            },
          ];
          customBalPTC1.yAxis = {
            left: { type: 'per', piecewise: true },
            right: { type: 'bil', piecewise: false },
          };
        } else {
          customBalPTC1.series = [
            {
              type: 'bar',
              label: 'Tiền',
              dataKey: 'tienDTNGDaoHan',
              yAxisId: 'leftAxis',
              stack: 'stack',
            },
            {
              type: 'bar',
              label: 'Phải thu',
              dataKey: 'phaiThu',
              yAxisId: 'leftAxis',
              stack: 'stack',
            },
            {
              type: 'bar',
              label: 'Hàng tồn kho',
              dataKey: 'hangTonKhoRong',
              yAxisId: 'leftAxis',
              stack: 'stack',
            },
            {
              type: 'bar',
              label: 'Tài sản cố định',
              dataKey: 'taiSanCoDinh',
              yAxisId: 'leftAxis',
              stack: 'stack',
            },
            {
              type: 'bar',
              label: 'Tài sản dở dang',
              dataKey: 'taiSanDoDangDaiHan',
              yAxisId: 'leftAxis',
              stack: 'stack',
            },
            {
              type: 'bar',
              label: 'Bất động sản đầu tư',
              dataKey: 'giaTriRongTaiSanDauTu',
              yAxisId: 'leftAxis',
              stack: 'stack',
            },
            {
              type: 'bar',
              label: 'Tài sản khác',
              dataKey: 'taiSanKhac',
              yAxisId: 'leftAxis',
              stack: 'stack',
            },
          ];
          customBalPTC1.yAxis = {
            left: { type: 'bil', piecewise: false },
            right: { type: 'bil', piecewise: false },
          };
        }
        let newPerf = await mapDataChart(customBalPTC1, tabType);
        setDataChart((prev) => ({ ...prev, bal1: newPerf }));
        setChecked((prev) => ({ ...prev, bal1ajust: !prev.bal1ajust }));
      }
      if (typeChart === 'bal2') {
        customBalPTC2.year = checked.bal2;
        let newPerf = await mapDataChart(customBalPTC2, tabType);
        setDataChart((prev) => ({ ...prev, bal2: newPerf }));
        setChecked((prev) => ({ ...prev, bal2: !prev.bal2 }));
      }
      if (typeChart === 'bal2ajust') {
        if (checked.bal2ajust) {
          const vonGop = dataChart.bal2.dataset.map((v) => v.vonGop);
          const laiChuaPhanPhoi = dataChart.bal2.dataset.map((v) => v.laiChuaPhanPhoi);
          const vcshKhac = dataChart.bal2.dataset.map((v) => v.vcshKhac);
          const noChiemDung = dataChart.bal2.dataset.map((v) => v.noChiemDung);
          const noVay = dataChart.bal2.dataset.map((v) => v.noVay);
          const getPercentsBal2 = (array) =>
            array.map((v, index) => {
              const result =
                (v /
                  (vonGop[index] +
                    laiChuaPhanPhoi[index] +
                    vcshKhac[index] +
                    noChiemDung[index] +
                    noVay[index])) *
                  100 || 0;
              return result;
            });
          customBalPTC2.series = [
            {
              data: getPercentsBal2(vonGop),
              type: 'line',
              label: 'Vốn góp của Chủ sở hữu',
              area: true,
              stack: 'total',
              yAxisId: 'rightAxis',
            },
            {
              data: getPercentsBal2(laiChuaPhanPhoi),
              type: 'line',
              label: 'LNST chưa phân phối',
              yAxisId: 'rightAxis',
              area: true,
              stack: 'total',
            },
            {
              data: getPercentsBal2(vcshKhac),
              type: 'line',
              label: 'Vốn chủ sở hữu khác',
              yAxisId: 'rightAxis',
              area: true,
              stack: 'total',
            },
            {
              data: getPercentsBal2(noChiemDung),
              type: 'line',
              label: 'Nợ chiếm dụng',
              yAxisId: 'rightAxis',
              area: true,
              stack: 'total',
            },
            {
              data: getPercentsBal2(noVay),
              type: 'line',
              label: 'Nợ vay',
              yAxisId: 'rightAxis',
              area: true,
              stack: 'total',
            },
          ];
          customBalPTC2.yAxis = {
            left: { type: 'per', piecewise: false },
            right: { type: 'per', piecewise: true },
          };
        } else {
          customBalPTC2.series = [
            {
              type: 'bar',
              label: 'Vốn góp của Chủ sở hữu',
              dataKey: 'vonGop',
              yAxisId: 'rightAxis',
              stack: 'stack',
            },
            {
              type: 'bar',
              label: 'LNST chưa phân phối',
              dataKey: 'laiChuaPhanPhoi',
              yAxisId: 'rightAxis',
              stack: 'stack',
            },
            {
              type: 'bar',
              label: 'Vốn chủ sở hữu khác',
              dataKey: 'vcshKhac',
              yAxisId: 'rightAxis',
              stack: 'stack',
            },
            {
              type: 'bar',
              label: 'Nợ chiếm dụng',
              dataKey: 'noChiemDung',
              yAxisId: 'rightAxis',
              stack: 'stack',
            },
            {
              type: 'bar',
              label: 'Nợ vay',
              dataKey: 'noVay',
              yAxisId: 'rightAxis',
              stack: 'stack',
            },
          ];
          customBalPTC2.yAxis = {
            left: { type: 'per', piecewise: false },
            right: { type: 'bil', piecewise: false },
          };
        }
        let newPerf = await mapDataChart(customBalPTC2, tabType);
        setDataChart((prev) => ({ ...prev, bal2: newPerf }));
        setChecked((prev) => ({ ...prev, bal2ajust: !prev.bal2ajust }));
      }
      if (typeChart === 'bal3') {
        customBalPTC3.year = checked.bal3;
        let newPerf = await mapDataChart(customBalPTC3, tabType);
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
      if (typeChart === 'bal3') {
        customBalCK3.year = checkedCK.bal3;
        let newPerf = await mapDataChart(customBalCK3, tabType);
        setDataChart((prev) => ({ ...prev, bal3: newPerf }));
        setCheckedCK((prev) => ({ ...prev, bal3: !prev.bal3 }));
      }
      if (typeChart === 'bal4') {
        customBalCK4.year = checkedCK.bal4;
        let newPerf = await mapDataChart(customBalCK4, tabType);
        setDataChart((prev) => ({ ...prev, bal4: newPerf }));
        setCheckedCK((prev) => ({ ...prev, bal4: !prev.bal4 }));
      }
      if (typeChart === 'bal5') {
        customBalCK5.year = checkedCK.bal5;
        let newPerf = await mapDataChart(customBalCK5, tabType);
        setDataChart((prev) => ({ ...prev, bal5: newPerf }));
        setCheckedCK((prev) => ({ ...prev, bal5: !prev.bal5 }));
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
        let newPerf = await mapDataChart(customNHBal5, tabType);
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

  const ChartItem = (dataChart, checked, type, year, addjust, checkedAdjust) => {
    return (
      <div className="lg:w-1/2 md:w-full">
        <div className="flex">
          <div className={`flex flex-1 font-bold text-xl ${!year && !addjust ? 'mb-[18px]' : ''}`}>
            {dataChart?.title || ''}
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
    );
  };

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
            value={tab ? Number(tab) : value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {tabType === 'PTC' &&
              [
                'Chi phí và Sinh lời',
                'Tài sản & Nguồn vốn',
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
                onChange={() => handleToggleSum(tabType)}
                control={<IOSSwitchSum sx={{ m: 1 }} defaultChecked disableRipple />}
              />
            )}
            {tabType === 'ChungKhoan' && (
              <FormControlLabel
                checked={!checkedCK.chart}
                onChange={() => handleToggleSum(tabType)}
                control={<IOSSwitchSum sx={{ m: 1 }} defaultChecked disableRipple />}
              />
            )}
            {tabType === 'NganHang' && (
              <FormControlLabel
                checked={!checkedBank.chart}
                onChange={() => handleToggleSum(tabType)}
                control={<IOSSwitchSum sx={{ m: 1 }} defaultChecked disableRipple />}
              />
            )}
          </Stack>
        </div>
      </Box>
      {tabType === 'PTC' && (
        <>
          <CustomTabPanel value={tab ? Number(tab) : value} index={0}>
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
          <CustomTabPanel value={tab ? Number(tab) : value} index={1}>
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
          <CustomTabPanel value={tab ? Number(tab) : value} index={2}>
            <div className="flex gap-8">
              {ChartItem(dataChart?.perf7, checked?.perf7, 'perf7', true)}
              {ChartItem(dataChart?.perf8, checked?.perf8, 'perf8')}
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={tab ? Number(tab) : value} index={3}>
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
          <CustomTabPanel value={tab ? Number(tab) : value} index={4}>
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
          <CustomTabPanel value={tab ? Number(tab) : value} index={0}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  {ChartItem(dataChart?.perf1, checkedCK?.perf1, 'perf1', true)}
                  {ChartItem(dataChart?.perf3, checkedCK?.perf3, 'perf3', true)}
                </div>
                <div className="flex gap-8">
                  {ChartItem(dataChart?.bal4, checkedCK?.bal4, 'bal4', true)}
                  {ChartItem(dataChart?.bal5, checkedCK?.bal5, 'bal5', true)}
                </div>
                <div className="flex gap-8">{ChartItem(dataChart?.perf4, null, 'perf4')}</div>
              </div>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={tab ? Number(tab) : value} index={1}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  {ChartItem(dataChart?.bal2, checkedCK?.bal2, 'bal2', true)}
                  {ChartItem(dataChart?.bal3, checkedCK?.bal3, 'bal3', true)}
                </div>
                <div className="flex gap-8">
                  {ChartItem(dataChart?.bal1, checkedCK?.bal1, 'bal1', true)}
                </div>
              </div>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={tab ? Number(tab) : value} index={2}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  {ChartItem(dataChart?.perf2, checkedCK?.perf2, 'perf2', true)}
                  {ChartItem(dataChart?.perf5, null, 'perf5')}
                </div>
              </div>
            )}
          </CustomTabPanel>
        </>
      )}
      {tabType === 'NganHang' && (
        <>
          <CustomTabPanel value={tab ? Number(tab) : value} index={0}>
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
          <CustomTabPanel value={tab ? Number(tab) : value} index={1}>
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
          <CustomTabPanel value={tab ? Number(tab) : value} index={2}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  {ChartItem(dataChart?.bal9, null, 'bal9')}
                  {ChartItem(dataChart?.bal10, null, 'bal10')}
                </div>
                <div className="flex gap-8">
                  {ChartItem(dataChart?.bal11, null, 'bal11')}
                  {ChartItem(dataChart?.bal12, null, 'bal12')}
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
