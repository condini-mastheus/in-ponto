import React, { Component } from 'react'

import Grid from '@material-ui/core/Grid'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Paper from '@material-ui/core/Paper'
import Icon from '@material-ui/core/Icon'
import Typography from '@material-ui/core/Typography'


export class Form extends Component {
  state = {

  }
  render() {
    return (
      <Grid className="full-h" container direction="row" justify="center" alignItems="center">
        <Icon>av_timer</Icon>
        <Typography variant="title" gutterBottom>Title</Typography>
      </Grid>
    )
  }
}
export default Form
