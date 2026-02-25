import { Router } from "express";
import { createTask } from "../controllers/toDoController.js";

const routes = Router();
routes.post("/criar", createTask)
routes.get("/criar", (req, res) => {
    res.send('Olá Mundo!');
})
routes.get('/', (req, res) => {
    res.send('Olá Mundo!');
});

export default routes;
