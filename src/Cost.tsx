import React from 'react'
import { Line, ResponsiveLine } from '@nivo/line'

export type CostEntryArray = [string, number, number, number];

type DataPoint = {
  x: string,
  y: number
}

const CostChart: React.FC<{ cost: CostEntryArray[] }> = ({ cost }) => {
  const cornData: DataPoint[] = [];
  const soyData: DataPoint[] = [];
  const wheatData: DataPoint[] = [];

  cost.forEach(([date, corn, soy, wheat]: CostEntryArray) => {
    cornData.push({ x: date, y: corn });
    soyData.push({ x: date, y: soy });
    wheatData.push({ x: date, y: wheat });
  });

  const data = [
    { id: "corn", data: cornData },
    { id: "soy", data: soyData },
    { id: "wheat", data: wheatData }
  ];
  /*
    const x1 = `2001-01-01`;
    const x2 = `2001-01-02`;
    const data = [
      { id: "corn", color: "yellow", data: [{ x: x1, y: 1 }, { x: x2, y: 2 }] },
      { id: "soy", color: "green", data: [{ x: x1, y: 3 }, { x: x2, y: 8 }] },
      { id: "wheat", color: "brown", data: [{ x: x1, y: 6 }, { x: x2, y: 10 }] }
    ];
  */
  // legends={[{itemWidth: 60, itemHeight: 20}]} 
  //{(date: Date) => date.toLocaleDateString() }

  const dateFormat = "%Y-%m-%d";
  return (<div style={{ width: "100%", height: "100vh" }}>
    <ResponsiveLine data={data}
      pointLabelYOffset={5}
      xFormat={`time:${dateFormat}`}
      xScale={{
        type: 'time',
        format: dateFormat,
        useUTC: false,
        precision: 'day',
      }}
      yFormat=" >-$.2f"
      margin={{
        bottom: 50,
        left: 50,
        right: 100,
        top: 20
      }}
      axisLeft={{
        legend: "USD / bushell",
        legendOffset: -30,
        legendPosition: "middle"
      }}
      axisBottom={{
        format: '%b %d',
        legend: "over time", // TODO change this to mo / yr depending on user selected fidelity
        legendOffset: 40,
        legendPosition: "middle"
      }}
      enableArea={true}
      enablePoints={false}
      legends={[{
        direction: 'column',
        anchor: 'top-right',
        itemWidth: 60,
        itemHeight: 20,
        translateX: 80
      }]}
    />
  </div>)
};

export default CostChart;