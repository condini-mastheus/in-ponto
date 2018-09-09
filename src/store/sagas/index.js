import { takeLatest, put, all } from 'redux-saga/effects'

import /* actionCreators, */ { Types } from '../actionCreators'

import getPageInfo from './pageSaga'

export default function* rootSaga() {
  yield all([
    takeLatest(Types.PAGE_INFO_REQUEST, getPageInfo),
  ])
  yield console.log('__ROOT__')
}
