import React from 'react'
import propTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'

const FilterLink = ({
  filter,
  children
}) => (
  <NavLink
    exact
    to={filter === '/all' ? '/' : filter}
    activeStyle={{
      textDecoration: 'none',
      color: 'black'
    }}
  >
    {children}
  </NavLink>
)

export default FilterLink