import { PrismaClient } from "@prisma/client";



export default async function login(req, res) {
    const prisma = new PrismaClient();
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const userId = user.id;


  

  

  return res.status(200).json({ message: 'Logged in successfully' });
}
