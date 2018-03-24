import React from 'react'
import propTypes from 'prop-types'

import Todo from './todo'

class TodoList extends React.Component {
  render() {
    const { store } = this.context 
    const state = store.getState()
    
    return state.todoList.map(todo => <Todo key={todo.id} {...todo} />)
  }
}
TodoList.contextTypes = {
  store: propTypes.object
}

export default TodoList
