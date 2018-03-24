import todoReducer from './todo'

import { ADD_TODO, TOOGLE_TODO } from '../actions/enum'

export default (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodoReducer(state, action)

    case TOOGLE_TODO:
      return toogleTodoRedcuer(state, action)
  }
}

const addTodoReducer = (todoList, action) => ([
    ...todoList,
    todoReducer(undefined, action)
  ])

const toogleTodoRedcuer = 
  (todoList, action) => 
    todoList.map(todo => todoReducer(todo, action))
