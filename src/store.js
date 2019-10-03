import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

const initialState = {
  counter: 0,
  users: [],
  isFetching: false,
  error: undefined,
}

const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'PLUS_COUNTER':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'MINUS_COUNTER':
      return {
        ...state,
        counter: state.counter - 1
      }
    case 'FETCH_USERS_PENDING':
      return {
        ...state,
        error: undefined,
        isFetching: true,
      }
    case 'FETCH_USERS_SUCCESS':
      return {
        ...state,
        isFetching: false,
        users: action.payload,
      }
    case 'FETCH_USERS_ERROR':
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}

export const handlerPlusCounterAction = () => ({
  type: 'PLUS_COUNTER',
})

export const handlerMinusCounterAction = () => ({
  type: 'MINUS_COUNTER',
})

export const fetchUsersPending = () => ({
  type: 'FETCH_USERS_PENDING',
})

export const fetchUsersSuccess = (response) => ({
  type: 'FETCH_USERS_SUCCESS',
  payload: response,
})

export const fetchUsersError = (error) => ({
  type: 'FETCH_USERS_ERROR',
  payload: error,
})


export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersPending())
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(response => {
        dispatch(fetchUsersSuccess(response))
      })
      .catch(error => {
        dispatch(fetchUsersError(error))
      })
  }
}

const store = createStore(reducer, applyMiddleware(thunk))
export default store