import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  //Obtener
  const GenerarUsuario = await prisma.user.findMany({

  })

  res.status(200).json(GenerarUsuario);




  //Crear
  if (req.method === "POST") {
    const user = await prisma.user.create({
      data: {
        email: req.body.email,
        password: req.body.password,
      },
    });
    res.json(user);
  }
}
