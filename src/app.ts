import express from "express";
import { routers } from "./routes";

const app = express()

app.use(routers)
app.get('/', (req, res) => {
    res.send('Hello World!')
})
export { app }