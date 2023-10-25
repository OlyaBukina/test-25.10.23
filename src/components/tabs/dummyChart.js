import { Chart, Bar, Label } from './Tabs.styled';

const data = [
  { label: 'January', value: 12 },
  { label: 'February', value: 19 },
  { label: 'March', value: 3 },
  { label: 'April', value: 5 },
  { label: 'May', value: 2 },
];

const DummyChart = () => {
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <Chart>
      {data.map((item, index) => (
        <Bar
          key={index}
          style={{ height: `${(item.value / maxValue) * 100}%` }}
        >
          <Label>{item.label}</Label>
        </Bar>
      ))}
    </Chart>
  );
};

export default DummyChart;
