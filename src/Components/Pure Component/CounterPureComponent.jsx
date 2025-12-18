import React, { PureComponent } from 'react'

export default class CounterPureComponent extends PureComponent {
  render() {
    console.log("Counter Pure Component!");
    return (
      <>
        <h2>Counter: {this.props.count }</h2>
        <button onClick={ this.props.onIncrement } className='btn btn-primary'>Increment</button>
      </>

    )
  }
}

