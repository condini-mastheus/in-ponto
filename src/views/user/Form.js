import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Recaptcha from 'react-recaptcha'
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

let recaptchaInstance = null

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userCode: '',
      captcha: '',
      captchaResponse: '',
    }
  }

  handleChange = name => event => {
    if(name === 'captcha') {
      recaptchaInstance.execute()
    }

    this.setState({
      [name]: event.target.value,
    })
  }
  
  render() {
    const { classes } = this.props
    return (
      <Grid className={classes.root} container direction="row" justify="center" alignItems="center">
        <Paper className={classes.paper}>
          {/* Branding */}
          <Grid>
            <Brand />
          </Grid>

          <Divider />
          
          {/* Form */}
          <Grid container spacing={24} alignItems={'flex-end'} justify={'center'}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="userCode"
                label="Digite seu código"
                className={classes.textField}
                value={this.state.userCode}
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
                value={this.state.captcha}
                onChange={this.handleChange('captcha')}
              >
                <FormControlLabel value="human" control={<Radio />} label="Não sou um robô!" />
              </RadioGroup>

              <Recaptcha 
                sitekey="6LcDdG0UAAAAAC20F_JJNeBKOnFpJXcYatlojxO4" 
                render="explicit" 
                hl={"pt-br"}
                ref={e => recaptchaInstance = e}
                size={'invisible'}
                verifyCallback={(response) => this.setState({ captchaResponse: response}) }  />
            </Grid>
          </Grid>
          
          <Grid container direction="row" justify="flex-end">
              <Button variant="contained" color="primary" className={classes.button}>
                Enviar
              </Button>
          </Grid>

        </Paper>
      </Grid>
    )
  }
}

export default withStyles(styles)(Form)
