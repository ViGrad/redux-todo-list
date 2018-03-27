import { combineReducers } from 'redux'

import todoList, * as fromTodoList from './todo-list'

export const initialState = {
  todoList: [
    {
      id: 1,
      task: 'learn redux',
      completed: false
    },
    {
      id: 2,
      task: 'Go shopping',
      completed: true
    },
    {
      id: 3,
      task: 'bouh',
      completed: false
    },
  ]
}

const reducer = combineReducers({
  todoList,
})

export default reducer

export const getVisibileTodos = (state, filter) => 
  fromTodoList.getVisibileTodos(state.todoList, filter)
