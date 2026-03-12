import { Router } from "express";
import { findTask, getAllTasks, createTask, updateTask, deleteTask } from "../controllers/toDoController.js";

const routes = Router();
routes.get("/find", findTask)
routes.get("/getAll", getAllTasks)
routes.post("/create", createTask)
routes.put("/update", updateTask)
routes.delete("/delete", deleteTask)

export default routes;