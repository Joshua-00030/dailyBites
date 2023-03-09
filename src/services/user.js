import axios from 'axios'
const baseUrl = 'http://141.148.175.82:3001/api/users'

let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getCalorieTotal = (username) => {
  const config = { headers: { Authorization: token },  }
  const request = axios.get(`${baseUrl}/${username}`, config)
  return request.then(response =>response.data) }

const updateCalorieLimit = (username, newCalorie) => {
    // const config = {
    //     headers: { Authorization: token },
    //   }
      
    const request = axios.put(`${ baseUrl }/${username}`, {
      updateCalorie: newCalorie, 
      myusername: username})
    return request.then(response => response.data)
  }

export default { setToken, updateCalorieLimit, getCalorieTotal}