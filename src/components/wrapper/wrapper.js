import React, {Component} from 'react';
import CounterButtons from '../buttons/buttons';
import SelectComponent from '../select/select';

class Wrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      notes: '',
      place: '',
      stage: 'firstStep',
    };
  }

  handlerPlusCounter = () => {
    console.log('plus');
    this.setState((state) => {
      return {count: state.count + 1};
    });
  };

  handlerMinusCounter = () => {
    console.log('minus');
    this.setState((state) => {
      return {count: state.count - 1};
    });
  };

  handleSelect = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    e.stopPropagation();
    this.setState({place: e.target.value});
  };

  handleSubmit = () => {
    const {count, place} = this.state;
    alert(`you going to ${place} with ${count} person`);
  };

  StageHandler = {
    firstStep: {
      on: {
        NEXT: 'secondStep',
      },
    },
    secondStep: {
      on: {
        NEXT: 'thirdStep',
      },
    },
  };

  transition = t => {
    const { stage } = this.state;
    const nextStage = this.StageHandler[stage].on[t];
    if (nextStage !== undefined) {
      this.setState(state => {
        return {
          ...state,
          stage: nextStage,
        };
      });
    }
  };

  render() {
    const {stage} = this.state;

    const stageRenderers = {
      firstStep: () => {
        return (
          <CounterButtons
            plusLabel='click me for plus'
            minusLabel='click me for minus'
            plusCounter={() => this.handlerPlusCounter()}
            minusCounter={() => this.handlerMinusCounter()}
            transition={this.transition}
          />
        );
      },
      secondStep: () => {
        return (
          <SelectComponent
            label='select a place'
            handleSelect={e => this.handleSelect(e)}
            transition={this.transition}
            onSubmit={this.handleSubmit}
          />
        );
      },
    };

    const content = stageRenderers[stage]();

    return (
      <div style={styles}>
      <div>{this.state.count}</div>
      <div>{this.state.place}</div>
      {content}
      </div>
    );
  }
}

const styles = {
  'display': 'flex',
  'flexDirection': 'column',
  'borderStyle': 'solid',
  'borderColor': 'blue',
  'borderWidth': '1',
  'alignItems': 'center',
  'justifyContent': 'center',
}

export default Wrapper;