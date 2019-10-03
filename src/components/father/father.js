import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUsers, saveInputValue } from '../../store'
import filterUsers from '../../filterUsers'
import Child from '../child';
import styles from './father.module.css'

class Father extends Component {

  render() {
    console.log('render')
    return (
      <div className={styles.container}>
        <div>Father Counter: {this.props.counter}</div>
        <div className={styles.children}>
          <Child
            childNumber={'1'}
            plusLabel='click me for plus'
            minusLabel='click me for minus'
          />
          <Child
            childNumber={'2'}
            plusLabel='click me for plus'
            minusLabel='click me for minus'
          />
        </div>
        <button onClick={this.props.fetchUsers}>
          Fetch Users
        </button>
        <input
          defaultValue={this.props.inputValue}
          placeholder={'Search user'}
          onChange={(e) => {
            this.props.saveInputValue(e.target.value)
          }}
        />
        {this.props.isFetching ? <div>loading</div> : null}
        {this.props.error
          ? (
            <div className={styles.error}>
              {this.props.error.message}
            </div>
          ) : null}
        <div>
          {this.props.users.map(user => {
            return (
              <div
                className={styles.user}
                key={user.id}
              >
                {user.name}
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    isFetching: state.isFetching,
    users: filterUsers(state),
    counter: state.counter,
    inputValue: state.inputValue,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    saveInputValue: (text) => dispatch(saveInputValue(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Father);