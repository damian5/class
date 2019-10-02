import React, { Component } from 'react';
import Button from '../button'
import styles from './child.module.css'

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handlerPlusCounter = () => {
    this.props.plusCounter()
    this.setState({
      count: this.state.count + 1
    });
  };

  handlerMinusCounter = () => {
    this.props.minusCounter()
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    const { plusLabel, minusLabel, childNumber } = this.props
    return (
      <div className={styles.container}>
        <div>Child Nº {childNumber}</div>
        <div>Child Counter: {this.state.count}</div>
        <Button
          plusLabel={plusLabel}
          minusLabel={minusLabel}
          plusCounter={this.handlerPlusCounter}
          minusCounter={this.handlerMinusCounter}
        />
      </div>
    );
  }
}

export default Child;