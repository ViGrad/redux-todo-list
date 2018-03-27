import { createStore } from 'redux'

import { loadState, saveState } from './utils/localStorage'

import reducer, { initialState } from './reducers' 

const addLoggingToDispatch = (store) => {
  const rawDisptach = store.dispatch
  if(!console.group){
    return rawDisptach
  }

  return (action) => {
    console.group(action.type)
    console.log('%c Prev State', 'color: gray', store.getState())
    console.log('%c Action', 'color: blue', action)
    const returnValue = rawDisptach(action)
    console.log('%c Next State', 'color: green', store.getState())
    console.groupEnd(action.type)
    return returnValue
  }
}

const configureStore = () => {
  const persistedState = loadState() || initialState

  const store = createStore(
    reducer,
    persistedState
  )

  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === 'development') {
    store.dispatch = addLoggingToDispatch(store)
  }

  store.subscribe(
    () => saveState({
      todoList: store.getState().todoList,
    })
  )

  return store
}



export default configureStore