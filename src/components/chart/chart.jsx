import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from "recharts";

export default function Chart({ heroe }) {

  const data = [
    {
      subject: "Intelligence",
      A: `${heroe.powerstats.intelligence}`,
      fullMark: 100,
    },
    {
      subject: "Strength",
      A: `${heroe.powerstats.strength}`,
      fullMark: 100,
    },
    {
      subject: "Speed",
      A: `${heroe.powerstats.speed}`,
      fullMark: 100,
    },
    {
      subject: "Durability",
      A: `${heroe.powerstats.durability}`,
      fullMark: 100,
    },
    {
      subject: "Power",
      A: `${heroe.powerstats.power}`,
      fullMark: 100,
    },
    {
      subject: "Combat",
      A: `${heroe.powerstats.combat}`,
      fullMark: 100,
    },
  ];

  return (
    <RadarChart
      cx={150} //150
      cy={105} //120
      outerRadius={85} //85
      width={300} //300
      height={210} //250
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 100]} />
      <Radar
        name="Hero"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart >
  );
}
