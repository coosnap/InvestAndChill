import { Area, AreaChart, LabelList, Legend, ResponsiveContainer, Tooltip, XAxis } from 'recharts';
import { CustomizedAxisTick, valueAccessor } from './common';

const data = [
  {
    name: 'Q2.21',
    1: 23,
    2: 38,
    3: 15,
    4: 13,
    5: 3,
    6: 6,
    7: 1,
  },
  {
    name: 'Q3.21',
    1: 22,
    2: 39,
    3: 14,
    4: 13,
    5: 2,
    6: 8,
    7: 1,
  },
  {
    name: 'Q4.21',
    1: 19,
    2: 41,
    3: 14,
    4: 12,
    5: 3,
    6: 9,
    7: 2,
  },
  {
    name: 'Q1.22',
    1: 16,
    2: 42,
    3: 14,
    4: 11,
    5: 4,
    6: 10,
    7: 2,
  },
  {
    name: 'Q2.22',
    1: 17,
    2: 45,
    3: 15,
    4: 10,
    5: 2,
    6: 10,
    7: 1,
  },
  {
    name: 'Q3.22',
    1: 21,
    2: 44,
    3: 13,
    4: 8,
    5: 3,
    6: 10,
    7: 1,
  },
  {
    name: 'Q4.22',
    1: 27,
    2: 40,
    3: 15,
    4: 6,
    5: 2,
    6: 9,
    7: 2,
  },
  {
    name: 'Q1.23',
    1: 26,
    2: 40,
    3: 13,
    4: 6,
    5: 3,
    6: 10,
    7: 1,
  },
  {
    name: 'Q2.23',
    1: 26,
    2: 45,
    3: 10,
    4: 5,
    5: 2,
    6: 11,
    7: 2,
  },
  {
    name: 'Q3.23',
    1: 24,
    2: 45,
    3: 11,
    4: 4,
    5: 3,
    6: 11,
    7: 1,
  },
  {
    name: 'Q4.23',
    1: 26,
    2: 43,
    3: 11,
    4: 4,
    5: 2,
    6: 12,
    7: 2,
  },
  {
    name: 'Q1.24',
    1: 19,
    2: 45,
    3: 13,
    4: 4,
    5: 4,
    6: 14,
    7: 2,
  },
  {
    name: 'Q2.24',
    1: 21,
    2: 46,
    3: 10,
    4: 3,
    5: 3,
    6: 15,
    7: 2,
  },
];

export default function Chart16() {
  const CustomLabel = (props) => {
    const { x, y, value } = props;
    return (
      <text
        x={x}
        y={y}
        dy={value * 1.5}
        fill={props.fill === 'black' ? 'black' : 'white'}
        stroke={props.fill === 'black' ? 'black' : 'white'}
        strokeWidth={props.fill === 'black' ? '0.3' : '0'}
        fontSize={10}
        fontWeight={700}
        textAnchor="middle"
        dominantBaseline="middle"
      >
        {value}
      </text>
    );
  };
  return (
    <AreaChart
      width={700}
      height={400}
      data={data}
      stackOffset="expand"
      className="bg-[#948A54] flex justify-center"
      style={{ width: '100% !important' }}
      margin={{
        top: 10,
        right: 25,
        left: 25,
        bottom: 0,
      }}
    >
      <XAxis interval={0} dataKey="name" tick={<CustomizedAxisTick />} />
      <Legend
        verticalAlign="top"
        height={20}
        width={620}
        iconSize={10}
        iconType="square"
        wrapperStyle={{ fontSize: 12, backgroundColor: 'white', left: 'auto' }}
      />
      <Tooltip />
      <Area fillOpacity={1} name="Tiền" dataKey="1" stackId="1" stroke="#008080" fill="#008080">
        <LabelList
          fill="white"
          valueAccessor={valueAccessor('1')}
          fontSize={10}
          fontWeight={700}
          content={CustomLabel}
        />
      </Area>
      <Area fillOpacity={1} name="Phải thu" dataKey="2" stackId="1" stroke="#262626" fill="#262626">
        <LabelList
          fill="white"
          valueAccessor={valueAccessor('2')}
          fontSize={10}
          fontWeight={700}
          content={CustomLabel}
        />
      </Area>
      <Area
        fillOpacity={1}
        name="Hàng tồn kho"
        dataKey="3"
        stackId="1"
        stroke="#339933"
        fill="#339933"
      >
        <LabelList
          fill="white"
          valueAccessor={valueAccessor('3')}
          fontSize={10}
          fontWeight={700}
          content={CustomLabel}
        />
      </Area>
      <Area
        fillOpacity={1}
        name="TS cố định"
        dataKey="4"
        stackId="1"
        stroke="#984807"
        fill="#984807"
      >
        <LabelList
          fill="white"
          valueAccessor={valueAccessor('4')}
          fontSize={10}
          fontWeight={700}
          content={CustomLabel}
        />
      </Area>
      <Area
        fillOpacity={1}
        name="TS dở dang"
        dataKey="5"
        stackId="1"
        stroke="#FFC000"
        fill="#FFC000"
      >
        <LabelList
          fill="black"
          valueAccessor={valueAccessor('5')}
          fontSize={10}
          fontWeight={700}
          content={<CustomLabel fill="black" />}
        />
      </Area>
      <Area
        fillOpacity={1}
        name="BĐS đầu tư"
        dataKey="6"
        stackId="1"
        stroke="#AA4643"
        fill="#AA4643"
      >
        <LabelList
          fill="white"
          valueAccessor={valueAccessor('6')}
          fontSize={10}
          fontWeight={700}
          content={CustomLabel}
        />
      </Area>
      <Area fillOpacity={1} name="TS khác" dataKey="7" stackId="1" stroke="#215968" fill="#215968">
        <LabelList
          fill="white"
          valueAccessor={valueAccessor('7')}
          fontSize={10}
          fontWeight={700}
          content={CustomLabel}
        />
      </Area>
    </AreaChart>
  );
}
