import PropTypes from 'prop-types'
import moment from 'moment'

const DateFormat = (props) => {
  const { date, format } = props
  return moment(date).format(format)
}

DateFormat.propTypes = {
  date: PropTypes.object.isRequired,
  format: PropTypes.string.isRequired,
}

export default DateFormat
