import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Ui
import { withStyles } from '@material-ui/core/styles'

const styles = {

}

export class Employees extends Component {
  state = {
  }

  // componentDidMount() {
  //   document.title = 'Funcionários | In Ponto'
  // }

  render() {
    return (
      <p>Funcionários</p>
    )
  }
}

Employees.propTypes = {
}

export default withStyles(styles)(Employees)
