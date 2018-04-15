import { RECEIVE_TODOS, RESET_APP } from '../actions/enum'

const createList = (filter) => (state = [], action) => {
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

export default createList

export const getIds = (state) => state