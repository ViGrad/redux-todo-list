import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { toogleTodo } from '../actions/todo-list'
import { getVisibileTodos } from '../utils/todo-tools'

import TodoList from './todo-list'

const mapStateToProps = (state, { match }) => ({
  todoList: getVisibileTodos(
      state.todoList,
      match.params.active || 'all',
    )
  })

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(
      toogleTodo(id)
    )
})

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList))

export default VisibleTodoList