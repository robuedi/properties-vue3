//setup axios
import axios from 'axios'

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.baseURL = `${import.meta.env.VITE_API_URL}`
axios.defaults.withCredentials = true

// setup query builder
import { Model } from 'vue-api-query'

// inject global axios instance as http client to Model
Model.$http = axios
