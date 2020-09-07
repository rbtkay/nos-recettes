import { PrismaClient } from "@prisma/client";

export default async function (req, res) {
    const { method } = req;

    switch (method) {
        case "POST": {
            const { body } = req;

            console.log("Body", body);

            const prisma = new PrismaClient();
            try {
                const ingredient = await prisma.ingredient.create({
                    data: JSON.parse(body),
                });
                res.json(ingredient);
            } catch (error) {
              console.log(error);
                res.json({ error: true });
            } finally {
                await prisma.$disconnect();
            }

            break;
        }
        case "GET": {
            const prisma = new PrismaClient();

            const ingredients = await prisma.ingredient.findMany();

            await prisma.$disconnect();

            res.json(ingredients);
            break;
        }
        default:
            break;
    }
}
