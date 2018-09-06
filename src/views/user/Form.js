import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Ui
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Reaptcha from 'reaptcha'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

// Services
import validation from '../../services/validation'
import dateFormat from '../../services/dateFormat'

// custom components
import Brand from '../../components/Brand'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 3,
    height: '100%',
  },
  paper: {
    maxWidth: 700,
    width: '100%',
    padding: theme.spacing.unit * 3,
  },
  button: {
    marginTop: theme.spacing.unit,
  },
})


export class Form extends Component {
  constructor(props) {
    super(props)

    this.recaptchaInstance = null

    this.state = {
      userCode: '',
      userHuman: '',
      captcha: '',
      isCaptchaVerified: false,
      error: {},
    }
  }

  handleChange = name => (event) => {
    this.setState({
      [name]: event.target.value,
    })
  }

  handleCaptcha = () => () => {
    this.recaptchaInstance.execute()
  }

  handleVerify = (response) => {
    if (!response) return

    this.setState({
      userHuman: 'human',
      captcha: response,
      isCaptchaVerified: true,
    })
  }


  handleSubmit = () => (event) => {
    event.preventDefault()
    const {
      userCode, captcha, isCaptchaVerified, userHuman,
    } = this.state

    const error = {}
    error.userCode = !!validation({ userCode })
    error.userHuman = !!validation({ captcha }) && !!validation({ userHuman })

    if (error.userCode || (error.userHuman && isCaptchaVerified)) {
      this.setState({ error })
      return
    }

    this.setState({ error })

    const clockIn = {
      userCode,
      captcha,
      date: dateFormat({ date: 'now', format: 'YYYY-DD-MM HH:mm:ss' }),
    }

    console.log(clockIn)
  }

  render() {
    const { classes } = this.props
    const {
      userCode, isCaptchaVerified, error, userHuman,
    } = this.state

    return (
      <Grid className={classes.root} container direction="row" justify="center" alignItems="center">
        <Paper className={classes.paper}>
          {/* Branding */}
          <Grid>
            <Brand />
          </Grid>

          <Divider />

          {/* Form */}
          <form onSubmit={this.handleSubmit()} noValidate id="clockInForm">
            <Grid container spacing={24} alignItems="flex-end" justify="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  id="userCode"
                  label="Digite seu código"
                  className={classes.textField}
                  value={userCode}
                  error={error.userCode}
                  onChange={this.handleChange('userCode')}
                  fullWidth
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
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
              </Grid>
            </Grid>

            <Grid container direction="row" justify="flex-end">
              <Button
                id="submitClockIn"
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                disabled={!isCaptchaVerified}
              >
                  Enviar
              </Button>
            </Grid>
          </form>

        </Paper>
      </Grid>
    )
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Form)
