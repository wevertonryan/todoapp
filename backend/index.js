import { express } from "express";
import { cors } from "cors";
import { routes } from "./routes/route"

const app = new express();

app.use(express.json())

app.use(cors(
    {credentials: true, origin: "http://localhost/3000"}
))

app.use("/todoapp/", routes);

app.listen(5000)