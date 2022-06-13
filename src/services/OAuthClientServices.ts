import axios from "axios";
import { sign } from "jsonwebtoken"
import prismaClient from "../prisma";

interface IAccessTokenResponse {
    access_token: string
}

interface UserResponse {
    avatar_url: string,
    login: string,
    id: number,
    name: string
}

class OAuthClientServices {
    async exect(code: string) {
        const url = "http://github.com/login/oauth/access_token";
        const { data: IAccessTokenResponse } = await axios.post<IAccessTokenResponse>(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secret: process.env.GITHUB_CLIENT_SECRET,
                code,
            },
            headers: {
                "Accept": "application/json"
            }
        })
        const response = await axios.get<UserResponse>("https://api.github.com/user", {
            headers: {
                authorization: `Bearer ${IAccessTokenResponse.access_token}`
            }
        });

        const { id, login, avatar_url, name } = response.data

        const user = await prismaClient.user.findFirst({
            where: {
                github_id: id
            }
        })
        if (!user) {
            await prismaClient.user.create({
                data: {
                    github_id: id,
                    login,
                    avatar_url,
                    name
                }
            })
        }
        const token = sign({
            user: {
                name: user.name,
                avatar_url: user.avatar_url,
                login: user.login,
                github_id: user.github_id,
                id: user.id
            }
        },
            process.env.JWT_SECRET, {
            subject: user.id,
            expiresIn: "1d"
        })

        return { token, user }

    }
}
export { OAuthClientServices }