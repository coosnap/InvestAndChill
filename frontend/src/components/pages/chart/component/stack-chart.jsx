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
  function extend(value, max) {
    if (max) {
      if (Math.abs(value) > max) {
        return value - Math.abs(value) / 10;
      } else if (value < 0 || value > 0) {
        return value - (value + max) / 10;
      } else if (value === 0) {
        if ((value, max)) return value - (value + max) / 10;
      }
    } else {
      return value;
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
                        min: extend(min, max),
                        max: extend(max),
                      })
                    : (min, max) => ({
                        min: extend(min, max),
                        max: extend(max),
                      }),
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
                        min: extend(min, max),
                        max: extend(max),
                      })
                    : (min, max) => ({
                        min: extend(min, max),
                        max: extend(max),
                      }),
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
          top: 130,
          bottom: 35,
        }}
        sx={{
          '.MuiLineElement-series-auto-generated-id-0': {
            strokeDasharray:
              data.data.yAxis.right.dash0 || data.data.yAxis.left.dash0 ? '5 5' : null,
          },
          '.MuiLineElement-series-auto-generated-id-1': {
            strokeDasharray:
              data.data.yAxis.right.dash1 || data.data.yAxis.left.dash1 ? '5 5' : null,
          },
          '.MuiLineElement-series-auto-generated-id-2': {
            strokeDasharray:
              data.data.yAxis.right.dash2 || data.data.yAxis.left.dash2 ? '5 5' : null,
          },
          '.MuiLineElement-series-auto-generated-id-3': {
            strokeDasharray:
              data.data.yAxis.right.dash3 || data.data.yAxis.left.dash3 ? '5 5' : null,
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
          <ChartsReferenceLine
            axisId={'rightAxis'}
            y={0}
            lineStyle={{ strokeWidth: '1px !important' }}
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
                transform: 'translate(-24px, -164px)',
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
