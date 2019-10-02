import React, { Component } from 'react';
import Button from '../button'
import { connect } from 'react-redux'
import { handlerPlusCounterAction, handlerMinusCounterAction } from '../../store'
import styles from './child.module.css'

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  plusCounter = () => {
    this.props.handlerPlusCounterAction();
    this.setState({
      count: this.state.count + 1
    });
  };

  minusCounter = () => {
    this.props.handlerMinusCounterAction();
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
          plusCounter={this.plusCounter}
          minusCounter={this.minusCounter}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handlerPlusCounterAction: () => dispatch(handlerPlusCounterAction()),
  handlerMinusCounterAction: () => dispatch(handlerMinusCounterAction())
})

export default connect(null, mapDispatchToProps)(Child);