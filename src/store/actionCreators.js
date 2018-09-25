import { createActions } from 'reduxsauce'

export const { Types, Creators } = createActions({
  authRequest: ['email', 'password'],
  authSuccess: ['user'],
  authFailure: ['errorMessage'],

  checkAuthRequest: null,
  checkAuthSuccess: ['user'],
  checkAuthFailure: null,

  logoutRequest: null,
  logoutSuccess: null,

  pageInfoRequest: ['url'],
  pageInfoSuccess: ['info'],
  pageInfoFailure: null,

  getEmployeesRequest: null,
  getEmployeesSuccess: ['employees'],
  getEmployeesFailure: ['errorMessage'],

  createEmployeesRequest: ['newEmployee'],
  createEmployeesSuccess: ['employee'],
  createEmployeesFailure: ['errorMessage'],
})

export default Creators
