import axios, { type AxiosInstance } from "axios";

const api:AxiosInstance = axios.create({
    baseURL: "http://localhost:5000/todoapp",
    headers: {
        "Content-Type":"Application/json"
    }
})

export const createToDo = (payload:JSON) => api.post("/create", payload)

export default api;