import { PrismaClient } from "@prisma/client";
import { connect } from "react-redux";
import create from "../recipie/create";

export default async function (req, res) {
    const { method } = req;
    const prisma = new PrismaClient();

    switch (method) {
        case "POST":
            const { body } = req;
            
            let { title, description, ingredients } = JSON.parse(body);

            ingredients = ingredients.map((ingredient) => ({
                ingredient: {
                    connect: {
                        id: ingredient.id,
                    },
                },
            }));

            const recipie = await prisma.recipie.create({
                data: {
                    title: title,
                    description: description,
                    ingredients: {
                        create: ingredients,
                    },
                },
            });

            await prisma.$disconnect();

            res.json(recipie);
            break;
        case "GET":
            const recipies = await prisma.recipie.findMany();

            await prisma.$disconnect();

            res.json(recipies);
            break;
        default:
            break;
    }
}
