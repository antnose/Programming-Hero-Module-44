import { LineChart as LChart, Line, XAxis, YAxis } from "recharts";

const LineChart = () => {
  const mathMarksData = [
    { id: 1, name: "Alice", math: 78, physics: 82, chemistry: 75 },
    { id: 2, name: "Bob", math: 85, physics: 79, chemistry: 80 },
    { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 91 },
    { id: 4, name: "David", math: 65, physics: 70, chemistry: 68 },
    { id: 5, name: "Emma", math: 88, physics: 85, chemistry: 87 },
    { id: 6, name: "Frank", math: 74, physics: 76, chemistry: 72 },
    { id: 7, name: "Grace", math: 95, physics: 94, chemistry: 96 },
    { id: 8, name: "Hannah", math: 80, physics: 78, chemistry: 82 },
    { id: 9, name: "Ian", math: 70, physics: 72, chemistry: 74 },
    { id: 10, name: "Jack", math: 90, physics: 89, chemistry: 92 },
  ];

  return (
    <div>
      <LChart width={800} height={400} data={mathMarksData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="math"></Line>
        <Line dataKey="physics" stroke="red"></Line>
        <Line dataKey="chemistry" stroke="yellow"></Line>
      </LChart>
    </div>
  );
};

export default LineChart;
