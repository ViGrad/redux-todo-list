import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import * as actions from '../actions/todo-list'
import { getVisibileTodos, getIsFetching, getErrorMessage } from '../reducers'

import FetchError from './fetch-error'
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
    const { filter, fetchTodos, requestTodos } = this.props
    fetchTodos(filter)
  }

  render() {
    const { toogleTodo, isFetching, todoList, errorMessage } = this.props

    if (isFetching && todoList.length <= 0) {
      return (<p>Loading...</p>)
    }

    if (errorMessage && todoList.length <= 0) {
      return <FetchError
        errorMessage={errorMessage}
        onRetry={this.fetchDatas.bind(this)}
      />
    }

    return (
      <TodoList 
        todoList={todoList}
        onTodoClick={toogleTodo} 
      />
    )
  }
}


const mapStateToProps = (state, { match }) => {
  const filter = match.params.active || 'all';
  return {
    todoList: getVisibileTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
    filter
  }
}

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))

export default VisibleTodoList