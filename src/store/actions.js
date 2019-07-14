import axios from 'axios';

export default {
  Login({ commit, state }, user) {
    let ruta = state.server;
    let res = ruta.concat('api/usuario/login');
    return new Promise((resolve, reject) => {
      axios
        .post(res, {
          email: user.correo,
          password: user.password
        })
        .then(response => {
          if (response.data.status) {
            commit('Login', response.data);
          }
          resolve(response);
        })
        .catch(e => {
          reject(e);
        });
    });
  }
};
