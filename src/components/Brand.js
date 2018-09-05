import React from 'react'
import PropTypes from 'prop-types'

// Ui
import Icon from '@material-ui/core/Icon'

const Brand = (props) => {
  const { short } = props
  return (
    <div className={`brand ${short ? 'shorted' : ''}`}>
      <div>
        <Icon className="brand-icon">av_timer</Icon>
        <h1><strong>in</strong> ponto</h1>
      </div>
    </div>
  )
}

Brand.propTypes = {
  short: PropTypes.bool,
}

Brand.defaultProps = {
  short: false,
}

export default Brand
