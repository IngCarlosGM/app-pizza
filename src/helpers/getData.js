import axios from 'axios';

const getData = async() => {
    const instanceAxios = axios.create({
        baseURL: process.env.REACT_APP_URL
    });

    return await instanceAxios.get();
}

export default getData;
