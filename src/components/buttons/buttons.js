import React from 'react';

const CounterButtons = (props) => {
  const {plusLabel, minusLabel, plusCounter, minusCounter, transition} = props;
  return (
    <div style={styles}>
      <button onClick={plusCounter}>{plusLabel}</button>
      <button onClick={minusCounter}>{minusLabel}</button>
      <button onClick={() => transition('NEXT')}>NEXT</button>
    </div>
  )
}

const styles = {
  'borderStyle': 'solid',
  'borderColor': 'red',
}


export default CounterButtons;