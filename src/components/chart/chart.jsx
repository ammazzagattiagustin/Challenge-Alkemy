import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

const data = [
  {
    subject: "Intelligence",
    A: 40,
    fullMark: 100,
  },
  {
    subject: "Strength",
    A: 50,
    fullMark: 100,
  },
  {
    subject: "Speed",
    A: 60,
    fullMark: 100,
  },
  {
    subject: "Durability",
    A: 70,
    fullMark: 100,
  },
  {
    subject: "Power",
    A: 80,
    fullMark: 100,
  },
  {
    subject: "Combat",
    A: 90,
    fullMark: 100,
  },
];

export default function Chart() {
  return (
    <RadarChart
      cx={150}
      cy={120}
      outerRadius={85}
      width={300}
      height={250}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Hero"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  );
}
