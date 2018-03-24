import React from 'react'
import ReactDOM from 'react-dom'

import Root from './components/root'

import reducer from './store/todo'

ReactDOM.render(
  (<Root/>),
  document.getElementById('root')
)