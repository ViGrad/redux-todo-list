import { ADD_TODO, TOOGLE_TODO, RECEIVE_TODOS, REQUEST_TODOS } from './enum'
import { v4 } from 'uuid'
import * as api from '../api'
import { getIsFetching } from '../reducers';

export const addTodo = (task) => ({
  type: ADD_TODO,
  id: v4(),
  task
})

export const toogleTodo = (id) => ({
  type: TOOGLE_TODO,
  id
})

export const fetchTodos = (filter) => (dispatch, getState) => {
  if (getIsFetching(getState(), filter)) {
    return Promise.resolve()
  }

  dispatch(requestTodos(filter))
  return api.fetchTodoList(filter).then(response => 
    dispatch(receiveTodos(filter, response))
  )
}


export const receiveTodos = (filter, response) => ({
  type: RECEIVE_TODOS,
  filter,
  response
})

export const requestTodos = (filter) => ({
  type: REQUEST_TODOS,
  filter
})