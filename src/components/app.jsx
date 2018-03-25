import React from 'react'

import AddTodo from './add-todo'
import VisibleTodoList from './visibile-todo-list'
import Footer from './footer'
import ResetButtons from './reset-button'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <ResetButtons />
  </div>
)

export default App