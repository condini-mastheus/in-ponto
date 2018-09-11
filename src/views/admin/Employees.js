import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Ui
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'

// custom
import CustomTable from './includes/CustomTable'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}


const styles = theme => ({
  root: {
    position: 'relative',
    paddingBottom: theme.spacing.unit * 7,
  },
  button: {
    margin: theme.spacing.unit,
    position: 'fixed',
    bottom: theme.spacing.unit * 4,
    right: theme.spacing.unit * 4,
  },
  paper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  modalButton: {
    marginTop: theme.spacing.unit,
  },
  closeModalButton: {
    margin: 0,
    position: 'absolute',
    top: 0,
    right: 0,
  },
})

export class Employees extends Component {
  state = {
    openModal: false,
    name: '',
  }

  handleOpen = () => {
    this.setState({ openModal: true })
  }

  handleClose = () => {
    this.setState({ openModal: false })
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit = () => (event) => {
    event.preventDefault()
  }

  // componentDidMount() {
  //   document.title = 'Funcionários | In Ponto'
  // }

  render() {
    const { classes } = this.props
    const { openModal, name } = this.state
    return (
      <div className={classes.root}>
        <CustomTable />
        <Button
          variant="fab"
          color="secondary"
          aria-label="Add"
          className={classes.button}
          onClick={this.handleOpen}
          // component={Link}
          // to="/admin/employees/new"
        >
          <Icon>add</Icon>
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={openModal}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Tooltip title="Fechar">
              <IconButton
                aria-label="Fechar"
                className={classes.closeModalButton}
                onClick={this.handleClose}
              >
                <Icon>close</Icon>
              </IconButton>
            </Tooltip>

            <Typography variant="title">
              Novo Funcionário
            </Typography>

            <form onSubmit={this.handleSubmit()} noValidate id="employeeSubmit">
              <Grid container justify="flex-end">
                <Grid item xs={12}>
                  <TextField
                    id="name"
                    label="Digite o nome"
                    className={classes.textField}
                    value={name}
                    // error={error.userCode}
                    onChange={this.handleChange('name')}
                    fullWidth
                    margin="normal"
                  />
                </Grid>

                <Grid container justify="flex-end">
                  <Button
                    id="submitClockIn"
                    type="submit"
                    variant="contained"
                    color="secondary"
                    className={classes.modalButton}
                  >
                    CRIAR
                  </Button>
                </Grid>

              </Grid>
            </form>
          </div>
        </Modal>
      </div>
    )
  }
}

Employees.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Employees)
