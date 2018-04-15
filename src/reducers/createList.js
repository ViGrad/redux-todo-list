import { combineReducers } from 'redux'
import { RECEIVE_TODOS, RESET_APP, REQUEST_TODOS } from '../actions/enum'

const createList = (filter) => {
  const ids = (state = [], action) => 
  {
    if (action.filter !== filter) {
      return state
    }
    switch(action.type) {
      case RECEIVE_TODOS: 
        return action.response.map(todo => todo.id)
      case RESET_APP:
        return {}
      default:
        return state
    }
  }

  const isFetching = (state = false, action) => {
    if (action.filter !== filter) {
      return state
    }
    switch(action.type) {
      case REQUEST_TODOS:
        return true
      case RECEIVE_TODOS: 
        return false
      default:
        return state
    }
  }

  return combineReducers({
    ids,
    isFetching,
  })
}

export default createList

export const getIds = (state) => state.ids
export const getIsFetching = (state) => state.isFetching