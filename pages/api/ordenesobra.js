import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const ordenes = await prisma.OrdenObra.findMany({
   where:  {
      estado:false,
      anular:false
    }
  })

  res.status(200).json(ordenes);
}