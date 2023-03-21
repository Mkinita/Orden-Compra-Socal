import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener OC
  const GenerarOc = await prisma.OrdenObra.findMany({


  })

  res.status(200).json(GenerarOc);




  //Crear OC
  if (req.method === "POST") {
    const OrdenObra = await prisma.OrdenObra.create({
      data: {
        nombre: req.body.nombre,
        obra: req.body.obra,
        emisor: req.body.emisor,
        cantidad: req.body.cantidad,
        descripcion: req.body.descripcion,   
        pedido: req.body.pedido,
        pedido03: req.body.pedido03,
      },
    });
    res.json(OrdenObra);
  }
}
