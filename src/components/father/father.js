import React, { Component } from 'react';
import Child from '../child';
import styles from './father.module.css'

class Father extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handlerPlusCounter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  handlerMinusCounter = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className={styles.container}>
        <div>Father Counter: {this.state.count}</div>
        <div className={styles.children}>
          <Child
            childNumber={'1'}
            plusLabel='click me for plus'
            minusLabel='click me for minus'
            plusCounter={this.handlerPlusCounter}
            minusCounter={this.handlerMinusCounter}
          />
          <Child
            childNumber={'2'}
            plusLabel='click me for plus'
            minusLabel='click me for minus'
            plusCounter={this.handlerPlusCounter}
            minusCounter={this.handlerMinusCounter}
          />
        </div>
      </div>
    );
  }
}

export default Father;