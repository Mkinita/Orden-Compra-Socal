import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fechaInicio = new Date('2023-03-31');
  const fechaFin = new Date('2023-04-30');
  //Obtener Ordenes
  const ordenesGenerales = await prisma.ocpedidos.findMany({
   where:  {
    estado:true,
    anular:false,
    AND: [
        {
          fechasolicitud: {
            gt: fechaInicio
          }
        },
        {
          fechasolicitud: {
            lt: fechaFin
          }
        }
      ]
    }
  })

  res.status(200).json(ordenesGenerales);
}