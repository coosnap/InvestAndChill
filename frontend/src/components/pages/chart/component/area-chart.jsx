import Box from '@mui/material/Box';
import { ChartsLegend, ChartsTooltip, ChartsYAxis } from '@mui/x-charts';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { AreaPlot } from '@mui/x-charts/LineChart';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';

export default function AreaChart(data) {
  console.log(data.data);
  return (
    <Box sx={{ width: '100%', backgroundColor: '#FCE6A9' }}>
      <ResponsiveChartContainer
        dataset={data.data.dataset}
        series={data.data.series}
        xAxis={[
          {
            ...data.data.xAxis,
          },
        ]}
        yAxis={[{ id: 'leftAxis' }, { id: 'rightAxis' }]}
        height={400}
        margin={{ right: 70, bottom: 70 }}
      >
        <AreaPlot />
        <ChartsXAxis disableLine disableTicks />
        <ChartsYAxis
          axisId="leftAxis"
          position="right"
          label="Billians"
          disableLine
          disableTicks
          sx={{ '.MuiChartsAxis-label': { transform: 'translateX(15px)' } }}
        />
        <ChartsLegend />
        <ChartsTooltip />
      </ResponsiveChartContainer>
    </Box>
  );
}
