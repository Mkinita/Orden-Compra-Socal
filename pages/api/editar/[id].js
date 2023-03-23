
import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){

    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query
        const {emisor, nombre,obra} = req.body
        

        const ordenActualizada = await prisma.orden.update({
            where: { id: parseInt(id) },
            data: { nombre: nombre, emisor: emisor, obra: obra },
          })

        res.status(200).json(ordenActualizada)
    }
}





