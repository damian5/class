import React from 'react';
import styles from './button.module.css'

const Button = (props) => {
  const {
    plusLabel,
    minusLabel,
    plusCounter,
    minusCounter,
  } = props;
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={plusCounter}>{plusLabel}</button>
      <button className={styles.button} onClick={minusCounter}>{minusLabel}</button>
    </div>
  )
}

export default Button;