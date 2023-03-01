import axios from 'axios'
const baseUrl = 'http://141.148.175.82:3001/api/users'

let token = null

const setToken = newToken => {
    token = `Bearer ${newToken}`
  }
  
const updateNutrients = (newObject) => {
    const config = {    headers: { Authorization: token },  }
  const request = axios.put(`${ baseUrl }/addNutrient`, newObject, config)
  return request.then(response => response.data)
}

export default { updateNutrients, setToken }