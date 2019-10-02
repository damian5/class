import { createStore } from 'redux'

const initialState = {
  counter: 0,
}

const reducer = (state = initialState, action) => {
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

const store = createStore(reducer)
export default store