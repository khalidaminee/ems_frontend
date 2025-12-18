import React, { Component } from 'react'
import CounterPureComponent from './CounterPureComponent';

export class PureComponent extends Component {
     constructor(props){
        super(props);
        this.state = {
            count: 0,
        };

    }   

    // Example 1
    handleIncrement = () => {
        this.setState( (prevState) => ({
          count: prevState.count +1,
        }))
    }

  render() {
    console.log("parent Component"); 
    return (
      <div>
        <h1>Pure Component in React</h1>
       
        <CounterPureComponent count={this.state.count} onIncrement={ this.handleIncrement } />
      </div>
    )
  }
}

export default PureComponent
