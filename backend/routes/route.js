import { Router } from "express";
import { createTask } from "../controllers/toDoController.js";

const routes = Router();
routes.post("/create", createTask)

routes.get('', (req, res) => {
    res.send('Olá Mundo!');
});

export default routes;