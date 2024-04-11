// we want to create a class component that will have a state and a lifecycle method that will update the state.
// lifecycle methods to include are componentDidMount and componentDidUpdate, comonentShouldUpdate, componentWillUnmount
import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        console.log('Constructor'); 
        super(props);
        this.state = {
        count: 0,
        };
    }
    incrementCount = () => {
        this.setState(prevState => ({
        count: prevState.count + 1,
        }));
    };
    decrementCount = () => {
        this.setState(prevState => ({
        count: prevState.count - 1,
        }));
    };
    componentDidMount() {
        console.log('Component did mount');
        // ideal place for network request. dom update. event subscriptions
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.count > 10) {
            return false;
        }
        console.log(`${nextProps} ${nextState}`);
        console.log('Should component update');
        return true;
    }
    componentDidUpdate(prevProps, prevState ) {
        console.log(`${prevProps} ${prevState}`);
        console.log('Component did update');
    }
    componentWillUnmount() {
        console.log('Component will unmount');
    }
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

    export default LifeCycle;