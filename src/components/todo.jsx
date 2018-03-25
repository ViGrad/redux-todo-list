import React from 'react'

const Todo = ({
  id, 
  task, 
  completed,
  ...props
}) => (
  <li 
    key={id} 
    style={{textDecoration: completed ? 'line-through' : 'none'}}
    {...props}
  > 
    {task} 
  </li>
)

export default Todo