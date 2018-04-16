import { combineReducers } from 'redux'
import { FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCESS, RESET_APP } from '../actions/enum'

const createList = (filter) => {
  const ids = (state = [], action) => 
  {
    if (action.filter !== filter) {
      return state
    }
    switch(action.type) {
      case FETCH_TODO_SUCESS: 
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
      case FETCH_TODO_REQUEST:
        return true
      case FETCH_TODO_FAILURE: 
      case FETCH_TODO_SUCESS: 
        return false
      default:
        return state
    }
  }

  const errorMessage = (state = null, action) => {
    if (action.filter !== filter) {
      return state
    }
    switch(action.type) {
      case FETCH_TODO_FAILURE:
        return action.message
      case FETCH_TODO_REQUEST:
      case FETCH_TODO_SUCESS:
        return null
      default:
        return state
    }
  }

  return combineReducers({
    ids,
    isFetching,
    errorMessage,
  })
}

export default createList

export const getIds = (state) => state.ids
export const getIsFetching = (state) => state.isFetching
export const getErrorMessage = (state) => state.errorMessage