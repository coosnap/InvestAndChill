import { Bar, BarChart, Legend, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';
import { CustomizedAxisTick, CustomizedYAxisTick } from './common';

export default function StackedBarChart(dataChart) {
  const data = dataChart?.dataChart?.perf3?.map((e) => ({
    name: `Q${e.id.quarter}.${e.id.year}`,
    loiNhuanCotLoi: Number(e.loiNhuanCotLoi),
    loiNhuanTaiChinh: Number(e.loiNhuanTaiChinh),
    thuNhapKhac: Number(e.thuNhapKhac),
    laiLoTuCongTyLienDoanh: Number(e.laiLoTuCongTyLienDoanh),
  }));

  const renderQuarterTick = (tickProps) => {
    const { x, y, payload } = tickProps;
    const { value, offset } = payload;
    const lastItem = data[0];
    const isLast = value.includes('4.');
    let yr = [];
    dataChart?.dataChart?.perf3?.map((e) => yr.push(e.id.year));
    let year = [...new Set(yr)];
    let devide = year.map((e) => yr?.filter((i) => i === e));

    if (value == lastItem.name) {
      return (
        <text x={x} y={y} textAnchor="middle" fontSize={10} fontWeight={700}>
          {value.split('.')[1]}
        </text>
      );
    }
    const pathX = Math.floor(isLast ? x + offset : x - offset);
    for (let i = 0; i < devide.length; i++) {
      if (devide[i].includes(value.split('.')[1])) {
        if (devide[i].length === 2) {
          return <path d={`M${pathX},${y + 7}v${-45}`} stroke="#666666" strokeWidth={1} />;
        }
        if (devide[i].length === 3 && value.includes('Q1.')) {
          return <path d={`M${pathX},${y + 7}v${-45}`} stroke="#666666" strokeWidth={1} />;
        }
        if (devide[i].length === 3 && value.includes('Q2.')) {
          return (
            <text x={x} y={y} textAnchor="middle" fontSize={10} fontWeight={700}>
              {value.split('.')[1]}
            </text>
          );
        }
        if (devide[i].length === 4 && value.includes('Q1.')) {
          return <path d={`M${pathX},${y + 7}v${-45}`} stroke="#666666" strokeWidth={1} />;
        }
        if (devide[i].length === 4 && value.includes('Q2.')) {
          return (
            <text x={x + 18} y={y} textAnchor="middle" fontSize={10} fontWeight={700}>
              {value.split('.')[1]}
            </text>
          );
        }
      }
    }
    return null;
  };

  return (
    <BarChart
      width={700}
      height={400}
      data={data}
      stackOffset="sign"
      barSize={20}
      className="bg-second pb-4"
      style={{ width: '100% !important' }}
      margin={{
        top: 20,
        bottom: 10,
      }}
    >
      <XAxis
        interval={0}
        dataKey="name"
        padding={{ left: 10, right: 10 }}
        tick={<CustomizedAxisTick />}
      />
      <XAxis
        dataKey="name"
        axisLine={false}
        tickLine={false}
        interval={0}
        tick={renderQuarterTick}
        height={2}
        padding={{ left: 10, right: 10 }}
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
      <ReferenceLine y={0} stroke="#666666" strokeWidth={1} />
      <Bar name="Loi nhuan cot loi" dataKey="loiNhuanCotLoi" stackId="a" fill="#5B9BD5"></Bar>
      <Bar name="Loi nhuan tai chinh" dataKey="loiNhuanTaiChinh" stackId="a" fill="#ED7D31"></Bar>
      <Bar name="Thu nhap khac" dataKey="thuNhapKhac" stackId="a" fill="#A5A5A5"></Bar>
      <Bar name="Lai/lo CTLDLK" dataKey="laiLoTuCongTyLienDoanh" stackId="a" fill="#FFC000"></Bar>
    </BarChart>
  );
}
