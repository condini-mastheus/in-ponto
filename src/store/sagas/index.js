import { takeLatest, put, all } from 'redux-saga'

import ActionCreators, { Types } from '../actionCreators'

export default function* rootSaga() {
//   yield all([
//     takeLatest(Types.FUNCTION_REQUEST, teste),
//   ])
  yield console.log('__ROOT__')
}
