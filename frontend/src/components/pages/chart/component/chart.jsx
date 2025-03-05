import Box from '@mui/material/Box';
import { ChartsReferenceLine, ChartsTooltip, ChartsYAxis } from '@mui/x-charts';
import { BarElement, BarPlot } from '@mui/x-charts/BarChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import { AreaPlot, LineHighlightPlot, LinePlot } from '@mui/x-charts/LineChart';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { useEffect, useState } from 'react';
import { ItemTooltip } from './tooltip';

export default function NoStackChart(data) {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    setSeries([...data.data.series]);
  }, [data.data.series]);

  function extend(value, max) {
    if (max) {
      if (Math.abs(value) > max) {
        return value - Math.abs(value) / 10;
      } else if (value < 0) {
        return value - (Math.abs(value) + max) / 10;
      } else if (value > 0) {
        return value - (Math.abs(value) + max) / 10;
      } else if (value === 0) {
        if ((value, max)) return value - (Math.abs(value) + max) / 10;
      }
    } else {
      return value;
    }
  }

  const BarCustomElement = (props) => {
    const { data, ...other } = props;
    let check = props.data.data.series.some((e) => e.dataKey === 'netFinancialAdjustTrailing');
    const isBelowBar = check
      ? data.data.dataset[other.ownerState.dataIndex].netFinancialAdjustTrailing < 0
      : data.data.dataset[other.ownerState.dataIndex].netFinanceialTrailing < 0;
    const color = isBelowBar ? '#981F36' : '#6EA2DF';

    return (
      props.className.includes('id-1') && (
        <BarElement
          {...other}
          style={{
            ...props.style,
            fill: color,
          }}
        />
      )
    );
  };

  const BarTranformElement = (props) => {
    const { style, data, ownerState, ...other } = props;

    return (
      (props.className.includes(`id-${data.data.yAxis.left.transform}`) ||
        props.className.includes(`id-${data.data.yAxis.right.opacity}`)) && (
        <rect
          fill={ownerState.color}
          height={props.style.height.animation.to}
          width={props.style.width.animation.to}
          x={
            data.data.yAxis.left.transform
              ? (props.style.x.animation.to || 0) + 4
              : props.style.x.animation.to || 0
          }
          y={props.style.y.animation.to || 0}
          opacity={data.data.yAxis.right.opacity ? 0.7 : 1}
        />
      )
    );
  };

  return (
    <Box sx={{ width: '100%', backgroundColor: '#FFF8DC', position: 'relative' }}>
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
          top: 80,
          bottom: 35,
        }}
        sx={{
          '.MuiBarElement-series-auto-generated-id-0': {
            display: data.data.yAxis.right.opacity === 0 ? 'none' : 'block',
          },
          '.MuiLineElement-series-auto-generated-id-0': {
            strokeDasharray:
              data.data.yAxis.right.dash0 || data.data.yAxis.left.dash0 ? '5 5' : null,
            display:
              data.data.yAxis.right.marker || data.data.yAxis.left.marker === 0 ? 'none' : 'block',
          },
          '.MuiMarkElement-series-auto-generated-id-0': {
            display:
              data.data.yAxis.right.marker || data.data.yAxis.left.marker === 0 ? 'block' : 'none',
          },

          '.MuiBarElement-series-auto-generated-id-1': {
            display: data.data.yAxis.right.opacity === 1 ? 'none' : 'block',
          },
          '.MuiLineElement-series-auto-generated-id-1': {
            strokeDasharray:
              data.data.yAxis.right.dash1 || data.data.yAxis.left.dash1 ? '5 5' : null,
            display:
              data.data.yAxis.right.marker || data.data.yAxis.left.marker === 1 ? 'none' : 'block',
          },
          '.MuiMarkElement-series-auto-generated-id-1': {
            display:
              data.data.yAxis.right.marker || data.data.yAxis.left.marker === 1 ? 'block' : 'none',
          },

          '.MuiLineElement-series-auto-generated-id-2': {
            strokeDasharray:
              data.data.yAxis.right.dash2 || data.data.yAxis.left.dash2 ? '5 5' : null,
            display:
              data.data.yAxis.right.marker || data.data.yAxis.left.marker === 2 ? 'none' : 'block',
          },
          '.MuiMarkElement-series-auto-generated-id-2': {
            display:
              data.data.yAxis.right.marker || data.data.yAxis.left.marker === 2 ? 'block' : 'none',
          },
          '.MuiBarElement-series-auto-generated-id-2': {
            display:
              data.data.yAxis.left.transform === 2 || data.data.yAxis.right.opacity === 2
                ? 'none'
                : 'block',
          },

          '.MuiLineElement-series-auto-generated-id-3': {
            strokeDasharray:
              data.data.yAxis.right.dash3 || data.data.yAxis.left.dash3 ? '5 5' : null,
            display:
              data.data.yAxis.right.marker || data.data.yAxis.left.marker === 3 ? 'none' : 'block',
          },
          '.MuiMarkElement-series-auto-generated-id-3': {
            display:
              data.data.yAxis.right.marker || data.data.yAxis.left.marker === 3 ? 'block' : 'none',
          },

          '.MuiLineElement-series-auto-generated-id-4': {
            strokeDasharray:
              data.data.yAxis.right.dash4 || data.data.yAxis.left.dash4 ? '5 5' : null,
            display:
              data.data.yAxis.right.marker || data.data.yAxis.left.marker === 4 ? 'none' : 'block',
          },
          '.MuiMarkElement-series-auto-generated-id-4': {
            display:
              data.data.yAxis.right.marker || data.data.yAxis.left.marker === 4 ? 'block' : 'none',
          },

          '.MuiLineElement-series-auto-generated-id-5': {
            strokeDasharray:
              data.data.yAxis.right.dash5 || data.data.yAxis.left.dash5 ? '5 5' : null,
            display:
              data.data.yAxis.right.marker || data.data.yAxis.left.marker === 5 ? 'none' : 'block',
          },
          '.MuiMarkElement-series-auto-generated-id-5': {
            display:
              data.data.yAxis.right.marker || data.data.yAxis.left.marker === 5 ? 'block' : 'none',
          },
        }}
      >
        <BarPlot />
        {data.data.series.map(
          (e, index) =>
            (e.transform == '50' || e.opacity == '50') && (
              <BarPlot
                key={index}
                slots={{ bar: BarTranformElement }}
                slotProps={{
                  bar: {
                    data,
                  },
                }}
              />
            )
        )}
        {series.map(
          (e, index) =>
            e.changeColor && (
              <BarPlot
                key={index}
                slots={{ bar: BarCustomElement }}
                slotProps={{
                  bar: {
                    data,
                  },
                }}
              />
            )
        )}
        <LinePlot />
        <LineHighlightPlot />
        <AreaPlot />
        <ChartsXAxis />
        {/* {data.data.yAxis.left.marker && <MarkPlot />} */}

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
                transform: 'translate(13px, -186px) scale(-1, 1)',
                '& text': {
                  transform: 'translate(0px, 1px) rotate3d(0, 28, 0, 197.5deg)',
                },
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
                transform: 'translate(-9px, -186px) scale(-1, 1)',
                '& text': {
                  transform: 'translate(0px, 1px) rotate3d(0, 28, 0, 197.5deg)',
                },
              },
            }}
          />
        )}
        {/* <ChartsLegend
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
        /> */}
        {/* <ChartsTooltip /> */}
        <ItemTooltip />
      </ResponsiveChartContainer>
      <div className="absolute top-0 w-full flex flex-wrap justify-center items-center mt-2">
        {data.data.yAxis.left.legendNum ? (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              {data.data.series.map(
                (e, index) =>
                  index <= data.data.yAxis.left.legendNum && (
                    <div key={index} className="flex items-center">
                      {index === data.data.yAxis.left.divide && (
                        <div className="w-0.5 h-4 mr-2 bg-white"></div>
                      )}
                      <div className="w-2 h-2 mr-1" style={{ backgroundColor: e.color }}></div>
                      <span className="text-xs whitespace-nowrap">{e.label}</span>
                    </div>
                  )
              )}
            </div>
            <div className="flex items-center gap-2">
              {data.data.series.map(
                (e, index) =>
                  index > data.data.yAxis.left.legendNum && (
                    <div key={index} className="flex items-center">
                      {index === data.data.yAxis.left.divide && (
                        <div className="w-0.5 h-4 mr-2 bg-white"></div>
                      )}
                      <div className="w-2 h-2 mr-1" style={{ backgroundColor: e.color }}></div>
                      <span className="text-xs whitespace-nowrap">{e.label}</span>
                    </div>
                  )
              )}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {data.data.series.map((e, index) => (
              <div key={index} className="flex items-center">
                {index === data.data.yAxis.left.divide && (
                  <div className="w-0.5 h-4 mr-2 bg-white"></div>
                )}
                <div className="w-2 h-2 mr-1" style={{ backgroundColor: e.color }}></div>
                <span className="text-xs whitespace-nowrap">{e.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Box>
  );
}
