import { FETCH_TODO_SUCESS, RESET_APP } from '../actions/enum'

const byId = (state = {}, action) => {
  switch (action.type) {
    case FETCH_TODO_SUCESS:
      const nextState = {...state}
      action.response.forEach(todo => {
        nextState[todo.id] = todo
      });
      return nextState

    case RESET_APP:
      return {}

    default:
      return state
  }
}

export default byId

export const getTodo = (state, id) => state[id]