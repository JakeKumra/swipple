import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/notes'

// returns a promise 
const getAll = () => {
  return axios.get(baseUrl)
}

const getOne = (id) => {
    return axios.get(`${baseUrl}/${id}`)
}

const create = newObject => {
  return axios.post(baseUrl, newObject)
}

const update = (id, newObject) => {
  return axios.put(`${baseUrl}/${id}`, newObject)
}
export {getAll, getOne, create, update}