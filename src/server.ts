import express from "express"
import { app } from "./app"
const server = express()
server.use(app)
server.listen(8080, () => console.log('Server was Running on port 8080'))