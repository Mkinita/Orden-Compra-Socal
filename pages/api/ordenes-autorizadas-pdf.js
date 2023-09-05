import { PrismaClient, Prisma } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const ocpedidos = await prisma.ocpedidos.findMany({
   where:  {
      estado:true,
      estado01:false,
      anular:false
    },
    orderBy: {
        id: "desc",
      },
      take: 6,
  })

  res.status(200).json(ocpedidos);
}