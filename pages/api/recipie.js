import { PrismaClient } from "@prisma/client";


export default async function (req, res) {
  const { method } = req;
  
  switch (method) {
    case "POST":
      const { body } = req;
      const prisma = new PrismaClient();
      
      const recipie = await prisma.recipie.create({ data: JSON.parse(body) });
      await prisma.$disconnect();

      res.json(recipie);
      break;
    case "GET":
      const prisma = new PrismaClient();

      const recipies = await prisma.recipie.findMany();

      await prisma.$disconnect();

      res.json(recipies);
      break;
    default:
      break;
  }
}
