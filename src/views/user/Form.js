import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Reaptcha from 'reaptcha'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

// custom components
import Brand from '../../components/Brand'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    padding: theme.spacing.unit * 3,
    height: '100%'
  },
  paper: {
    maxWidth: 700,
    width: '100%',
    padding: theme.spacing.unit * 3,
  },
  button: {
    marginTop: theme.spacing.unit
  }
})

export class Form extends Component {
  constructor(props) {
    super(props)

    this.recaptchaInstance = null

    this.state = {
      userCode: '',
      captcha: '',
      isCaptchaVerified: false,
    }
  }

  handleChange = name => event => {
    if(name === 'captcha') {
      this.recaptchaInstance.execute()
    }

    this.setState({
      [name]: event.target.value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { userCode, captcha, isCaptchaVerified } = this.state

    // if (!userCode || (captcha === 'human' && isCaptchaVerified)) {
    //   alert('ERROR')
    //   return
    // }

    console.log(this.state)
    console.log('FOI');
  }

  render() {
    const { classes } = this.props
    const { userCode, captcha, isCaptchaVerified } = this.state
    
    return (
      <Grid className={classes.root} container direction="row" justify="center" alignItems="center">
        <Paper className={classes.paper}>
          {/* Branding */}
          <Grid>
            <Brand />
          </Grid>

          <Divider />

          {/* Form */}
          <form onSubmit={(event) => this.handleSubmit(event)}>
            <Grid container spacing={24} alignItems={'flex-end'} justify={'center'}>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="userCode"
                  label="Digite seu código"
                  className={classes.textField}
                  value={userCode}
                  onChange={this.handleChange('userCode')}
                  fullWidth
                  margin="normal"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <RadioGroup
                  aria-label="captcha"
                  name="captcha"
                  className={classes.group}
                  value={captcha}
                  onChange={this.handleChange('captcha')}
                >
                  <FormControlLabel value="human" control={<Radio />} label="Não sou um robô!" />
                </RadioGroup>
                <Reaptcha
                  ref={e => (this.recaptchaInstance = e)}
                  sitekey="6LcDdG0UAAAAAC20F_JJNeBKOnFpJXcYatlojxO4"
                  onVerify={() => {
                    this.setState({ isCaptchaVerified: true })
                  }}
                  size="invisible"
                  />
              </Grid>
            </Grid>

            <Grid container direction="row" justify="flex-end">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  disabled={!isCaptchaVerified}>
                  Enviar
                </Button>
            </Grid>
          </form>

        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(Form)
