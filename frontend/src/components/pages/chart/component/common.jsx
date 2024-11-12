export const CustomizedAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={12} textAnchor="middle" fill="black" fontWeight={700} fontSize={10}>
        {payload.value.split('.')[0]}
      </text>
    </g>
  );
};

export const CustomizedYAxisTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dx={-12}
        dy={4}
        textAnchor="middle"
        fill="black"
        fontWeight={700}
        fontSize={10}
      >
        {payload.value}.0
      </text>
    </g>
  );
};

export const valueAccessor =
  (attribute) =>
  ({ payload }) => {
    return payload[attribute];
  };
