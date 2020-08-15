import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function (req, res) {
    if (req.method === 'POST') {
      const { body } = req;
      const recipie = await prisma.recipie.create({ data: JSON.parse(body) });
      res.json(recipie);
    }
  }