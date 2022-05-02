import React from 'react';
import P from 'papaparse';

import CostChart, { CostEntryArray } from './Cost';

import './App.css';


class App extends React.Component<{}, { cost: CostEntryArray[] }> {

  constructor(props: any) {
    super(props);
    this.state = { cost: [] };
  }

  componentDidMount() {
    P.parse('cost.csv', { download: true, complete: this.onCostParseComplete });
  }

  onCostParseComplete = (results: any, file: any) => {
    results.data.shift();
    if (results.errors.length === 0) {
      // TODO instead of taking the last 100 entries, we want to get an average over the months
      const data = results.data;
      const cost = data.map(([date, corn, soy, wheat]: [string, string, string, string]) =>
        ([new Date(date), parseFloat(corn), parseFloat(soy), parseFloat(wheat)])
      );
      this.setState({ cost })
    }
  }

  render() {
    return (<>
      <CostChart cost={this.state.cost} />
    </>);
  }
}

export default App;
