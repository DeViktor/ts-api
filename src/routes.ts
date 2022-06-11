import { Router } from "express"
import { OAuthClientController } from "./Controllers/OAuthUserController"

const routers = Router()

routers.post('/authenticate', new OAuthClientController().main)

export { routers }