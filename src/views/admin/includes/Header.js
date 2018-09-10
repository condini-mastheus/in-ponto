import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

// Ui
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import Icon from '@material-ui/core/Icon'

// State management
import ActionsCreators from '../../../store/actionCreators'

const styles = theme => ({
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
})

export class Header extends Component {
  state = {
    auth: true,
    anchorEl: null,
  }

  componentDidMount() {
    const { location, loadPageInfo } = this.props

    console.log(this.props)

    loadPageInfo(location.pathname)
  }

  componentDidUpdate(prevProps) {
    const { page } = this.props

    if (page.data.name !== prevProps.page.data.name) {
      document.title = `${page.data.name} | In Ponto`
      return true
    }

    return false
  }

  handleChange = (event) => {
    this.setState({ auth: event.target.checked })
  }

  handleMenu = (event) => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes, page } = this.props
    const { auth, anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>

          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <Icon>menu</Icon>
          </IconButton>

          <Typography variant="title" color="inherit" className={classes.flex}>
            { page.data.name }
          </Typography>

          {auth && (
          <div>
            <IconButton
              aria-owns={open ? 'menu-appbar' : null}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            >
              <Icon>perm_identity</Icon>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>My account</MenuItem>
            </Menu>
          </div>
          )}
        </Toolbar>
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  loadPageInfo: PropTypes.func.isRequired,
}


const mapStateToProps = state => ({
  page: state.page,
})

const mapDispatchToProps = dispatch => ({
  loadPageInfo: url => dispatch(ActionsCreators.pageInfoRequest(url)),
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(withRouter(Header)))
