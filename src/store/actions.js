import axios from 'axios'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

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
            setToken('token')
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
  }
};
