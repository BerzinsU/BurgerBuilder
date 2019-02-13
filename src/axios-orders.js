import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-a8e30.firebaseio.com/'
})

export default instance;
