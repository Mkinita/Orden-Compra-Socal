import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  const fechaActual = new Date(); // Obtener la fecha actual
  //Obtener Ordenes
  const ordenesobra = await prisma.Orden.findMany ({
    where: {
        
          finalizado:false,
        
      }
  })

  res.status(200).json(ordenesobra);
}


