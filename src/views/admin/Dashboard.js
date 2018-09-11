import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Ui
import { withStyles } from '@material-ui/core/styles'

const styles = {

}

export class Dashboard extends Component {
  state = {
  }

  // componentDidMount() {
  //   document.title = 'Funcionários | In Ponto'
  // }

  render() {
    return (
      <p>Dash</p>
    )
  }
}

Dashboard.propTypes = {
}

export default withStyles(styles)(Dashboard)
