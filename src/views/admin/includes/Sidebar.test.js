import React from 'react'
import { shallow } from 'enzyme'

import ListItem from '@material-ui/core/ListItem'

import { Sidebar } from './Sidebar'
import sidebar from './sidebar.json'

describe('<Sidebar />', () => {
  const classes = {
    toolbar: 'test',
  }
  const match = {
    path: '/admin',
  }

  const wrapper = shallow(<Sidebar classes={classes} match={match} />)

  it('should render', () => {
    expect(wrapper.length).toBe(1)
  })

  it('should render main menu following sidebar.json', () => {
    // List
    const element = wrapper.find('#main').find(ListItem)
    expect(element.length).toBe(sidebar.main.length)
  })

  it('should render config menu following sidebar.json', () => {
    // List
    const element = wrapper.find('#config').find(ListItem)

    expect(element.length).toBe(sidebar.config.length)
  })
})
