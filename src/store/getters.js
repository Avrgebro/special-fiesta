const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  forms: state => state.user.forms,
  censos: state => state.user.censos,

  nextformid: state => { return Math.max(...state.user.forms.map(form => form.id))+1 }
}
export default getters
