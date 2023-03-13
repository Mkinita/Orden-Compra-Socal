import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener OC
  const GenerarOc = await prisma.ocpedidos.findMany({
   where:  {
      estado:false,
    },

  })

  res.status(200).json(GenerarOc);




  //Crear OC
  if (req.method === "POST") {
    const ocpedidos = await prisma.ocpedidos.create({
      data: {
        folio: req.body.folio,
        nombre: req.body.nombre,
        obra: req.body.obra,
        emisor: req.body.emisor,

        cantidad: req.body.cantidad,
        descripcion: req.body.descripcion,
        valor:req.body.valor,

        cantidad01: req.body.cantidad01,
        descripcion01: req.body.descripcion01,
        valor01:req.body.valor01,

        cantidad02: req.body.cantidad02,
        descripcion02: req.body.descripcion02,
        valor02:req.body.valor02,

        cantidad03: req.body.cantidad03,
        descripcion03: req.body.descripcion03,
        valor03:req.body.valor03,

        cantidad04: req.body.cantidad04,
        descripcion04: req.body.descripcion04,
        valor04:req.body.valor04,
        




        fecha: req.body.fecha,
        orden: req.body.orden,
      },
    });
    res.json(ocpedidos);
  }
}
