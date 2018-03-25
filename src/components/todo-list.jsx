import React from 'react'
import propTypes from 'prop-types'

import Todo from './todo'

const TodoList = ({ todoList, onTodoClick }) => 
  todoList.map(
    todo => 
      <Todo 
        key={todo.id} 
        onClick={() => onTodoClick(todo.id)}
        {...todo}
      />
  )

export default TodoList
