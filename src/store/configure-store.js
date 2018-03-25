import { createStore, combineReducers } from 'redux'

import { loadState, saveState } from '../utils/localStorage'
import todoList from './todo-list/index'

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

const configureStore = () => {
  const persistedState = loadState() || initialState


  const reducer = combineReducers({
      todoList
})
  

  const store = createStore(
    reducer,
    persistedState
  )

  store.subscribe(
    () => saveState(store.getState)
  )


  return store
}



export default configureStore