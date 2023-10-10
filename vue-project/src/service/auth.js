import axios from "./axios";

const Authenuser = {
    register(user) {
        return axios.post('/users', {user})
    }
}

export default Authenuser