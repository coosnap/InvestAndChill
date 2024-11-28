import Box from '@mui/material/Box';
import { ChartsLegend, ChartsTooltip, ChartsYAxis } from '@mui/x-charts';
import { BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';

export default function NoStackChart(data) {
  console.log(data.data);
  return (
    <Box sx={{ width: '100%', backgroundColor: '#FCE6A9' }}>
      <ResponsiveChartContainer
        // className="water-mark-chart"
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
        <BarPlot />
        <LinePlot />
        <ChartsXAxis />
        <ChartsYAxis
          disableLine
          disableTicks
          axisId="leftAxis"
          label="%"
          sx={{
            '.MuiChartsAxis-label': {
              transform: 'translate(13px, -160px)',
              writingMode: 'vertical-rl',
            },
          }}
        />
        <ChartsYAxis
          axisId="rightAxis"
          position="right"
          label="Billians"
          disableLine
          disableTicks
          sx={{ '.MuiChartsAxis-label': { transform: 'translate(20px, -139px)' } }}
        />
        <ChartsLegend />
        <ChartsTooltip />
      </ResponsiveChartContainer>
    </Box>
  );
}
