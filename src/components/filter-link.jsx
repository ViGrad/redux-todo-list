import React from 'react'
import propTypes from 'prop-types'

import Link from './link'

import { setVisibilityFilter } from '../actions/visibility-filter'

class FilterLink extends React.Component {
  componentDidMount() {
    const { store } = this.context
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }
  
  render() {
    const { store } = this.context
    const { filter, children } = this.props
    const state = store.getState()

    return (
      <Link 
        active={
          filter === state.visibilityFilter
        }
        onClick={() => {
          store.dispatch(
            setVisibilityFilter(filter)
          )
        }}
      >
        {children}
      </Link>
    )
  }
}
FilterLink.contextTypes = {
  store: propTypes.object
}

export default FilterLink