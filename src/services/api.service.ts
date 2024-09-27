import axios from 'axios'
import { setModalState } from '../redux/slice/modalSlice'
import { store } from '../redux/store'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true'
  }
})

axiosClient.interceptors.request.use(
  async function (config) {
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    switch (response.status) {
      case 500:
        store.dispatch(
          setModalState({
            key: 'errorModal',
            isOpen: true
          })
        )
        break

      default:
        break
    }
    return response
  },
  async function (error) {
    return error.response
  }
)

export default axiosClient
