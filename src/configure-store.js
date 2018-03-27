import { createStore } from 'redux'

import { loadState, saveState } from './utils/localStorage'

import reducer, { initialState } from './reducers' 

const configureStore = () => {
  const persistedState = loadState() || initialState

  const store = createStore(
    reducer,
    persistedState
  )

  store.subscribe(
    () => saveState({
      todoList: store.getState().todoList,
    })
  )

  return store
}



export default configureStore