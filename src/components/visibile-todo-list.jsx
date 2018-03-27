import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { toogleTodo } from '../actions/todo-list'
import { getVisibileTodos } from '../reducers'

import TodoList from './todo-list'

const mapStateToProps = (state, { match }) => ({
  todoList: getVisibileTodos(
      state,
      match.params.active || 'all',
    )
  })

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: toogleTodo }
)(TodoList))

export default VisibleTodoList