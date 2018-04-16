import { combineReducers } from 'redux'
import { FETCH_TODO_FAILURE, TOOGLE_TODO_SUCCESS, FETCH_TODO_REQUEST, FETCH_TODO_SUCESS, RESET_APP, ADD_TODO_SUCCESS } from '../actions/enum'

const createList = (filter) => {
  const handleToogle = (state, action) => {
    const { result: toogledId, entities } = action.response
    const { completed } = entities.todos[toogledId]
    const shouldRemove = (
      (completed && filter === 'active') ||
      (!completed && filter === 'completed')
    )

    return shouldRemove ? 
      state.filter(id => id !== toogledId) :
      state
  }

  const ids = (state = [], action) => 
  {
    switch(action.type) {
      case FETCH_TODO_SUCESS: 
        return filter === action.filter ?
          action.response.result :
          state
      case ADD_TODO_SUCCESS:
        return filter !== 'completed' ?
          [...state, action.response.result] :
          state
      case TOOGLE_TODO_SUCCESS:
        return handleToogle(state, action)
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