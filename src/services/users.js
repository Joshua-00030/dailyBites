import axios from 'axios'
const baseUrl = 'http://141.148.175.82:3001/api/users'

let token = null

const setToken = async newToken => {
    token = `Bearer ${newToken}`
  }
  
const updateNutrients = (newObject) => {
    const config = {    headers: { Authorization: token },  }
  const request = axios.put(`${ baseUrl }/addNutrient`, newObject, config)
  return request.then(response => response.data)
}

const addItemToHistory = async newObject =>{
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.put(`${baseUrl}/addItemToHistory`, newObject, config)
  return response.data
  
}

const getHistory = async newObject =>{
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${baseUrl}/getHistory`, newObject, config)
  return response.data
  
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

export default { updateNutrients, setToken, addItemToHistory, getHistory, getCalorieTotal, updateCalorieLimit }