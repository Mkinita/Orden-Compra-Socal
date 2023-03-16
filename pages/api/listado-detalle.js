import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const detalle = await prisma.descripcion.findMany({
  })

  res.status(200).json(detalle);
}
