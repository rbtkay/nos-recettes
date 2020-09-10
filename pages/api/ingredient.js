import { PrismaClient } from "@prisma/client";

export default async function (req, res) {
    const { method } = req;

    switch (method) {
        case "POST": {
            const { body } = req;

            const { ingredient } = JSON.parse(body);

            const prisma = new PrismaClient();
            try {
                const new_ingredient = await prisma.ingredient.create({
                    data: { name: ingredient},
                });
                res.status(200).json(new_ingredient);
            } catch (error) {
                res.status(409).json({ error });
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
