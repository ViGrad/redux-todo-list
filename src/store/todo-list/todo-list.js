import todoReducer from './todo'

import { ADD_TODO, TOOGLE_TODO } from '../../actions/enum'

export default (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(state, action)

    case TOOGLE_TODO:
      return toogleTodo(state, action)

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

