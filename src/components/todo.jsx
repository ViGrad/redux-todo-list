import React from 'react'

const Todo = ({
  id, 
  task, 
  completed
}) => (
  <li 
    key={id} 
    style={{textDecoration: completed ? 'line-through' : 'none'}}
  > 
    {task} 
  </li>
)

export default Todo