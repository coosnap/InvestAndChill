import Box from '@mui/material/Box';
import { ChartsReferenceLine, ChartsTooltip, ChartsYAxis } from '@mui/x-charts';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';

export default function CompareChart(data) {
  return (
    <Box sx={{ width: '100%', backgroundColor: '#FFF8DC', position: 'relative' }}>
      <ResponsiveChartContainer
        xAxis={[
          {
            scaleType: 'band',
            dataKey: 'code',
            categoryGapRatio: 0.1,
            barGapRatio: 0,
          },
        ]}
        dataset={data.data}
        series={data.series.series}
        slotprops={{ legend: { hidden: true } }}
        height={430}
      >
        <BarPlot />
        <ChartsTooltip />
        <ChartsXAxis />
        {data.series.yAxis.left.type === 'per' && (
          <ChartsYAxis
            disableLine
            disableTicks
            position="left"
            label="%"
            sx={{
              '.MuiChartsAxis-label': {
                transform: 'translate(-9px, -165px)',
                writingMode: 'vertical-rl',
              },
            }}
          />
        )}
        {data.series.yAxis.left.type == 'bil' && (
          <ChartsYAxis
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
        <ChartsReferenceLine y={0} lineStyle={{ strokeWidth: '1px !important' }} />
      </ResponsiveChartContainer>
    </Box>
  );
}
