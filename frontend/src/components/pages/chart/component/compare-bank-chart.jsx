import Box from '@mui/material/Box';
import { ChartsReferenceLine, ChartsTooltip, ChartsYAxis, LinePlot, MarkPlot } from '@mui/x-charts';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';

export default function CompareBankChart(data) {
  console.log('data', data);
  return (
    <Box sx={{ width: '100%', backgroundColor: '#FFF8DC', position: 'relative' }}>
      <ResponsiveChartContainer
        xAxis={[
          {
            scaleType: 'band',
            data: data.data.arrayBank,
            tickInterval: (value) => !value.includes('$') && value.includes('3'),
            valueFormatter: (value, context) =>
              context.location === 'tooltip' && value.includes('$') ? '' : value.substring(0, 3),
            categoryGapRatio: 0.1,
            barGapRatio: 0,
          },
        ]}
        yAxis={[{ id: 'leftAxis' }, { id: 'rightAxis' }]}
        series={data.data.series}
        slotprops={{ legend: { hidden: true } }}
        height={450}
        sx={{
          '.MuiLineElement-series-auto-generated-id-2': {
            display: 'none',
          },
        }}
      >
        <BarPlot />
        <LinePlot />
        <ChartsTooltip />
        {data.data.mark && <MarkPlot />}
        <ChartsXAxis disableTicks />
        <ChartsYAxis
          disableLine
          disableTicks
          axisId="leftAxis"
          position="left"
          label="%"
          sx={{
            '.MuiChartsAxis-label': {
              transform: 'translate(-9px, -174px)',
              writingMode: 'vertical-rl',
            },
          }}
        />
        <ChartsYAxis
          disableLine
          disableTicks
          axisId="rightAxis"
          position="right"
          label="%"
          sx={{
            '.MuiChartsAxis-label': {
              transform: 'translate(14px, -174px)',
              writingMode: 'vertical-rl',
            },
          }}
        />
        <ChartsReferenceLine y={0} lineStyle={{ strokeWidth: '1px !important' }} />
      </ResponsiveChartContainer>
    </Box>
  );
}
