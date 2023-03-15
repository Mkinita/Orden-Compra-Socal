import { PrismaClient, Prisma } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const ocpedidos = await prisma.ocpedidos.findMany({
   where:  {
      estado01:false,
      estado:true
    }
  })

  res.status(200).json(ocpedidos);
}