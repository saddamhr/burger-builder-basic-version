import axios from 'axios';

const instance = axios.create({
    baseURL = 'https://react-my-burger-db313.firebaseio.com/'
})

export default instance;