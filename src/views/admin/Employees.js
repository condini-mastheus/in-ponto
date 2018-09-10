import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Ui
import { withStyles } from '@material-ui/core/styles'

// custom
import CustomTable from './includes/CustomTable'

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
      <CustomTable />
    )
  }
}

Employees.propTypes = {
}

export default withStyles(styles)(Employees)
