import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import Grid from '@material-ui/core/Grid'

import store from './store'

import Form from './views/user/Form'
import Admin from './views/admin/Dashboard'


const App = () => (
  <Provider store={store}>
    <Router>
      <Grid className="full-h" container>
        <Route exact path="/" component={Form} />
        <Route exact path="/admin" component={Admin} />
      </Grid>
    </Router>
  </Provider>
)

export default App
