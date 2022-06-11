import { Request, Response } from "express";
import { OAuthClientServices } from "../services/OAuthClientServices";

class OAuthClientController {
    async main(request: Request, response: Response) {

        const { code } = request.body;

        const service = new OAuthClientServices();
        try {

            const result = await service.exect(code);

            return response.json(result);
        } catch (error) {
            return response.json({ error: error.message });
        }
    }
}

export { OAuthClientController }