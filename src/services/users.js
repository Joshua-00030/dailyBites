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

// used todaysItems from log to get values below
// newObject should be { id: item.itemId, date: item.date }
const deleteItemFromToday = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${baseUrl}/deleteItemToday`, newObject, config)
  return response.data
}

const deleteUserItem = async newObject => {
  const config = {
    headers: { Authorization: token },
  }

  const response = await axios.post(`${baseUrl}/deleteUserItem`, newObject, config)
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
  const request = axios.get(`${baseUrl}/getCal/${username}`, config)
  return request.then(response =>response.data) }

  const updateCalorieLimit = (username, newCalorie) => {
    // const config = {
    //     headers: { Authorization: token },
    //   }
      
    const request = axios.put(`${ baseUrl }/updateCal/${username}`, {
      updateCalorie: newCalorie, 
      myusername: username})
    return request.then(response => response.data)
  }

  const updateHeight = async (username, newHeight) => {
    const config = {
      headers: { Authorization: token },
    }
    
    const response = await axios.put(`${ baseUrl }/updateHeight/${username}`, {
    height: newHeight, 
    username: username}, config)
    return response.data
}

const getHeight = async () => {
    const config = {
      headers: { Authorization: token },
    }
    
    const response = await axios.get(`${ baseUrl }/getHeight`,config)
    return response.data
}

  const addWeightEntry = async (username, newWeight) => {
    const config = {
      headers: { Authorization: token },
    }
    const newEntry = {
      weight: newWeight, 
      myusername: username,
      date: new Date()}

    const response = await axios.put(`${ baseUrl }/addWeight/${username}`, newEntry, config)
    return response.data
  }
  
  const getWeightHistory = async newObject =>{
    const config = {
      headers: { Authorization: token },
    }
  
    const response = await axios.post(`${baseUrl}/getWeightHistory`, newObject, config)
    return response.data
    
  }

export default { updateNutrients, setToken, addItemToHistory, getHistory, getCalorieTotal, updateCalorieLimit,
   deleteItemFromToday, deleteUserItem, addWeightEntry, getWeightHistory, updateHeight, getHeight }
