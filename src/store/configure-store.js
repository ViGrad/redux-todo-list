import { createStore, combineReducers } from 'redux'

import { loadState, saveState } from '../utils/localStorage'
import todoList from './todo-list/index'
import visibilityFilter from './visibility-filter'

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
    todoList,
    visibilityFilter
  })
  
  const store = createStore(
    reducer,
    persistedState
  )

  store.subscribe(
    () => saveState({
      todoList: store.getState().todoList
    })
  )

  return store
}



export default configureStore