import { ADD_TODO, TOOGLE_TODO, REVEIVE_TODOS } from './enum'
import { v4 } from 'uuid'
import * as api from '../api'

export const addTodo = (task) => ({
  type: ADD_TODO,
  id: v4(),
  task
})

export const toogleTodo = (id) => ({
  type: TOOGLE_TODO,
  id
})

export const fetchTodos = (filter) =>
  api.fetchTodoList(filter).then(response => 
    receiveTodos(filter, response)
  )


export const receiveTodos = (filter, response) => ({
  type: REVEIVE_TODOS,
  filter,
  response
})