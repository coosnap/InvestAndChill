import Box from '@mui/material/Box';
import { ChartsLegend, ChartsTooltip, ChartsYAxis, ScatterPlot } from '@mui/x-charts';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { AreaPlot, LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';

export default function NoStackChart(data) {
  function extend(value, step) {
    if (value > 0) {
      return step * Math.ceil(value / step);
    }
    return step * Math.floor(value / step);
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
                  data.data.yAxis.left.type == 'bil'
                    ? (min, max) => ({
                        min: extend(min, 10),
                        max: extend(max, 10),
                      })
                    : 'strict',
              }
            : {
                id: 'leftAxis',
                domainLimit:
                  data.data.yAxis.left.type == 'bil'
                    ? (min, max) => ({
                        min: extend(min, 10),
                        max: extend(max, 10),
                      })
                    : 'nice',
              },
          data.data.yAxis.right?.piecewise
            ? {
                id: 'rightAxis',
                domainLimit:
                  data.data.yAxis.right.type == 'bil'
                    ? (min, max) => ({
                        min: extend(min, 10),
                        max: extend(max, 10),
                      })
                    : 'nice',
              }
            : {
                id: 'rightAxis',
                domainLimit:
                  data.data.yAxis.right.type == 'bil'
                    ? (min, max) => ({
                        min: extend(min, 10),
                        max: extend(max, 10),
                      })
                    : 'nice',
              },
        ]}
        height={400}
        margin={{
          left: data.data.yAxis.left.type == 'per' ? 50 : 70,
          right: data.data.yAxis.right.type == 'bil' ? 70 : 50,
          bottom: 35,
        }}
      >
        <ScatterPlot />
        <BarPlot />
        <LinePlot />
        {data.data.series.map((e, index) => (e?.showMark ? <MarkPlot /> : <div key={index}></div>))}
        <AreaPlot />
        <ChartsXAxis />
        {data.data.yAxis.left.type == 'per' && (
          <ChartsYAxis
            disableLine
            disableTicks
            axisId="leftAxis"
            position="left"
            label="%"
            sx={{
              '.MuiChartsAxis-label': {
                transform: 'translate(-9px, -158px)',
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
                transform: 'translate(-24px, -154px)',
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
            sx={{ '.MuiChartsAxis-label': { transform: 'translate(25px, -139px)' } }}
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
                transform: 'translate(8px, -159px)',
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
                transform: 'translate(5px, -154px)',
              },
            }}
          />
        )}
        <ChartsLegend padding={{ bottom: 0, top: 10 }} labelStyle={{ fontSize: 14 }} />
        <ChartsTooltip />
      </ResponsiveChartContainer>
    </Box>
  );
}
