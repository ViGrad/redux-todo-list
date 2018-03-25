import React from 'react'
import { connect } from 'react-redux'


const Button = ({...props}) => (
  <button {...props} > Reset </button>
)

const ResetButton = connect(
  null,
  dispatch => ({
    onClick: () => {
      dispatch({
        type: 'RESET_APP'
      })
    }
  })
)(Button)

export default ResetButton