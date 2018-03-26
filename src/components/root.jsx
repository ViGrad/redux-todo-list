import React from 'react'

import App from './app'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Link } from "react-router-dom";

  
const Root = ({store}) => (
  <Provider store={store} >
    <BrowserRouter>
      <Route path='/:active?' component={App} />
    </BrowserRouter>
  </Provider>
)

export default Root