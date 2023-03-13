import  {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const proveedore = await prisma.proveedores.findMany({
  })
  
  res.status(200).json(proveedore)
}