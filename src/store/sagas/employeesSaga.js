import { put, call } from 'redux-saga/effects'
// import { eventChannel } from 'redux-saga'

import ActionCreators from '../actionCreators'

import { database } from '../../services/firebase'

// function createEventChannel() {
//   const listener = eventChannel((emit) => {
//     database.ref('users').on('value', snapshot => emit(snapshot.val()))
//     // database.ref('items')
//     //   .on('child_added', data => emit(data.val());
//     return () => database.ref('users').off(listener)
//   })

//   return listener
// }

function connect() {
  return new Promise((resolve) => {
    database.ref('users').on('value', resolve)
  })
}


// if (snapshot.val() === true)
//   yield put(actions.connected());

export default function* getEmployees() {
  const employeesPromisse = yield call(connect)

  // yield database.ref('users').on('value', (snapshot) => {
  //   employees = snapshot.val()
  // })

  const employees = [employeesPromisse.val()]

  if (employees) {
    yield put(ActionCreators.getEmployeesSuccess(employees))
  } else {
    yield put(ActionCreators.getEmployeesFailure())
  }
}


// export const getEmployees = ({ database }) => function* (action) {
//   console.log('Foi')
// }
