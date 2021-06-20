import axios from 'axios';

const getUsers = async() => {
    const instanceAxios = axios.create({
        baseURL: process.env.REACT_APP_URL
    });

    return await instanceAxios.get();
}

export default getUsers;
