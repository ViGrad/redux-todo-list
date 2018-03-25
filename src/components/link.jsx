import React from 'react'

const Link = ({
  children, 
  active, 
  ...props
}) => {
  if(active) {
    return (<span {...props}> {children} </span>)
  }
  else {
    return (
      <a href='#' {...props}>
        {children}
      </a>
      )
  }
}

export default Link