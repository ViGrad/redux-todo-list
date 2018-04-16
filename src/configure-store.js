import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducer from './reducers' 

const configureStore = () => {
  const middleWares = [promise, thunk];

  if (process.env.NODE_ENV === 'development') {
    middleWares.push(createLogger())
  }

  return createStore(
    reducer,
    applyMiddleware(...middleWares)
  )
}

export default configureStore