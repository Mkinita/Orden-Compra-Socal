import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {

  // 👉 CREAR FAENA
  if (req.method === 'POST') {
    try {
      const { nombre } = req.body

      if (!nombre || nombre.trim().length < 2) {
        return res.status(400).json({ error: 'Nombre inválido' })
      }

      const nuevaFaena = await prisma.faena.create({
        data: {
          nombre
        }
      })

      return res.status(201).json(nuevaFaena)

    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Error creando faena' })
    }
  }

  // 👉 LISTAR FAENAS
  if (req.method === 'GET') {
    const faenas = await prisma.faena.findMany()
    return res.status(200).json(faenas)
  }

  // 👉 MÉTODO NO PERMITIDO
  res.setHeader('Allow', ['GET', 'POST'])
  return res.status(405).end(`Método ${req.method} no permitido`)
}
