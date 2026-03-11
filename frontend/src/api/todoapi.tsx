import axios, { type AxiosInstance } from "axios";

const api:AxiosInstance = axios.create({
    baseURL: "http://localhost:5000/todoapp",
    headers: {
        "Content-Type":"Application/json"
    }
})

export const createToDo = async (payload:String) => 
    {
        try {
            await api.post("/create", payload)
        } catch(error:any){
            console.log(error)
        }
    }

export default api;