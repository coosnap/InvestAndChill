import Box from '@mui/material/Box';
import { ChartsLegend, ChartsReferenceLine, ChartsYAxis, LinePlot } from '@mui/x-charts';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { ItemTooltip } from './tooltip';

export default function CompareBankChart(data) {
  let start = 2;
  let arr = [];
  let count = 0;

  if (data?.type === 'NganHang') {
    data?.data?.arrayBank?.map((e) => {
      if (e.includes('$')) count++;
    });
    if (count > 0) {
      for (let i = 0; i <= count; i++) {
        if (i === 0) arr.push(data.data.arrayBank[2]);
        else arr.push(data.data.arrayBank[(start += 6)]);
      }
    }
  }
  if (data?.type === 'ChungKhoan') {
    data?.data?.arrayChungKhoan?.map((e) => {
      if (e.includes('$')) count++;
    });
    if (count > 0) {
      for (let i = 0; i <= count; i++) {
        if (i === 0) arr.push(data.data.arrayChungKhoan[2]);
        else arr.push(data.data.arrayChungKhoan[(start += 6)]);
      }
    }
  }
  // useEffect(() => {
  // }, []);

  return (
    <Box sx={{ width: '100%', backgroundColor: '#FFF8DC', position: 'relative' }}>
      <ResponsiveChartContainer
        xAxis={[
          {
            scaleType: 'band',
            data: data?.type == 'ChungKhoan' ? data.data.arrayChungKhoan : data.data.arrayBank,
            tickInterval: (value) => !value.includes('$') && arr.includes(value),
            valueFormatter: (value, context) =>
              context.location === 'tick'
                ? value.substring(0, 3)
                : context.location === 'tooltip' && value.includes('$')
                ? ''
                : value,
            categoryGapRatio: 0.1,
            barGapRatio: 0,
          },
        ]}
        yAxis={[{ id: 'leftAxis' }, { id: 'rightAxis' }]}
        series={data.data.series}
        slotprops={{ legend: { hidden: true } }}
        height={450}
        sx={{
          '.MuiBarElement-series-auto-generated-id-0:nth-of-type(2)': {
            opacity: 0.9,
          },
          '.MuiBarElement-series-auto-generated-id-0:nth-of-type(3)': {
            opacity: 0.8,
          },
          '.MuiBarElement-series-auto-generated-id-0:nth-of-type(4)': {
            opacity: 0.7,
          },
          '.MuiBarElement-series-auto-generated-id-0:nth-of-type(5)': {
            opacity: 0.6,
          },
          '.MuiLineElement-series-auto-generated-id-2': {
            display: data.data.mark ? 'none' : 'block',
          },
        }}
      >
        <BarPlot />
        <LinePlot />
        {/* <ChartsTooltip /> */}
        <ItemTooltip />
        {/* {data.data.mark && <MarkPlot />} */}
        <ChartsXAxis disableTicks />
        {data.data.yAxis.left.type == 'bil' && (
          <ChartsYAxis
            axisId="leftAxis"
            position="left"
            label="tỷ đồng"
            disableLine
            disableTicks
            sx={{
              '.MuiChartsAxis-label': {
                transform: 'translate(-3px, -194px) scale(-1, 1)',
                '& text': {
                  transform: 'translate(0px, 1px) rotate3d(0, 28, 0, 197.5deg)',
                },
              },
            }}
          />
        )}
        {data.data.yAxis.left.type == 'per' && (
          <ChartsYAxis
            disableLine
            disableTicks
            axisId="leftAxis"
            position="left"
            label="%"
            sx={{
              '.MuiChartsAxis-label': {
                transform: 'translate(12px, -190px) scale(-1, 1)',
                '& text': {
                  transform: 'translate(0px, 1px) rotate3d(0, 28, 0, 197.5deg)',
                },
              },
            }}
          />
        )}
        <ChartsYAxis
          disableLine
          disableTicks
          axisId="rightAxis"
          position="right"
          label="%"
          sx={{
            '.MuiChartsAxis-label': {
              transform: 'translate(-12px, -190px) scale(-1, 1)',
              '& text': {
                transform: 'translate(0px, 1px) rotate3d(0, 28, 0, 197.5deg)',
              },
            },
          }}
        />
        {data.data.series.length > 1 && (
          <ChartsLegend
            padding={{ bottom: 10, top: 10, left: 35, right: 35 }}
            labelStyle={{ fontSize: 12 }}
            slotProps={{
              legend: {
                itemMarkHeight: 10,
                itemMarkWidth: 10,
                markGap: 2,
                itemGap: 8,
              },
            }}
          />
        )}
        <ChartsReferenceLine y={0} lineStyle={{ strokeWidth: '1px !important' }} />
      </ResponsiveChartContainer>
    </Box>
  );
}
