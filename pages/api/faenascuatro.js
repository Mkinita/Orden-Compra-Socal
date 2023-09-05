import  {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const proveedore = await prisma.faena.findMany({

    orderBy: {
        id: "asc",
      },
      take: 4,
  })
  
  res.status(200).json(proveedore)
}