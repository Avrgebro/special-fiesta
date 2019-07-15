import axios from 'axios'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

//const ruta = state.server

export default {
  Login({ commit, state }, user) {
    let ruta = state.server;
    let res = ruta.concat('api/usuario/login');
    alert(res)
    return new Promise((resolve, reject) => {
      axios.post(res, user)
        .then(response => {
          alert(JSON.stringify(response.data))
          if (response.data.code === 200) {
            commit('Login', response.data)
            setToken(response.data.idRol)
            alert('Usuario commited')
          }
          resolve(response);
        })
        .catch(e => {
          console.log(e);
          reject(e);
        });
    });
  },
  Logout({commit,state}) {
    return new Promise((resolve,reject) => {
      removeToken()
      resetRouter()
      resolve()
    })
  },
  getUsers({commit, state}) {
    let ruta = state.server
    let url = ruta.concat('api/usuario/get')
    return new Promise((resolve, reject) => {
      axios.get(url).then(response => {
          resolve(response)
        }).catch(e => {
          alert(e)
          reject(e)
        })
    })
  },

  createUser({commit, state}, user) {
    let ruta = state.server
    let url = ruta.concat('api/usuario/insertar')
    return new Promise((resolve, reject) => {
      axios.post(url, user).then(response => {
          resolve(response)
        }).catch(e => {
          alert(e)
          reject(e)
        })
    })
  }
}
