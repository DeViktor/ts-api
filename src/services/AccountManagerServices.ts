import prismaClient from "../prisma"

class AccountManagerServices {
    async create(idENVIA: String, idRECEBE: String, value) {
        // const to_check = await prismaClient.account.findFirst({
        //     where: {
        //         userId: idENVIA
        //     }
        // })
        // if (to_check.mount && to_check.mount >= value) {
        //     const to_transfer = await prismaClient.account.findFirst({
        //         where: {
        //             id: idRECEBE
        //         }
        //     })

        //     to_check.mount = to_check.mount - value;
        //     await prismaClient.account.update({
        //         where: { id: idENVIA },
        //         to_check,
        //     });
        // }
        // return "Sem Saldo Disponivel"
    }
    // async create(request: Request, response: Response) {
    //     const check = await prismaClient.account.findFirst({
    //         where: {
    //         }
    //     })
    // }
    async to_revice(request: Request, response: Response) {
    }
    async submit(request: Request, response: Response) {
    }
}
export { AccountManagerServices }