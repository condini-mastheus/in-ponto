import { put } from 'redux-saga/effects'

import ActionCreators from '../actionCreators'
import sidebar from '../../views/admin/includes/sidebar.json'

export default function* getPageInfo(action) {
  const { url } = action

  const info = sidebar.main[url] || {}

  if (Object.keys(info).length > 0) {
    yield put(ActionCreators.pageInfoSuccess(info))
  } else {
    yield put(ActionCreators.pageInfoFailure())
  }
}
