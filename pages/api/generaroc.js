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

        cantidad05: req.body.cantidad05,
        descripcion05: req.body.descripcion05,
        valor05:req.body.valor05,

        cantidad06: req.body.cantidad06,
        descripcion06: req.body.descripcion06,
        valor06:req.body.valor04,

        cantidad07: req.body.cantidad07,
        descripcion07: req.body.descripcion07,
        valor07:req.body.valor07,

        cantidad08: req.body.cantidad08,
        descripcion08: req.body.descripcion08,
        valor08:req.body.valor08,

        cantidad09: req.body.cantidad09,
        descripcion09: req.body.descripcion09,
        valor09:req.body.valor09,
        
        fecha: req.body.fecha,
        fechasolicitud: req.body.fechasolicitud,
        orden: req.body.orden,
      },
    });
    res.json(ocpedidos);
  }
}
