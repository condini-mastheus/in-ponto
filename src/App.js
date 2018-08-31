import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'

import store from './store'

import Form from './views/user/Form'
import Admin from './views/admin/Dashboard'

const App = () => (
  <Provider store={store}>
    <Router>
      <CssBaseline>
        <Route exact path="/" component={Form} />
        <Route exact path="/admin" component={Admin} />
      </CssBaseline>
    </Router>
  </Provider>
)

export default App
