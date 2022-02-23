import axios from "axios";

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json'
    }

})

// LIST
export const sendOtp = (data) => api.post('/api/send-otp', data)
export const verifyOtp = (data) => api.post('/api/verify-otp', data)

export default api