# Development notes

## Issues

### Why is it not rendering when x values are dates?
- [x] As date object?
- [x] As date string to be read as date object?

  Must it have time?
    No. It still fails to parse if we set the exact time
  
  > Turns out that we just need `axisBottom:{{format:''}}`

## Sesssion Notes

### 30/04/2020 Morning
*What we did:* Made line chart with nivo on food cost. Figured out how to pass date into x axis

TODO for next time:
- [x] Legend for raw material
- [x] Label axis
- [x] Group data by yearly averages, we might have to go with parsing date first then keep track of on MM-YYYY as we move through the data
- [ ] Put data transforms & computation into worker
- [ ] UI controls for adjusting month or year fidelity
- [ ]  find inflation rate
- [ ]  graph as line graph
- [ ]  make icons for soy, wheat, and corn
- [ ]  load in co2 emission data
- [ ]  provide total co2 emission to cost chart
- [ ]  make split flow graph for each product of the raw material
    - [ ]  make box layout grid chart with teach product breakdown
    - [ ]  make icons for each co2 contributor
    - [ ]  add legend
- [ ]  style graphs and enforce color scheme
- [ ]  make layer controls

*What did we learn?*
- Having soundtrack in the background is nice to fill in the gaps when I am just thinking
- How to make a chart in nivo
- Limits of the data points you can pass in