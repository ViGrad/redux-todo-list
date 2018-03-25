import React from 'react'
import propTypes from 'prop-types'

import { addTodo } from '../actions/todo-list'

class AddTodo extends React.Component {
  render() {
    const { store } = this.context

    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        store.dispatch(
          addTodo(this.input.value)
        )

        this.input.value = ''
      }}>
        <input ref={node => {
          this.input = node
        }}/>
        <button type='submit'>
          Add Todo
        </button>
      </form>
    )
  }
}
AddTodo.contextTypes = {
  store: propTypes.object
}

export default AddTodo