import React from 'react'
import propTypes from 'prop-types'

import Link from './link'

import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/visibility-filter'

const mapStateToProps = (
  state,
  ownProps
) => ({
  active: 
    state.visibilityFilter === 
    ownProps.filter
})

const mapDispatchToProps = (
  dispatch,
  ownProps
) => ({
  onClick: () => {
    dispatch(
      setVisibilityFilter(ownProps.filter)
    )
  }
})

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink