import axios from "./axios";

const Authenuser = {
    register(user) {
        return axios.post('/users', {user})
    },
    login(user) {
      return axios.post('/users/login', {user})
    },
    getUser() {
      return axios.get('/user')
    }
}

export default Authenuser