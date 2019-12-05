import axios from 'axios'

axios.defaults.baseURL = '/api'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = `http://localhost:${process.env.VUE_APP_SERVER_PORT}/api`
}
