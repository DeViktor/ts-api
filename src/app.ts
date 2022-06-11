import 'dotenv/config'
import express from "express";
import { routers } from "./routes";

const app = express()
app.use(express.json())

app.use(routers)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/oauth', (req, response) => {
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`)
})

app.get('/signin/callback', (req, res) => {
    const { code } = req.query
    return res.json(code)
})
export { app }