import { connect } from 'react-redux'

import { toogleTodo } from '../actions/todo-list'
import { getVisibileTodos } from '../utils/todo-tools'

import TodoList from './todo-list'

const mapStateToProps = (state) => ({
  todoList: getVisibileTodos(
      state.todoList,
      state.visibilityFilter
    )
  })

const mapDispatchToProps = (dispatch) => ({
  onTodoClick: (id) => dispatch(
      toogleTodo(id)
    )
})

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList