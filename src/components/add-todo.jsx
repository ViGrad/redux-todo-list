import React from 'react'
import propTypes from 'prop-types'

import { connect } from 'react-redux'
import { addTodo } from '../actions/todo-list'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      
      dispatch(
        addTodo(input.value)
      )

      input.value = ''
    }}>
      <input ref={node => {
        input = node
      }}/>
      <button type='submit'>
        Add Todo
      </button>
    </form>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo