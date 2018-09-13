import { put } from 'redux-saga/effects'
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

export default function* getEmployees() {
  // let employees = {}
  yield database.ref('users').on('value', (snapshot) => {
    console.log(snapshot.val())
  })


  // if ((employees).length > 0) {
  //   yield put(ActionCreators.getEmployeesSuccess(employees))
  // } else {
  //   yield put(ActionCreators.getEmployeesFailure())
  // }
}


// export const getEmployees = ({ database }) => function* (action) {
//   console.log('Foi')
// }
