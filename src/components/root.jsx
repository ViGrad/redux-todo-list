import React from 'react'

import Todo from './todo'

const todo = {
    id: 1,
    task: 'apprendre redux',
    completed: false
  }

  
const Root = () => (
    <Todo {...todo} />
)

export default Root