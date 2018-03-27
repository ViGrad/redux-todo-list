import { ADD_TODO, TOOGLE_TODO } from './enum'

let nextId = () => {
  const nextId = Math.random() * 100000
  return nextId
}

export const addTodo = (task) => ({
  type: ADD_TODO,
  id: nextId(),
  task
})

export const toogleTodo = (id) => ({
  type: TOOGLE_TODO,
  id
})