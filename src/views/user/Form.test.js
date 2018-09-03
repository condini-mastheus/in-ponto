import React from 'react'
import { shallow } from 'enzyme'

import { Form } from './Form'

describe('<Form />', () => {
  const classes = {
    root: 'test',
    paper: 'test',
    textField: 'test',
    group: 'test',
    button: 'test',
  }

  const wrapper = shallow(<Form classes={classes} />)

  it('should render', () => {
    expect(wrapper.length).toBe(1)
  })

  it('should handle changes in text input', () => {
    const event = {
      target: {
        value: '2064',
      },
    }

    wrapper.find('#userCode').simulate('change', event)
    expect(wrapper.state().userCode).toBe('2064')
  })

  it('should handle in captcha', () => {
    wrapper.instance().recaptchaInstance = {
      execute: jest.fn(),
    }
    wrapper.update()

    wrapper.find('#captcha').simulate('change')
    const captchaMock = wrapper.instance().recaptchaInstance.execute

    expect(captchaMock.mock.calls.length).toBe(1)

    wrapper.setState({
      captcha: 'human',
      isCaptchaVerified: true,
    })

    expect(wrapper.state().captcha).toBe('human')
    expect(wrapper.state().isCaptchaVerified).toBe(true)
  })

  it('should call on sendClockIn on form submit', () => {
    const event = {
      preventDefault: jest.fn(),
    }

    wrapper.find('#clockInForm').simulate('submit', event)
    // console.log(event.preventDefault.mock.calls)
    expect(event.preventDefault.mock.calls.length).toBe(1)
  })
})
