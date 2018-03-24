import { ADD_TODO, TOOGLE_TODO } from './enum'

let nextId = 4

export const addTodo = (id, task) => ({
  type: ADD_TODO,
  id: nextId++,
  task
})

export const toogleTodo = (id) => ({
  type: TOOGLE_TODO,
  id
})