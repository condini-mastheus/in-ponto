import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Ui
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Icon from '@material-ui/core/Icon'

// Routing
import { Link } from 'react-router-dom'

// State management
import ActionsCreators from '../../../store/actionCreators'

// custom
import sidebar from './sidebar.json'

const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
})

export const Sidebar = (props) => {
  const { classes } = props

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List component="nav" id="main">
        {
          Object.keys(sidebar.main).map((key) => {
            const item = sidebar.main[key]
            return (
              <ListItem
                button
                key={item.key}
                component={Link}
                to={`${item.to}`}
                onClick={() => props.loadPageInfo(key)}
                // onClick={handleClick(key)}
              >
                <ListItemIcon>
                  <Icon>{item.icon}</Icon>
                </ListItemIcon>
                <ListItemText primary={item.name} />
              </ListItem>
            )
          })
        }
        {/* { sidebar.main } */}
      </List>

      <Divider />

      <List component="nav" id="config">
        { sidebar.config.map(item => (
          <ListItem button key={item.key}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  loadPageInfo: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  loadPageInfo: url => dispatch(ActionsCreators.pageInfoRequest(url)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Sidebar))
