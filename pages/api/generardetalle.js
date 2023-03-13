import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener
  const GenerarDetalle = await prisma.descripcion.findMany({

  })

  res.status(200).json(GenerarDetalle);




  //Crear
  if (req.method === "POST") {
    const descripcion = await prisma.descripcion.create({
      data: {
        nombre: req.body.nombre,
      },
    });
    res.json(descripcion);
  }
}
