import axios from 'axios'

export default {
    register:(userData)=>axios.post("/v1/Auth/Register",userData).then(response=>response.data),
    login:(userData)=>axios.post("/v1/Auth/Login",userData).then(response=>response.data)
}