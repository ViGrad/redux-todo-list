import React from 'react'

const FetchError = ({errorMessage, onRetry}) => (
  <div>
    <p> Failed to fetch data. {errorMessage} </p>
    <button onClick={onRetry}> Retry </button>
  </div>
)

export default FetchError