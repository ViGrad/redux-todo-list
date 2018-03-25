import React from 'react'

import AddTodo from './add-todo'
import VisibleTodoList from './visibile-todo-list'
import Footer from './footer'
  
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App