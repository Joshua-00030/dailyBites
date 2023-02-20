import axios from 'axios'
const baseUrl = 'http://141.148.175.82:3001/api/login'

const login = async credentials => {
  const response = await axios.post(baseUrl, credentials)
  return response.data
}

export default { login }