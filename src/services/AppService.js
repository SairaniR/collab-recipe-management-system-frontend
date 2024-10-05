import axios from "axios";
const baseUrl= 'http://localhost:3000'
const appService= {
    createUser: (user)=>{
        const url= `${baseUrl}/auth/register`;
        return axios.post(url, user)
    },

    loginUser: (user)=>{
        const url= `${baseUrl}/auth/login`;
        return axios.post(url, user)
    }
}

export default appService

