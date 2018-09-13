import { takeLatest, put, all } from 'redux-saga/effects'

import /* actionCreators, */ { Types } from '../actionCreators'

import getPageInfo from './pageSaga'
import getEmployees from './employeesSaga'

export default function* rootSaga() {
  yield all([
    takeLatest(Types.PAGE_INFO_REQUEST, getPageInfo),
    takeLatest(Types.GET_EMPLOYEES_REQUEST, getEmployees),
  ])
  yield console.log('__ROOT__')
}
