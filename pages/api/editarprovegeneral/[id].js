import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){

    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query
        const {rut01, nombre01} = req.body
        

        const ordenActualizada = await prisma.ocpedidos.update({
            where: { id: parseInt(id) },
            data: { nombre01: nombre01, rut01: rut01 },
          })

        res.status(200).json(ordenActualizada)
    }
}


