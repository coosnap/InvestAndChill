import Box from '@mui/material/Box';
import {
  ChartsLegend,
  ChartsReferenceLine,
  ChartsTooltip,
  ChartsYAxis,
  ScatterPlot,
} from '@mui/x-charts';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { AreaPlot, LineHighlightPlot, LinePlot } from '@mui/x-charts/LineChart';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';

export default function NoStackChart(data) {
  function extend(value, type) {
    if (type === 'min') {
      console.log('value', value);
      if (Number(value) && value < 0) {
        console.log('value', value);
        if (Math.ceil(Math.abs(value)).toString().length === 1) return value - Math.pow(10, 0);
        if (Math.ceil(Math.abs(value)).toString().length === 2) return value - Math.pow(10, 1);
        if (Math.ceil(Math.abs(value)).toString().length === 3) return value - Math.pow(10, 2) / 2;
        if (Math.ceil(Math.abs(value)).toString().length === 4) return value - Math.pow(10, 3) / 3;
        if (Math.ceil(Math.abs(value)).toString().length === 5) return value - Math.pow(10, 4) / 4;
        if (Math.ceil(Math.abs(value)).toString().length === 6) return value - Math.pow(10, 5) / 5;
      } else if (Number(value) && value > 0) {
        if (Math.ceil(Math.abs(value)).toString().length === 1) return value + Math.pow(10, 0);
        if (Math.ceil(Math.abs(value)).toString().length === 2) return value + Math.pow(10, 1);
        if (Math.ceil(Math.abs(value)).toString().length === 3) return value + Math.pow(10, 2) / 2;
        if (Math.ceil(Math.abs(value)).toString().length === 4) return value + Math.pow(10, 3) / 3;
        if (Math.ceil(Math.abs(value)).toString().length === 5) return value + Math.pow(10, 4) / 4;
        if (Math.ceil(Math.abs(value)).toString().length === 6) return value + Math.pow(10, 5) / 5;
      } else {
        return value;
      }
    } else {
      if (Math.ceil(Math.abs(value)).toString().length === 1) return value + Math.pow(10, 0);
      if (Math.ceil(Math.abs(value)).toString().length === 2) return value + Math.pow(10, 1);
      if (Math.ceil(Math.abs(value)).toString().length === 3) return value + Math.pow(10, 2) / 2;
      if (Math.ceil(Math.abs(value)).toString().length === 4) return value + Math.pow(10, 3) / 3;
      if (Math.ceil(Math.abs(value)).toString().length === 5) return value + Math.pow(10, 4) / 4;
    }
  }

  return (
    <Box sx={{ width: '100%', backgroundColor: '#FCE6A9' }}>
      <ResponsiveChartContainer
        // className="water-mark-chart"
        dataset={data.data.dataset}
        series={data.data.series}
        xAxis={[
          {
            ...data.data.xAxis,
            tickPlacement: 'middle',
          },
        ]}
        yAxis={[
          data.data.yAxis.left?.piecewise
            ? {
                id: 'leftAxis',
                domainLimit:
                  data.data.yAxis.left.type === 'bil'
                    ? (min, max) => ({
                        min: extend(min, 'min'),
                        max: extend(max, 'max'),
                      })
                    : {
                        id: 'rightAxis',
                        domainLimit: 'nice',
                      },
              }
            : {
                id: 'leftAxis',
                domainLimit: 'nice',
              },
          data.data.yAxis.right?.piecewise
            ? {
                id: 'rightAxis',
                domainLimit:
                  data.data.yAxis.right.type === 'bil'
                    ? (min, max) => ({
                        min: extend(min, 'min'),
                        max: extend(max, 'max'),
                      })
                    : {
                        id: 'rightAxis',
                        domainLimit: 'nice',
                      },
              }
            : {
                id: 'rightAxis',
                domainLimit: 'nice',
              },
        ]}
        height={450}
        margin={{
          left: data.data.yAxis.left.type == 'per' ? 50 : 70,
          right: data.data.yAxis.right.type == 'bil' ? 70 : 50,
          top: 80,
          bottom: 35,
        }}
        sx={{
          '.MuiLineElement-series-auto-generated-id-1': {
            strokeDasharray: data.data.yAxis.right.dash ? '5 5' : null,
          },
        }}
      >
        <ScatterPlot />
        <BarPlot />
        <LinePlot />
        <LineHighlightPlot />
        <AreaPlot />
        <ChartsXAxis />
        {data.data.yAxis.left.showLineReference && (
          <ChartsReferenceLine
            axisId={'leftAxis'}
            y={0}
            lineStyle={{ strokeWidth: '1px !important' }}
          />
        )}
        {data.data.yAxis.right.showLineReference && (
          <ChartsReferenceLine axisId={'rightAxis'} y={0} />
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
                transform: 'translate(-9px, -167px)',
                writingMode: 'vertical-rl',
              },
            }}
          />
        )}
        {data.data.yAxis.left.type == 'bil' && (
          <ChartsYAxis
            axisId="leftAxis"
            position="left"
            label="tỷ đồng"
            disableLine
            disableTicks
            sx={{
              '.MuiChartsAxis-label': {
                transform: 'translate(-3px, -186px) scale(-1, 1)',
                '& text': {
                  transform: 'translate(0px, 1px) rotate3d(0, 28, 0, 197.5deg)',
                },
              },
            }}
          />
        )}
        {data.data.yAxis.left.type == 'time' && (
          <ChartsYAxis
            axisId="leftAxis"
            position="left"
            label="lần"
            disableLine
            disableTicks
            sx={{
              '.MuiChartsAxis-label': {
                transform: 'translate(-24px, -139px)',
              },
            }}
          />
        )}
        {data.data.yAxis.right.type == 'bil' && (
          <ChartsYAxis
            axisId="rightAxis"
            position="right"
            label="tỷ đồng"
            disableLine
            disableTicks
            sx={{
              '.MuiChartsAxis-label': {
                transform: 'translate(5px, -186px) scale(-1, 1)',
                '& text': {
                  transform: 'translate(0px, 1px) rotate3d(0, 28, 0, 197.5deg)',
                },
              },
            }}
          />
        )}
        {data.data.yAxis.right.type == 'per' && (
          <ChartsYAxis
            disableLine
            disableTicks
            axisId="rightAxis"
            position="right"
            label="%"
            sx={{
              '.MuiChartsAxis-label': {
                transform: 'translate(8px, -167px)',
                writingMode: 'vertical-rl',
              },
            }}
          />
        )}
        {data.data.yAxis.right.type == 'time' && (
          <ChartsYAxis
            axisId="rightAxis"
            position="right"
            label="lần"
            disableLine
            disableTicks
            sx={{
              '.MuiChartsAxis-label': {
                transform: 'translate(5px, -164px)',
              },
            }}
          />
        )}
        <ChartsLegend
          padding={{ bottom: 0, top: 10, left: 35, right: 35 }}
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
        <ChartsTooltip />
      </ResponsiveChartContainer>
    </Box>
  );
}
