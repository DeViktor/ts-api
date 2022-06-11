import axios from "axios";
import { sign } from "jsonwebtoken"

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
        return response.data

    }
}
export { OAuthClientServices }