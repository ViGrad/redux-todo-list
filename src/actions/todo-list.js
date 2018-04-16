import { ADD_TODO, TOOGLE_TODO, RECEIVE_TODOS, FETCH_TODO_FAILURE, FETCH_TODO_SUCESS, FETCH_TODO_REQUEST } from './enum'
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

  dispatch({
    type: FETCH_TODO_REQUEST,
    filter
  })

  return api.fetchTodoList(filter).then(response => 
    dispatch({
      type: FETCH_TODO_SUCESS,
      filter,
      response
    }),
    err => {
      dispatch({
        type: FETCH_TODO_FAILURE,
        filter,
        message: err.message || 'something goes wrong'
      })
    }
  )
}