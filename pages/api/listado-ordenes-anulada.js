import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const ordenes = await prisma.orden.findMany({
   where:  {
      anular:true
    }
  })

  res.status(200).json(ordenes);
}
