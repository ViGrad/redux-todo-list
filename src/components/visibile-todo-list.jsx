import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../actions/todo-list'
import { getVisibileTodos } from '../reducers'

import TodoList from './todo-list'

class VisibleTodoList extends React.Component {
  componentDidMount() {
    this.fetchDatas()
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchDatas()
    }
  }

  fetchDatas() {
    const { filter, fetchTodos } = this.props
    fetchTodos(filter)
  }



  render() {
    const { toogleTodo, ...rest } = this.props
    return (
      <TodoList 
        {...rest} 
        onTodoClick={toogleTodo} 
      />
    )
  }
}


const mapStateToProps = (state, { match }) => {
  const filter = match.params.active || 'all';
  return {
    todoList: getVisibileTodos(state, filter),
    filter
  }
}

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))

export default VisibleTodoList