import React from 'react'
import propTypes from 'prop-types'

import Todo from './todo'

import { toogleTodo } from '../actions/todo-list' 

class TodoList extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })    
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    const { store } = this.context 
    const state = store.getState()
    
    return state.todoList.map(
      todo => 
        <Todo 
          key={todo.id} 
          onClick={ () => {
            store.dispatch(
              toogleTodo(todo.id)
            )
          }}
          {...todo} 
        />
    )
  }
}
TodoList.contextTypes = {
  store: propTypes.object
}

export default TodoList
