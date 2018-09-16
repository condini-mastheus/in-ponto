import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

// Ui
import { withStyles } from '@material-ui/core/styles'

// custom
import Header from './includes/Header'
import Sidebar from './includes/Sidebar'
import Footer from './includes/Footer'

import Dashboard from './Dashboard'
import Employees from './Employees'

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    overflow: 'auto',
    paddingBottom: 50,
    minWidth: 0, // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar,
})

export const Admin = (props) => {
  const { match, classes, auth } = props

  if (auth.isAuthing) {
    return (
      <div className={classes.root}>
        <p>Carregando...</p>
      </div>
    )
  }

  if (!auth.isAuth) {
    return <Redirect to="/login" />
  }

  return (
    <div className={classes.root}>
      <Header />
      <Sidebar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <Typography noWrap>You think water moves fast? You should see ice.</Typography> */}
        <Route path={`${match.path}/`} exact component={Dashboard} />
        <Route path={`${match.path}/employees`} exact component={Employees} />
        {/* <Route path={`${match.path}/employees/new`} exact component={NewEmployee} /> */}
      </main>
      <Footer />
    </div>
  )
}

Admin.propTypes = {
  match: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})

const mapDispatchToProps = dispatch => ({
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Admin))
