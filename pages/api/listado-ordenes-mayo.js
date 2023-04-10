import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fechaInicio = new Date('2023-05-01');
  const fechaFin = new Date('2023-05-31');
  //Obtener Ordenes
  const ordenesGenerales = await prisma.ocpedidos.findMany({
   where:  {
    estado:true,
    anular:false,
    AND: [
        {
          fecha: {
            gt: fechaInicio
          }
        },
        {
          fecha: {
            lt: fechaFin
          }
        }
      ]
    }
  })

  res.status(200).json(ordenesGenerales);
}