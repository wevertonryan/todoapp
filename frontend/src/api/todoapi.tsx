import axios, { type AxiosInstance } from "axios";

const api:AxiosInstance = axios.create({
    baseURL: "http://localhost:5000/todoapp",
    headers: {
        "Content-Type":"Application/json"
    }
})

export const listToDo = () => api.get("/list");
export const findToDo = (parametros:String) => api.get("/find" + parametros)
export const createToDo = (payload:String) => api.post("/create", payload);
export const updateToDo = (payload:String) => api.put("/update", payload);
export const deleteToDo = (id:String) => api.delete("/delete");

export default api;