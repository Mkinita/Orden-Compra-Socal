import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener
  const GenerarDetalleFaena = await prisma.faena.findMany({

  })

  res.status(200).json(GenerarDetalleFaena);




  //Crear
  if (req.method === "POST") {
    const faena = await prisma.faena.create({
      data: {
        nombre: req.body.nombre,
      },
    });
    res.json(faena);
  }
}
