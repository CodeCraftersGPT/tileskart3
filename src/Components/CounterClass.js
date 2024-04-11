import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    // State initialized inside the constructor
    this.state = {
      count: 0,
    };
  }
  // Increment count method defined as an arrow function
  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  };
  // Decrement count method defined as an arrow function
  decrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count - 1,
    }));
  };
  render() {
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.incrementCount}>Increment</button>
        <button onClick={this.decrementCount}>Decrement</button>
      </div>
    );
  }
}

export default CounterClass;
