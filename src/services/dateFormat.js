import PropTypes from 'prop-types'
import moment from 'moment'

const dateFormat = (props) => {
  const { date, format, currentFormat } = props
  if (!date) {
    throw new Error('Date was not defined')
  }

  if (!format) {
    throw new Error('Format was not defined')
  }

  if (date !== 'now' && !currentFormat) {
    throw new Error('Current date format was not defined')
  }

  if (date === 'now') {
    return moment().format(format)
  }

  return moment(date, currentFormat).format(format)
}

dateFormat.propTypes = {
  date: PropTypes.string.isRequired,
  currentFormat: PropTypes.string.isRequired, 
  format: PropTypes.string.isRequired,
}

export default dateFormat
