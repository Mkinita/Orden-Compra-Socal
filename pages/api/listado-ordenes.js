import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const ordenes = await prisma.orden.findMany({
   where:  {
      estado:true,
      anular:false
      // finalizado:false
    }
  })

  res.status(200).json(ordenes);
}
