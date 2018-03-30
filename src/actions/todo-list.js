import { ADD_TODO, TOOGLE_TODO } from './enum'
import {v4} from 'uuid'

let nextId = () => {
  const nextId = Math.random() * 100000
  return nextId
}

export const addTodo = (task) => ({
  type: ADD_TODO,
  id: v4(),
  task
})

export const toogleTodo = (id) => ({
  type: TOOGLE_TODO,
  id
})