import axios from 'axios'

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
            //setToken(response.data.email)
            alert('Usuario commited')
          }
          resolve(response);
        })
        .catch(e => {
          console.log(e);
          reject(e);
        });
    });
  }
};
