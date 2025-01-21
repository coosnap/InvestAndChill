import Box from '@mui/material/Box';
import { ChartsTooltip, ChartsYAxis } from '@mui/x-charts';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';

export default function CompareChart(data) {
  console.log('data', data);
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
        // width={500}
        height={430}
      >
        <BarPlot />
        <ChartsTooltip />
        <ChartsYAxis />
        <ChartsXAxis />
      </ResponsiveChartContainer>
    </Box>
  );
}
