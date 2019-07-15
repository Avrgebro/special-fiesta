import axios from 'axios'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

//const ruta = state.server

export default {
  Login({ commit, state }, user) {
    let ruta = state.server;
    let res = ruta.concat('api/usuario/login');
    return new Promise((resolve, reject) => {
      axios.post(res, user)
        .then(response => {
          if (response.data.code === 200) {
            commit('Login', response.data)
            setToken(response.data.idRol)
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

  GetFormularios({commit,state}) {
    let ruta = state.server
    let res = ruta.concat('api/formulario/get')
    return new Promise((resolve, reject) => {
      axios.get(res)
      .then(response => {
        commit('getFormularios',response.data)
        resolve(response)
      })
      .catch(e => {
        console.log(e)
        reject(e)
      })
    })
  },

  StoreFormulario({commit,state}, formulario) {
    let ruta = state.server
    let res = ruta.concat('api/formulario/crear')
    return new Promise((resolve,reject) => {
      axios.post(res, formulario)
      .then(response => {
        commit('storeFormulario',response.data)
        resolve(response)
      })
      .catch(e => {
        console.log(e)
        reject(e)
      })
    })
  },

  GetCensos({commit,state}) {
    let ruta = state.server
    let res = ruta.concat('api/censo/get')
    return new Promise((resolve,reject) => {
      axios.get(res)
      .then(response => {
        commit('getCensos',response.data)
        resolve(response)
      })
      .catch(e => {
        console.log(e)
        reject(e)
      })
    })
  },

  StoreCenso({commit,state}, censo) {
    let ruta = state.server
    let res = ruta.concat('api/censo/crear')
    return new Promise((resolve,reject) => {
      axios.post(res, censo)
      .then(response => {
        commit('storeCenso',response.data)
        resolve(response)
      })
      .catch(e => {
        console.log(e)
        reject(e)
      })
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

  getFams({commit, state}) {
    let ruta = state.server
    let url = ruta.concat('api/vivienda/get')
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
