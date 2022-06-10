import express, { response } from "express";
import { routers } from "./routes";

const app = express()

app.use(routers)

app.get('/', () => { })