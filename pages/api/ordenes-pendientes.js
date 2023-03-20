import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fechaActual = new Date(); // Obtener la fecha actual
  //Obtener Ordenes
  const ordenes = await prisma.ocpedidos.findMany ({
    where: {
        // fecha: {
        //   gte: fechaActual // Usar "gte" (mayor o igual que) en lugar de "gt"
        // }
        where:  {
          finalizado:false,
        }
      }
  })

  res.status(200).json(ordenes);
}


