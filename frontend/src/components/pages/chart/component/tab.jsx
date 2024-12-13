import {
  getDataChartBank,
  getDataChartNonFinancial,
  getDataChartStock,
  getTypeDataChart,
} from '@/api/chart';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Box, FormControlLabel, Stack, styled, Switch, Tab, Tabs, Typography } from '@mui/material';
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
} from './customPTC';
import StackChart from './stack-chart';

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
        categoryGapRatio: xAxis ? xAxis.categoryGapRatio : 0.5,
        barGapRatio: xAxis ? xAxis.barGapRatio : 0.5,
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
            try {
              let perf1 = await mapDataChart(customPerfPTC1, type.type);
              let perf2 = await mapDataChart(customPerfPTC2, type.type);
              let perf3 = await mapDataChart(customPerfPTC3, type.type);
              let perf4 = await mapDataChart(customPerfPTC4, type.type);
              let perf5 = await mapDataChart(customPerfPTC5, type.type);
              let perf6 = await mapDataChart(customPerfPTC6, type.type);
              let perf7 = await mapDataChart(customPerfPTC7, type.type);
              let perf8 = await mapDataChart(customPerfPTC8, type.type);

              let bal1 = await mapDataChart(customBalPTC1, type.type);
              let bal2 = await mapDataChart(customBalPTC2, type.type);
              let bal3 = await mapDataChart(customBalPTC3, type.type);
              let bal4 = await mapDataChart(customBalPTC4, type.type);
              let bal5 = await mapDataChart(customBalPTC5, type.type);
              let bal6 = await mapDataChart(customBalPTC6, type.type);

              let cf1 = await mapDataChart(customCFPTC1, type.type);
              let cf2 = await mapDataChart(customCFPTC2, type.type);
              let cf3 = await mapDataChart(customCFPTC3, type.type);
              let cf4 = await mapDataChart(customCFPTC4, type.type);

              if (
                perf1 &&
                perf2 &&
                perf3 &&
                perf4 &&
                perf5 &&
                perf6 &&
                perf7 &&
                perf8 &&
                bal1 &&
                bal2 &&
                bal3 &&
                bal4 &&
                bal5 &&
                bal6 &&
                cf1 &&
                cf2 &&
                cf3 &&
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
                  bal1: bal1,
                  bal2: bal2,
                  bal3: bal3,
                  bal4: bal4,
                  bal5: bal5,
                  bal6: bal6,
                  cf1: cf1,
                  cf2: cf2,
                  cf3: cf3,
                  cf4: cf4,
                });
              }
              setValue(0);
              setIsLoading(false);
            } catch (error) {
              console.log(error);
            }
          }
          if (type.type === 'ChungKhoan') {
            try {
              let perf1 = await mapDataChart(customPerfCK1, type.type);
              let perf2 = await mapDataChart(customPerfCK2, type.type);
              let perf3 = await mapDataChart(customPerfCK3, type.type);
              let perf4 = await mapDataChart(customPerfCK4, type.type);
              let perf5 = await mapDataChart(customPerfCK5, type.type);

              let bal1 = await mapDataChart(customBalCK1, type.type);
              let bal2 = await mapDataChart(customBalCK2, type.type);
              let bal3 = await mapDataChart(customBalCK3, type.type);
              let bal4 = await mapDataChart(customBalCK4, type.type);
              let bal5 = await mapDataChart(customBalCK5, type.type);

              if (
                perf1 &&
                perf2 &&
                perf3 &&
                perf4 &&
                perf5 &&
                bal1 &&
                bal2 &&
                bal3 &&
                bal4 &&
                bal5
              ) {
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
            } catch (error) {
              console.log(error);
            }
            setIsLoading(false);
          }
          if (type.type === 'NganHang') {
            try {
              let perf1 = await mapDataChart(customNHPerf1, type.type);
              let perf2 = await mapDataChart(customNHPerf2, type.type);
              let perf3 = await mapDataChart(customNHPerf3, type.type);
              let perf4 = await mapDataChart(customNHPerf4, type.type);

              let bal1 = await mapDataChart(customNHBal1, type.type);
              let bal2 = await mapDataChart(customNHBal2, type.type);
              let bal3 = await mapDataChart(customNHBal3, type.type);
              let bal4 = await mapDataChart(customNHBal4, type.type);
              let bal5 = await mapDataChart(customNHBal5, type.type);
              let bal6 = await mapDataChart(customNHBal6, type.type);
              let bal7 = await mapDataChart(customNHBal7, type.type);
              let bal8 = await mapDataChart(customNHBal8, type.type);
              let bal9 = await mapDataChart(customNHBal9, type.type);
              let bal10 = await mapDataChart(customNHBal10, type.type);
              let bal11 = await mapDataChart(customNHBal11, type.type);
              let bal12 = await mapDataChart(customNHBal12, type.type);

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
            } catch (error) {
              console.log(error);
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

  const handleToggle = async (typeChart) => {
    if (tabType === 'PTC') {
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
      if (typeChart === 'bal1') {
        customBalPTC1.year = checked.bal1;
        let newPerf = await mapDataChart(customBalPTC1);
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
        let newPerf = await mapDataChart(customBalPTC1);
        setDataChart((prev) => ({ ...prev, bal1: newPerf }));
        setChecked((prev) => ({ ...prev, bal1ajust: !prev.bal1ajust }));
      }
      if (typeChart === 'bal2ajust') {
        if (checked.bal2ajust) {
          const vonGop = dataChart.bal2.dataset.map((v) => v.vonGop);
          const laiChuaPhanPhoi = dataChart.bal2.dataset.map((v) => v.laiChuaPhanPhoi);
          const vcshKhac = dataChart.bal2.dataset.map((v) => v.vcshKhac);
          const noChiemDung = dataChart.bal2.dataset.map((v) => v.noChiemDung);
          const noVay = dataChart.bal2.dataset.map((v) => v.noVay);
          const getPercents = (array) =>
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
              data: getPercents(vonGop),
              type: 'line',
              label: 'Vốn góp của Chủ sở hữu',
              area: true,
              stack: 'total',
              yAxisId: 'rightAxis',
            },
            {
              data: getPercents(laiChuaPhanPhoi),
              type: 'line',
              label: 'LNST chưa phân phối',
              area: true,
              stack: 'total',
              yAxisId: 'rightAxis',
            },
            {
              data: getPercents(vcshKhac),
              type: 'line',
              label: 'Vốn chủ sở hữu khác',
              area: true,
              stack: 'total',
              yAxisId: 'rightAxis',
            },
            {
              data: getPercents(noChiemDung),
              type: 'line',
              label: 'Nợ chiếm dụng',
              area: true,
              stack: 'total',
              yAxisId: 'rightAxis',
            },
            {
              data: getPercents(noVay),
              type: 'line',
              label: 'Nợ vay',
              area: true,
              stack: 'total',
              yAxisId: 'rightAxis',
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
        let newPerf = await mapDataChart(customBalPTC2);
        setDataChart((prev) => ({ ...prev, bal2: newPerf }));
        setChecked((prev) => ({ ...prev, bal2ajust: !prev.bal2ajust }));
      }
      if (typeChart === 'bal2') {
        customBalPTC2.year = checked.bal2;
        let newPerf = await mapDataChart(customBalPTC2);
        setDataChart((prev) => ({ ...prev, bal2: newPerf }));
        setChecked((prev) => ({ ...prev, bal2: !prev.bal2 }));
      }
      if (typeChart === 'bal3') {
        customBalPTC3.year = checked.bal3;
        let newPerf = await mapDataChart(customBalPTC3);
        setDataChart((prev) => ({ ...prev, bal3: newPerf }));
        setChecked((prev) => ({ ...prev, bal3: !prev.bal3 }));
      }
      if (typeChart === 'bal4') {
        customBalPTC4.year = checked.bal4;
        let newPerf = await mapDataChart(customBalPTC4);
        setDataChart((prev) => ({ ...prev, bal4: newPerf }));
        setChecked((prev) => ({ ...prev, bal4: !prev.bal4 }));
      }
      if (typeChart === 'bal6') {
        customBalPTC6.year = checked.bal6;
        let newPerf = await mapDataChart(customBalPTC6);
        setDataChart((prev) => ({ ...prev, bal6: newPerf }));
        setChecked((prev) => ({ ...prev, bal6: !prev.bal6 }));
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
      if (typeChart === 'cf3') {
        customCFPTC3.year = checked.cf3;
        let newPerf = await mapDataChart(customCFPTC3);
        setDataChart((prev) => ({ ...prev, cf3: newPerf }));
        setChecked((prev) => ({ ...prev, cf3: !prev.cf3 }));
      }
      if (typeChart === 'cf3adjust') {
        if (checked.cf3adjust) {
          customCFPTC3.series.pop();
          let newPerf = await mapDataChart(customCFPTC3);
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
          let newPerf = await mapDataChart(customCFPTC3);
          setDataChart((prev) => ({ ...prev, cf3: newPerf }));
          setChecked((prev) => ({ ...prev, cf3adjust: !prev.cf3adjust }));
        }
      }
      if (typeChart === 'cf4') {
        customCFPTC4.year = checked.cf4;
        let newPerf = await mapDataChart(customCFPTC4);
        setDataChart((prev) => ({ ...prev, cf4: newPerf }));
        setChecked((prev) => ({ ...prev, cf4: !prev.cf4 }));
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
            {tabType === 'ChungKhoan' &&
              ['Performance', 'Balance', 'Other', 'Value'].map((e, index) => (
                <Tab key={e} label={e} {...a11yProps(index)} />
              ))}
            {tabType === 'NganHang' &&
              ['Performance', 'Balance', 'Other', 'Value'].map((e, index) => (
                <Tab key={e} label={e} {...a11yProps(index)} />
              ))}
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
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.perf1?.title || ''}
                        </div>
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
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.perf2?.title || ''}
                        </div>
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
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.perf3?.title || ''}
                        </div>
                      </div>
                    </div>
                    {dataChart && dataChart.perf3 && <StackChart data={dataChart.perf3} />}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.perf4?.title || ''}
                        </div>
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
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.perf5?.title || ''}
                        </div>
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
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.perf6?.title || ''}
                        </div>
                      </div>
                    </div>
                    {dataChart && dataChart.perf6 && <StackChart data={dataChart.perf6} />}
                  </div>
                </div>
              </div>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal1?.title || ''}
                        </div>
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{ alignItems: 'center', marginRight: '16px' }}
                        >
                          <Typography>Adjust</Typography>
                          <FormControlLabel
                            checked={checked.bal1ajust}
                            onChange={() => handleToggle('bal1ajust')}
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          />
                          <Typography>Non Adjust</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel
                            checked={checked.bal1}
                            onChange={() => handleToggle('bal1')}
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.bal1 && <StackChart data={dataChart.bal1} />}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal2?.title || ''}
                        </div>
                        <Stack
                          direction="row"
                          spacing={1}
                          sx={{ alignItems: 'center', marginRight: '16px' }}
                        >
                          <Typography>Adjust</Typography>
                          <FormControlLabel
                            checked={checked.bal2ajust}
                            onChange={() => handleToggle('bal2ajust')}
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          />
                          <Typography>No Adjust</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel
                            checked={checked.bal2}
                            onChange={() => handleToggle('bal2')}
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.bal2 && <StackChart data={dataChart.bal2} />}
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal3?.title || ''}
                        </div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel
                            checked={checked.bal3}
                            onChange={() => handleToggle('bal3')}
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.bal3 && <StackChart data={dataChart.bal3} />}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal4?.title || ''}
                        </div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel
                            checked={checked.bal4}
                            onChange={() => handleToggle('bal4')}
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.bal4 && <StackChart data={dataChart.bal4} />}
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal5?.title || ''}
                        </div>
                      </div>
                    </div>
                    {dataChart && dataChart.bal5 && <StackChart data={dataChart.bal5} />}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal6?.title || ''}
                        </div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel
                            checked={checked.bal6}
                            onChange={() => handleToggle('bal6')}
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                          />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.bal6 && <StackChart data={dataChart.bal6} />}
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
                    <div className="flex flex-1 font-bold text-xl">
                      {dataChart?.perf7?.title || ''}
                    </div>
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
                    <div className="flex flex-1 font-bold text-xl">
                      {dataChart?.perf8?.title || ''}
                    </div>
                  </div>
                </div>
                {/* <StackChart data={bal2} /> */}
                {dataChart && dataChart.perf8 && <StackChart data={dataChart.perf8} />}
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <div className="flex flex-col gap-8">
              <div className="flex gap-8">
                <div className="lg:w-1/2 md:w-full">
                  <div className="mb-4">
                    <div className="flex">
                      <div className="flex flex-1 font-bold text-xl">
                        {dataChart?.cf1?.title || ''}
                      </div>
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
                      <div className="flex flex-1 font-bold text-xl">
                        {dataChart?.perf8?.title || ''}
                      </div>
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
                      <div className="flex flex-1 font-bold text-xl">
                        {dataChart?.cf3?.title || ''}
                      </div>
                      <Stack
                        direction="row"
                        spacing={1}
                        sx={{ alignItems: 'center', marginRight: '16px' }}
                      >
                        <Typography>Off</Typography>
                        <FormControlLabel
                          checked={checked.cf3adjust}
                          onChange={() => handleToggle('cf3adjust')}
                          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                        />
                        <Typography>On</Typography>
                      </Stack>
                      <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                        <Typography>Năm</Typography>
                        <FormControlLabel
                          checked={checked.cf3}
                          onChange={() => handleToggle('cf3')}
                          control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                        />
                        <Typography>Quý</Typography>
                      </Stack>
                    </div>
                  </div>
                  {dataChart && dataChart.cf3 && <StackChart data={dataChart.cf3} />}
                </div>
                <div className="lg:w-1/2 md:w-full">
                  <div className="mb-4">
                    <div className="flex">
                      <div className="flex flex-1 font-bold text-xl">
                        {dataChart?.perf8?.title || ''}
                      </div>
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
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.perf1?.title || ''}
                        </div>
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
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.perf2?.title || ''}
                        </div>
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
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.perf3?.title || ''}
                        </div>
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
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.perf4?.title || ''}
                        </div>
                      </div>
                    </div>
                    {dataChart && dataChart.perf4 && <StackChart data={dataChart.perf4} />}
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.perf5?.title || ''}
                        </div>
                      </div>
                    </div>
                    {dataChart && dataChart.perf5 && <StackChart data={dataChart.perf5} />}
                  </div>
                </div>
              </div>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal1?.title || ''}
                        </div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.bal1 && <StackChart data={dataChart.bal1} />}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal2?.title || ''}
                        </div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.bal2 && <StackChart data={dataChart.bal2} />}
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal3?.title || ''}
                        </div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.bal3 && <StackChart data={dataChart.bal3} />}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal4?.title || ''}
                        </div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.bal4 && <StackChart data={dataChart.bal4} />}
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal5?.title || ''}
                        </div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.bal5 && <StackChart data={dataChart.bal5} />}
                  </div>
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
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.perf1?.title || ''}
                        </div>
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
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.perf2?.title || ''}
                        </div>
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
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.perf3?.title || ''}
                        </div>
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
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.perf4?.title || ''}
                        </div>
                      </div>
                    </div>
                    {dataChart && dataChart.perf4 && <StackChart data={dataChart.perf4} />}
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.perf5?.title || ''}
                        </div>
                      </div>
                    </div>
                    {dataChart && dataChart.perf5 && <StackChart data={dataChart.perf5} />}
                  </div>
                </div>
              </div>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal1?.title || ''}
                        </div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.bal1 && <StackChart data={dataChart.bal1} />}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal2?.title || ''}
                        </div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.bal2 && <StackChart data={dataChart.bal2} />}
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal3?.title || ''}
                        </div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.bal3 && <StackChart data={dataChart.bal3} />}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal4?.title || ''}
                        </div>
                      </div>
                    </div>
                    {dataChart && dataChart.bal4 && <StackChart data={dataChart.bal4} />}
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal5?.title || ''}
                        </div>
                      </div>
                    </div>
                    {dataChart && dataChart.bal5 && <StackChart data={dataChart.bal5} />}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal6?.title || ''}
                        </div>
                      </div>
                    </div>
                    {dataChart && dataChart.bal6 && <StackChart data={dataChart.bal6} />}
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal7?.title || ''}
                        </div>
                      </div>
                    </div>
                    {dataChart && dataChart.bal7 && <StackChart data={dataChart.bal7} />}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal8?.title || ''}
                        </div>
                      </div>
                    </div>
                    {dataChart && dataChart.bal8 && <StackChart data={dataChart.bal8} />}
                  </div>
                </div>
              </div>
            )}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            {codeValue && (
              <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal9?.title || ''}
                        </div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.bal9 && <StackChart data={dataChart.bal9} />}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal10?.title || ''}
                        </div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.bal10 && <StackChart data={dataChart.bal10} />}
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal11?.title || ''}
                        </div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.bal11 && <StackChart data={dataChart.bal11} />}
                  </div>
                  <div className="lg:w-1/2 md:w-full">
                    <div className="mb-4">
                      <div className="flex">
                        <div className="flex flex-1 font-bold text-xl">
                          {dataChart?.bal12?.title || ''}
                        </div>
                        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                          <Typography>Năm</Typography>
                          <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
                          <Typography>Quý</Typography>
                        </Stack>
                      </div>
                    </div>
                    {dataChart && dataChart.bal12 && <StackChart data={dataChart.bal12} />}
                  </div>
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
