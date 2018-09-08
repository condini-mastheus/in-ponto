import React from 'react'
import PropTypes from 'prop-types'

// Ui
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Icon from '@material-ui/core/Icon'

import { Link } from 'react-router-dom'

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
  const { match, classes } = props

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List component="nav" id="main">
        { sidebar.main.map(item => (
          <ListItem button key={item.key} component={Link} to={`${match.path}${item.to}`}>
            <ListItemIcon>
              <Icon>{item.icon}</Icon>
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
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
  match: PropTypes.object.isRequired,
}

export default withStyles(styles)(Sidebar)
