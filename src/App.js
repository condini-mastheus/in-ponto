import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'

import store from './store'

import Form from './views/user/Form'
import Admin from './views/admin'
import Login from './views/admin/Login'

const App = () => (
  <Provider store={store}>
    <Router>
      <CssBaseline>
        <Route exact path="/" component={Form} />
        <Route path="/admin" component={Admin} />
        <Route path="/login" exact component={Login} />
      </CssBaseline>
    </Router>
  </Provider>
)

export default App
