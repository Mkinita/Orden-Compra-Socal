import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fechaActual = new Date(); // Obtener la fecha actual
  //Obtener Ordenes
  const ordenes = await prisma.ocpedidos.findMany({
    where: {
      anular: false,
      finalizado: false,
    },
    orderBy: {
      id: "desc",
    },
    take: 5,
  });
  

  res.status(200).json(ordenes);
}


