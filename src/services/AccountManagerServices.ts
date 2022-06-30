import prismaClient from "../prisma"

class AccountManagerServices {
    async create(idENVIA: string, idRECEBE: string, value: number) {
        const checkIfHave = await prismaClient.account.findFirst({
            where: { userId: idENVIA }
        })
        if ( checkIfHave.mount < value ) return 

        const checkRecive = await.prismaClient.account.findFirst({
            where:{ id: idRECEBE}
        })

        let aux = checkIfHave.mount - value;

        const upEnvia = await prismaClient.account.update({
            where:{
                userId: idENVIA
            },
            data:{ mount: aux }
        })

        aux = checkRecive.mount + value;
        const upRecebe = await prismaClient.account.update({
            where:{
                userId: idRECEBE
            },
            data:{ mount: aux }
        })

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
//     const check = await prismaClient.account.find!First({
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