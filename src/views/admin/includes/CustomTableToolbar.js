import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

// Ui
import { withStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import TextField from '@material-ui/core/TextField'
import Icon from '@material-ui/core/Icon'
import { lighten } from '@material-ui/core/styles/colorManipulator'

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  search: {
    color: theme.palette.text.secondary,
    flex: '1 1 60%',
  },
  title: {
    flex: '0 0 auto',
  },
  textField: {
    margin: 0,
  },
})

const CustomTableToolbar = (props) => {
  const { numSelected, classes } = props

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="subheading">
            {numSelected} selected
          </Typography>
        ) : (
          <Typography variant="title" id="tableTitle">
              Nutrition
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      {numSelected > 0 ? (
        <div className={classes.actions}>
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <Icon>delete</Icon>
            </IconButton>
          </Tooltip>
        </div>
      ) : (
        <div className={classes.search}>
          <TextField
            id="userCode"
            label="Pesquisar..."
            className={classes.textField}
              // value={userCode}
              // error={error.userCode}
              // onChange={}
            fullWidth
            margin="normal"
          />
        </div>
      )}
    </Toolbar>
  )
}

CustomTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
}

export default withStyles(toolbarStyles)(CustomTableToolbar)
