import  {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const faenas = await prisma.obra.findMany({
  })
  
  res.status(200).json(faenas)
}