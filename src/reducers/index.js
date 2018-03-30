import { combineReducers } from 'redux'

import todoList, * as fromTodoList from './todo-list'

const reducer = combineReducers({
  todoList,
})

export default reducer

export const getVisibileTodos = (state, filter) => 
  fromTodoList.getVisibileTodos(state.todoList, filter)
