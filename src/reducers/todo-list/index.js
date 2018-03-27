import todoReducer from '../todo'

import { ADD_TODO, TOOGLE_TODO, RESET_APP } from '../../actions/enum'

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action)

    case TOOGLE_TODO:
      return toogleTodo(state, action)

    case RESET_APP:
      return initialState

    default:
      return state
  }
}

const addTodo = (todoList, action) => ([
    ...todoList,
    todoReducer(undefined, action)
  ])

const toogleTodo = 
  (todoList, action) => 
    todoList.map(todo => 
      todoReducer(todo, action)
  )

  
export const getVisibileTodos = (state, filter) => {
  switch(filter) {
    case 'active':
      return state.filter(todo => !todo.completed)

    case 'completed':
    return state.filter(todo => todo.completed)

    default:
    return state
  }
}