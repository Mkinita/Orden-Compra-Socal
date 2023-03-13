import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const ordenesGenerales = await prisma.ocpedidos.findMany({
   where:  {
      estado:true,
      anular:false
    }
  })

  res.status(200).json(ordenesGenerales);
}
