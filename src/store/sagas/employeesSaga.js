import { put, call } from 'redux-saga/effects'

import ActionCreators from '../actionCreators'

export const getEmployees = ({ api }) => function* ({ company }) {
  try {
    const employees = yield call(api.getEmployees, company)

    if (employees) {
      yield put(ActionCreators.getEmployeesSuccess(employees))
    } else {
      yield put(ActionCreators.getEmployeesFailure())
    }
  } catch (error) {
    yield put(ActionCreators.getEmployeesFailure())
  }
}
