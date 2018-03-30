import todoReducer from '../todo'

import { ADD_TODO, TOOGLE_TODO, RESET_APP } from '../../actions/enum'
import { combineReducers } from 'redux';


const byId = (state = {}, action) => {
  switch (action.type) {
    case ADD_TODO:
    case TOOGLE_TODO:
      return {
        ...state,
        [action.id]: todoReducer(state[action.id], action)
      }

    case RESET_APP:
      return {}

    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO: 
      return [...state, action.id]

    default:
      return state
  }
}
  
export const getVisibileTodos = (state, filter) => {
  const allTodos = getAllTodos(state)
  switch(filter) {
    case 'all':
      return allTodos
    case 'active':
      return allTodos.filter(todo => !todo.completed)

    case 'completed':
      return allTodos.filter(todo => todo.completed)

    default:
      return new Error(`Unknow filter: ${filter}.`)
  }
}

const getAllTodos = (state) => 
  state.allIds.map(id => state.byId[id])


export default combineReducers({
  byId,
  allIds
})