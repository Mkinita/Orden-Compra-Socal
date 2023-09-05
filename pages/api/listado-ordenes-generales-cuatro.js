import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener Ordenes
  const ordenesGenerales = await prisma.ocpedidos.findMany({
   where:  {
    estado:true,
    anular:false,
    estado01:true
    },
   
    orderBy: {
      id: "asc",
    },
    take: 4,
  })

  res.status(200).json(ordenesGenerales);
}
