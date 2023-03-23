import { PrismaClient } from '@prisma/client'

export default async function handler (req,res){

    const prisma = new PrismaClient()
    if(req.method === 'POST'){
        const { id }  = req.query
        const 
            {
                emisor, 
                nombre,
                obra,
                cantidad,descripcion,valor,
                cantidad01,descripcion01,valor01,
                cantidad02,descripcion02,valor02,
                cantidad03,descripcion03,valor03,
                cantidad04,descripcion04,valor04,
            } = req.body
        

        const ordenActualizada = await prisma.ocpedidos.update({
            where: { id: parseInt(id) },
            data: 
            { 
                nombre: nombre, 
                emisor: emisor, 
                obra: obra, 
                cantidad: cantidad, descripcion: descripcion, valor: valor,
                cantidad01: cantidad01, descripcion01: descripcion01, valor: valor01,
                cantidad02: cantidad02, descripcion02: descripcion02, valor: valor02,
                cantidad03: cantidad03, descripcion03: descripcion03, valor: valor03,
                cantidad04: cantidad04, descripcion04: descripcion04, valor: valor04,
            },
          })

        res.status(200).json(ordenActualizada)
    }
}

