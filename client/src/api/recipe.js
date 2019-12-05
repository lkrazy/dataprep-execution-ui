import axios from 'axios'

const URI = 'recipe'
export default {
  getAll() {
    return axios.get(URI)
  },
  addAll(recipes) {
    return axios.post(URI, recipes)
  }
}
