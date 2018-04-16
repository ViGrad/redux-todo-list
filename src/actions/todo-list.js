import { normalize } from 'normalizr'
import * as schema from '../schema'
import { ADD_TODO_SUCCESS, TOOGLE_TODO_SUCCESS, FETCH_TODO_FAILURE, FETCH_TODO_SUCESS, FETCH_TODO_REQUEST } from './enum'
import * as api from '../api'
import { getIsFetching } from '../reducers';



export const addTodo = (task) => (dispatch) => 
  api.addTodo(task).then(response => {
    dispatch({
      type: ADD_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    })
  })

export const toogleTodo = (id) => (dispatch) => {
  api.toogleTodo(id).then(response => {
    dispatch({
      type: TOOGLE_TODO_SUCCESS,
      response: normalize(response, schema.todo)
    })
  })
}

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
      response: normalize(response, schema.arrayOfTodos)
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