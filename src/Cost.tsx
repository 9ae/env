import React from 'react'
import { Line, ResponsiveLine } from '@nivo/line'

export type CostEntryArray = [Date, number, number, number];

type DataPoint = {
  x: Date,
  y: number
}

const CostChart : React.FC<{cost: CostEntryArray[]}> = ({cost}) => {
/*
  const cornData : DataPoint[] = [];
  const soyData : DataPoint[] = [];
  const wheatData : DataPoint[] = [];

  cost.forEach(([date, corn , soy, wheat] : CostEntryArray) => {
    cornData.push({x: date, y: corn});
    soyData.push({x: date, y: soy});
    wheatData.push({x: date, y: wheat});
  });
*/
  const data = [
    { id: "corn", color: "yellow" , data: [{x:0, y: 1},{ x:1, y: 2}] },
    { id: "soy", color: "green" , data: [{x:0, y: 3},{ x:1, y: 8}] },
    {id: "wheat", color: "brown", data: [{x:0, y: 6},{ x:1, y: 10}] }
  ];

  // legends={[{itemWidth: 60, itemHeight: 20}]} 

  return (<div style={{width: "100%", height: "100vh"}}>
    <ResponsiveLine data={data} />
  </div>)
};

export default CostChart;