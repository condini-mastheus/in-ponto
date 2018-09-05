import React from 'react'
import { render, shallow } from 'enzyme'

import Icon from '@material-ui/core/Icon'
import Brand from './Brand'

describe('<Brand />', () => {
  it('should render with classname .brand', () => {
    const wrapper = render(<Brand />)
    const element = wrapper
    expect(element.hasClass('brand')).toBe(true)
  })

  it('should render with classname .brand and .shorted', () => {
    const wrapper = render(<Brand short />)
    const element = wrapper
    expect(element.hasClass('shorted')).toBe(true)
  })

  it('should render with h1', () => {
    const wrapper = render(<Brand />)
    const element = wrapper.find('h1')
    expect(element.length).toBe(1)
  })

  it('should render <Icon />', () => {
    const wrapper = shallow(<Brand />)
    const element = wrapper.find(Icon).get(0)
    expect(element.props.className).toBe('brand-icon')
    expect(element.props.children).toBe('av_timer')
  })
})
