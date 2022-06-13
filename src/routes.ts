import { Router } from "express"
import { AccountManagerController } from "./Controllers/AccountManagerController"
import { OAuthClientController } from "./Controllers/OAuthUserController"

const routers = Router()

routers.post('/authenticate', new OAuthClientController().main)

export { routers }