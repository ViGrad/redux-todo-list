import { ADD_TODO, TOOGLE_TODO } from '../../actions/enum'

export default (state=undefined, action) => {
  switch(action.type) {
    case ADD_TODO:
      return addTodoReducer(state, action)

    case TOOGLE_TODO:
      return toogleTodoIfNeeded(state, action)

    default:
      return state
  }
}

export const addTodoReducer = (state, {id, task, completed=false}) => ({
  id,
  task,
  completed
})

export const toogleTodoIfNeeded = (todo, action) => {
  return todo.id === action.id
    ? toogleTodo(todo)
    : todo
}

export const toogleTodo = (todo) => ({
    ...todo, 
    completed: !todo.completed
  })
