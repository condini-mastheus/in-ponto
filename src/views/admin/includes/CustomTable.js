import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Ui
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'

// Custom
import CustomTableHead from './CustomTableHead'
import CustomTableToolbar from './CustomTableToolbar'

let counter = 0
function createData(name, calories, fat, carbs, protein) {
  counter += 1
  return {
    id: counter, name, calories, fat, carbs, protein,
  }
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index])
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map(el => el[0])
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy)
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  clickable: {
    cursor: 'pointer',
  },
})

class CustomTable extends Component {
    state = {
      order: 'desc',
      orderBy: 'name',
      selected: [],
      data: [],
      page: 0,
      rowsPerPage: 10,
    }

    componentDidMount() {
      const { data } = this.props
      this.setState({ data })
    }

    handleRequestSort = (event, property) => {
      const orderBy = property
      let order = 'desc'

      if (this.state.orderBy === property && this.state.order === 'desc') {
        order = 'asc'
      }

      this.setState({ order, orderBy })
    }

    handleSelectAllClick = (event) => {
      if (event.target.checked) {
        this.setState(state => ({ selected: state.data.map(n => n.id) }))
        return
      }
      this.setState({ selected: [] })
    }

    handleCheckboxClick = (event, id) => {
      event.stopPropagation()

      const { selected } = this.state
      const selectedIndex = selected.indexOf(id)
      let newSelected = []

      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id)
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1))
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1))
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        )
      }

      this.setState({ selected: newSelected })
    }

    handleRowClick = (event, id) => {
      console.log('a')
    }

    handleChangePage = (event, page) => {
      this.setState({ page })
    }

    handleChangeRowsPerPage = (event) => {
      this.setState({ rowsPerPage: event.target.value })
    }

    isSelected = id => this.state.selected.indexOf(id) !== -1

    render() {
      const { classes, headerCells } = this.props
      const {
        data, order, orderBy, selected, rowsPerPage, page,
      } = this.state
      const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage)

      return (
        <Paper className={classes.root}>
          <CustomTableToolbar numSelected={selected.length} />
          <div className={classes.tableWrapper}>
            <Table className={classes.table} aria-labelledby="tableTitle">
              <CustomTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={this.handleSelectAllClick}
                onRequestSort={this.handleRequestSort}
                rowCount={data.length}
                headerCells={headerCells}
              />
              <TableBody>
                {stableSort(data, getSorting(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    const isSelected = this.isSelected(row.id)
                    return (
                      <TableRow
                        hover
                        onClick={event => this.handleRowClick(event, row.id)}
                        role="checkbox"
                        aria-checked={isSelected}
                        tabIndex={-1}
                        key={row.id}
                        className={classes.clickable}
                        selected={isSelected}
                      >
                        {
                          Object.keys(row).map((key) => {
                            if (key === 'id') {
                              return (
                                <TableCell padding="checkbox" key={key}>
                                  <Checkbox
                                    checked={isSelected}
                                    onClick={event => this.handleCheckboxClick(event, row.id)}
                                  />
                                </TableCell>
                              )
                            }

                            return <TableCell component="th" scope="row" padding="none" key={key}>{row[key]}</TableCell>
                          })
                        }
                        
                      </TableRow>
                    )
                  })}
                {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          <TablePagination
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
      )
    }
}

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  headerCells: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
}

export default withStyles(styles)(CustomTable)
