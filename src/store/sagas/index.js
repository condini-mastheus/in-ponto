import { takeLatest, put, all } from 'redux-saga/effects'

import actionCreators, { Types } from '../actionCreators'

import getPageInfo from './pageSaga'
import getEmployees from './employeesSaga'
import { authUser, checkAuth, logoutUser } from './authSaga'

export default function* rootSaga() {
  yield all([
    takeLatest(Types.PAGE_INFO_REQUEST, getPageInfo),
    takeLatest(Types.GET_EMPLOYEES_REQUEST, getEmployees),
    takeLatest(Types.AUTH_REQUEST, authUser),
    takeLatest(Types.CHECK_AUTH_REQUEST, checkAuth),
    takeLatest(Types.LOGOUT_REQUEST, logoutUser),
    put(actionCreators.checkAuthRequest()),
  ])
  yield console.log('__ROOT__')
}
