import { createSelector } from 'reselect'

const getUsers = state => state.users
const getInputText = state => state.inputValue

const filterUserSelector = createSelector(
  getUsers, getInputText,
  (users, inputValue) => {
    console.log('entro al selector')
    if (!inputValue) {
      return users
    } else {
      const newList = users.filter(user => user.name.includes(inputValue))
      return newList
    }
  }
)

export default filterUserSelector 