import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const ordenesgenerales = await prisma.ocpedidos.findMany({
   where:  {
      estado:false,
      anular:false
    }
  })

  res.status(200).json(ordenesgenerales);

}
