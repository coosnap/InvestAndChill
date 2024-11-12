import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import { CustomizedAxisTick, CustomizedYAxisTick } from './common';
import './style.scss';

export default function LineComponent() {
  const data = [
    {
      name: 'Q1.2022',
    },
    {
      name: 'Q2.2022',
      LV: 4.0,
    },
    {
      name: 'Q3.2022',
      LV: 4.6,
    },
    {
      name: 'Q4.2022',
      ROE: 3.0,
      ROIC: 3.8,
      LV: 7.0,
    },
    {
      name: 'Q1.2023',
      ROE: 2.2,
      ROIC: 3.4,
      LV: 5.5,
    },
    {
      name: 'Q2.2023',
      ROE: 1.4,
      ROIC: 3.1,
      LV: 5.6,
    },
    {
      name: 'Q3.2023',
      ROE: 1.8,
      ROIC: 3.6,
      LV: 5.8,
    },
    {
      name: 'Q4.2023',
      ROE: 5.2,
      ROIC: 7.0,
      LV: 6.3,
    },
    {
      name: 'Q1.2024',
      ROE: 6.7,
      ROIC: 8.2,
      LV: 4.9,
    },
    {
      name: 'Q2.2024',
      ROE: 8.1,
      ROIC: 9.5,
      LV: 5.7,
    },
  ];

  const renderQuarterTick = (tickProps) => {
    const { x, y, payload } = tickProps;
    const { value, offset } = payload;
    const isLast = value.includes('4.');
    const lastItem = data[data.length - 1];
    const yr = ['2022', '2023', '2024'];

    if (yr.includes(value.split('.')[1]) && value.includes('2.')) {
      if (value === lastItem.name) {
        const pathX = Math.floor(isLast ? x + offset : x - offset) + 60.5;
        return (
          <>
            <text
              x={x + (value.split('.')[1].includes('2024') ? -3 : 60)}
              y={y - 4}
              textAnchor="middle"
              fontSize={10}
              fontWeight={700}
            >
              {value.split('.')[1]}
            </text>
            <path d={`M${pathX},${y - 3}v${-35}`} stroke="#666666" strokeWidth={1.2} />
          </>
        );
      } else {
        return (
          <text
            x={x + (value.split('.')[1].includes('2024') ? -3 : 60)}
            y={y - 4}
            textAnchor="middle"
            fontSize={10}
            fontWeight={700}
          >
            {value.split('.')[1]}
          </text>
        );
      }
    }
    if (yr[0].includes(value.split('.')[1]) && value.includes('1.')) {
      const pathX = Math.floor(isLast ? x + offset : x - offset);
      return <path d={`M${pathX},${y - 3}v${-35}`} stroke="#666666" strokeWidth={1.2} />;
    }
    if (yr.includes(value.split('.')[1]) && value.includes('4.')) {
      const pathX = Math.floor(isLast ? x + offset : x - offset) + (yr[0] ? 57 : 82);
      return <path d={`M${pathX},${y - 3}v${-35}`} stroke="#666666" strokeWidth={1.2} />;
    }
    return null;
  };

  return (
    <LineChart
      width={700}
      height={400}
      data={data}
      className="bg-second pb-4"
      style={{ width: '100% !important' }}
      margin={{
        top: 20,
        right: 30,
        left: 0,
        bottom: 5,
      }}
    >
      <XAxis
        interval={0}
        dataKey="name"
        padding={{ left: 30, right: 30 }}
        tick={<CustomizedAxisTick />}
      />
      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        interval={0}
        tick={renderQuarterTick}
        height={2}
        scale="band"
        xAxisId="quarter"
      />
      <YAxis tick={<CustomizedYAxisTick />} />
      <Tooltip />
      <Legend
        verticalAlign="top"
        height={50}
        fontWeight={700}
        formatter={(value, entry, index) => (
          <span className="text-black font-bold pr-4">{value}</span>
        )}
      />
      <Line fillOpacity={1} dot={false} dataKey="ROE" stroke="#B3B1A9" />
      <Line fillOpacity={1} dot={false} dataKey="ROIC" stroke="#FFC71E" />
      <Line name="Lãi vay" fillOpacity={1} dot={false} dataKey="LV" stroke="#68A2D4" />
    </LineChart>
  );
}
