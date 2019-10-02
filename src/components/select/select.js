import React from 'react';

const SelectComponent = (props) => {
  const {onSubmit, handleSelect, label} = props;

  return (
    <div style={styles}>
    <label>{label}</label>
    <select onChange={e => handleSelect(e)}>
      <option value={'Rosario'} >Rosario</option>
      <option value={'Buenos Aires'} >Buenos Aires</option>
      <option value={'Mendoza'} >Mendoza</option>
    </select>
    <button onClick={onSubmit}>submit</button>
    </div>
  )
}

const styles = {
  'borderStyle': 'solid',
  'borderColor': 'yellow',
}

export default SelectComponent;