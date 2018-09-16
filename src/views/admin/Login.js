import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

// Ui
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

//
import actionCreator from '../../store/actionCreators'

// Services
import validation from '../../services/validation'

// custom components
import Brand from '../../components/Brand'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 3,
    height: '100%',
  },
  paper: {
    maxWidth: 400,
    width: '100%',
    padding: theme.spacing.unit * 3,
  },
  button: {
    marginTop: theme.spacing.unit,
  },
})


export class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: '',
      password: '',
      error: {},
      errorMessage: {},
    }
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit = () => (event) => {
    event.preventDefault()
    const { user, password } = this.state
    const { authUser } = this.props

    const userInputIsValid = validation({ user })
    const passInputIsValid = validation({ user })

    const error = {}
    error.user = !!userInputIsValid
    error.password = !!passInputIsValid

    if (error.user || error.password) {
      const errorMessage = {}
      errorMessage.user = userInputIsValid
      errorMessage.password = passInputIsValid

      this.setState({ error, errorMessage })
      return
    }

    this.setState({ error })

    const auth = {
      user,
      password,
    }

    authUser(auth)
  }

  render() {
    const { classes, auth } = this.props
    const {
      user, password, error, errorMessage,
    } = this.state

    if (auth.isAuth) {
      return <Redirect to="/admin" />
    }

    return (
      <Grid className={classes.root} container direction="row" justify="center" alignItems="center">
        <Paper className={classes.paper}>
          {/* Branding */}
          <Grid>
            <Brand />
          </Grid>

          <Divider />

          {/* Form */}
          <form onSubmit={this.handleSubmit()} noValidate id="signIn">
            <Grid container spacing={16} alignItems="flex-end" justify="center">
              <Grid item xs={12} sm={12}>
                <TextField
                  id="user"
                  label="Usuário"
                  className={classes.textField}
                  value={user}
                  error={error.user}
                  onChange={this.handleChange('user')}
                  helperText={errorMessage.user}
                  fullWidth
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  id="password"
                  label="Senha"
                  type="password"
                  className={classes.textField}
                  value={password}
                  error={error.password}
                  onChange={this.handleChange('password')}
                  helperText={errorMessage.password}
                  fullWidth
                  margin="normal"
                />
              </Grid>

              {/* <Grid item xs={12} sm={6}>
                <FormControl required error={error.userHuman} component="fieldset">
                  <FormHelperText>Você é um robô?</FormHelperText>
                  <RadioGroup
                    aria-label="captcha"
                    name="captcha"
                    className={classes.group}
                    value={userHuman}
                    id="captcha"
                    onChange={this.handleCaptcha()}
                  >
                    <FormControlLabel value="human" control={<Radio />} label="Não sou um robô!" />
                  </RadioGroup>
                  <Reaptcha
                    ref={e => (this.recaptchaInstance = e)}
                    sitekey={process.env.REACT_APP_RECAPTCHA_KEY}
                    onVerify={response => this.handleVerify(response)}
                    size="invisible"
                  />
                </FormControl>
              </Grid> */}
            </Grid>

            <Grid container direction="row" justify="flex-end">
              <Button
                id="submitClockIn"
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Entrar
              </Button>
            </Grid>
          </form>

          { auth.error &&
            <p>{auth.errorMessage}</p>
          }

        </Paper>
      </Grid>
    )
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  authUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
})

const mapDispatchToProps = dispatch => ({
  authUser: auth => dispatch(actionCreator.authRequest(auth.user, auth.password)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Login))
