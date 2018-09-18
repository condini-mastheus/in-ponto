// Firebase requests starts here
import { auth, database } from './firebase'

const Api = () => {
  // const getAuthHeader = () => {
  //   const token = localStorage.getItem('token')
  //   return {
  //     headers: { Authorization: `Bearer ${token}` },
  //   }
  // }

  // const onCreate = (endpoint, data) => client.post(endpoint, data, getAuthHeader())
  // const onUpdate = (endpoint, data) => client.patch(endpoint, data, getAuthHeader())
  // const onDelete = endpoint => client.delete(endpoint, getAuthHeader())

  const onRead = endpoint => new Promise((resolve, reject) => {
    database.ref(endpoint).on('value', (snapshot) => {
      const data = snapshot.val()
      resolve(data)
    }, (error) => {
      reject(new Error(error))
    })
  })

  const authWithEmailAndPassword = (email, password) => new Promise((resolve, reject) => {
    const data = auth.signInWithEmailAndPassword(email, password).catch((error) => {
      reject(new Error(error))
    })

    resolve(data)
  })

  const authStateChanged = () => new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        resolve(user)
      } else {
        reject(new Error('Unauthenticated user'))
      }
    })
  })

  const authDestroy = () => auth.signOut()

  return {
    getUser: id => onRead(`/users/${id}`),
    // updateUser: data => update(`/users/${data.id}`, data),
    // createUser: data => create('/users/', data),

    getEmployees: companyId => onRead(`/employees/${companyId}`),
    // removeRun: id => del(`/runs/${id}`),
    // createRun: data => create('/runs/', data),
    // updateRun: data => update(`/runs/${data.id}`, data),
    onAuthWithCredentials: (email, password) => authWithEmailAndPassword(email, password),
    onAuthStateChanged: () => authStateChanged(),
    onAuthDestroy: () => authDestroy(),
  }
}

export default Api
