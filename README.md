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
- [ ] Legend for raw material
- [ ] Label axis
- [ ] Group data by monthly averages, we might have to go with parsing date first then keep track of on MM-YYYY as we move through the data
- [ ] Put data transforms & computation into worker

*What did we learn?*
- Having soundtrack in the background is nice to fill in the gaps when I am just thinking
- How to make a chart in nivo
- Limits of the data points you can pass in