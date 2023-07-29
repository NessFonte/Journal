import axios from "axios"

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyDu9GJ2OVkIOQPDjaRVnCYfwgYl60nWl4Q '
    }
})

export default authApi
