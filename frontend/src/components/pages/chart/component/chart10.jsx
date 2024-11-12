import { Bar, BarChart, Cell, LabelList, Legend, Tooltip, XAxis } from 'recharts';
import { CustomizedAxisTick, valueAccessor } from './common';

const data = [
  {
    name: 'Q2.21',
    ROA: 4,
    ROE: 10,
  },
  {
    name: 'Q3.21',
    ROA: 1,
    ROE: 12,
  },
  {
    name: 'Q4.21',
    ROA: 2,
    ROE: 11,
  },
  {
    name: 'Q1.22',
    ROA: 1,
    ROE: 11,
  },
  {
    name: 'Q2.22',
    ROA: 1,
    ROE: 14,
  },
  {
    name: 'Q3.22',
    ROA: 23,
    ROE: 15,
  },
  {
    name: 'Q4.22',
    ROA: 71,
    ROE: 19,
  },
  {
    name: 'Q1.23',
    ROA: 71,
    ROE: 17,
  },
  {
    name: 'Q2.23',
    ROA: 71,
    ROE: 15,
  },
  {
    name: 'Q3.23',
    ROA: 67,
    ROE: 17,
  },
  {
    name: 'Q4.23',
    ROA: 60,
    ROE: 19,
  },
  {
    name: 'Q1.24',
    ROA: 67,
    ROE: 21,
  },
  {
    name: 'Q2.24',
    ROA: 59,
    ROE: 25,
  },
];

export default function Chart10() {
  return (
    <BarChart
      width={700}
      height={400}
      data={data}
      barSize={20}
      className="bg-white"
      style={{ width: '100% !important' }}
      margin={{
        top: 20,
        right: 30,
        left: 0,
        bottom: 5,
      }}
    >
      <XAxis interval={0} dataKey="name" tick={<CustomizedAxisTick />} />
      <Tooltip />
      <Legend
        verticalAlign="top"
        iconSize={10}
        iconType="square"
        payload={[
          { value: 'Vay DH/VCSH', type: 'square', id: 'ROE', color: 'black' },
          { value: 'Vay NH/VCSH', type: 'square', id: 'ROA', color: '#C4BD97' },
          { value: 'Tổng nợ vay/VCSH', type: '', id: '', color: '#0D6DBB' },
        ]}
      />
      <Bar
        name="Vay DH/VCSH"
        dataKey="ROE"
        stackId="a"
        fill="black"
        label={{ position: 'center', fill: 'white', fontSize: 10, fontWeight: 700 }}
      ></Bar>
      <Bar
        name="Vay NH/VCSH"
        dataKey="ROA"
        stackId="a"
        fill="#C4BD97"
        label={{ position: 'top', fill: '#0D6DBB', fontSize: 10, fontWeight: 700 }}
      >
        <LabelList
          fill="black"
          valueAccessor={valueAccessor('ROA')}
          fontSize={10}
          fontWeight={700}
        />
      </Bar>
    </BarChart>
  );
}
