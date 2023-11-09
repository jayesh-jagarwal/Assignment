import React, { Component } from 'react';

class LifecycleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello World'
    };
    console.log('Constructor called');
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps called');
    return null;
  }

  componentDidMount() {
    console.log('componentDidMount called');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate called');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate called');
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate called');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount called');
  }

  render() {
    console.log('render called');
    return (
      <div>
        {this.state.message}
      </div>
    );
  }
}

export default LifecycleComponent;