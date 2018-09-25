import { takeLatest, put, all } from 'redux-saga/effects'

import actionCreators, { Types } from '../actionCreators'

import getPageInfo from './pageSaga'
import { getEmployees, createEmployees } from './employeesSaga'
import { authUser, checkAuth, logoutUser } from './authSaga'

import Api from '../../services/Api'

export default function* rootSaga() {
  const api = new Api()

  yield all([
    takeLatest(Types.PAGE_INFO_REQUEST, getPageInfo),
    takeLatest(Types.GET_EMPLOYEES_REQUEST, getEmployees({ api })),
    takeLatest(Types.CREATE_EMPLOYEES_REQUEST, createEmployees({ api })),
    takeLatest(Types.AUTH_REQUEST, authUser({ api })),
    takeLatest(Types.CHECK_AUTH_REQUEST, checkAuth({ api })),
    takeLatest(Types.LOGOUT_REQUEST, logoutUser({ api })),
    put(actionCreators.checkAuthRequest()),
  ])
  yield console.log('__ROOT__')
}
