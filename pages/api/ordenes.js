import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const ordenes = await prisma.orden.findMany({
   where:  {
      estado:false,
      anular:false
    }
  })

  res.status(200).json(ordenes);




  //Crear Ordenes
  if (req.method === "POST") {
    const orden = await prisma.orden.create({
      data: {
        folio: req.body.folio,
        nombre: req.body.nombre,
        cantidad: req.body.cantidad,
        descripcion: req.body.descripcion,
        fecha: req.body.fecha,
        pedido: req.body.pedido,
        patente: req.body.patente,
        obra: req.body.obra,
        pedido01: req.body.pedido01,
        emisor: req.body.emisor,
        valor: req.body.valor,
        propietario: req.body.propietario,
        Kilometraje: req.body.Kilometraje
      },
    });
    res.json(orden);
  }
}
