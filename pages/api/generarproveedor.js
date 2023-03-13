import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener
  const GenerarProveedor = await prisma.proveedores.findMany({

  })

  res.status(200).json(GenerarProveedor);




  //Crear
  if (req.method === "POST") {
    const proveedores = await prisma.proveedores.create({
      data: {
        folio: req.body.folio,
        nombre: req.body.nombre,
        direccion: req.body.direccion,
        rut: req.body.rut,
        fono: req.body.fono,
        comuna: req.body.comuna,
      },
    });
    res.json(proveedores);
  }
}
