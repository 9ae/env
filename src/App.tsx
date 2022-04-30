import React from 'react';
import P from 'papaparse';

import CostChart, {CostEntryArray} from './Cost';

import './App.css';


class App extends React.Component<{}, {cost: CostEntryArray[] }> {
  
  constructor(props : any) {
    super(props);
    this.state = { cost: [] };
  }
  
  componentDidMount(){
    P.parse('cost.csv', {download: true, complete: this.onCostParseComplete});
  }

  onCostParseComplete = (results: any, file : any) => {
    results.data.shift();
    if(results.errors.length === 0){
      const cost = results.data.map(([date, corn , soy, wheat] : [string, string, string, string]) => 
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
