import { PrismaClient } from "@prisma/client";
import { connect } from "react-redux";
import create from "../recipie/create";

export default async function (req, res) {
    const { method } = req;

    console.log(req);
    const prisma = new PrismaClient();

    switch (method) {
        case "POST":
            const { body } = req;

            console.log("body:", JSON.parse(body));
            let { title, description, ingredients } = JSON.parse(body);
            ingredients = ingredients.map((ing) => ing.id);

            console.log("title", title);
            console.log("description", description);
            console.log("ingredients", ingredients);

            const sql_query = `insert into "Recipie" ("title", "description") values('test2', '{"step-one": "description testing"}');`;
            // const recipie = await prisma.$executeRaw(sql_query);
            const recipie = await prisma.ingredientInRecipie.create({
                data: {
                    recipie: {
                        create: {
                            title: "testings",
                            description: { stepone: "tesintg" },
                        },
                    },
                    ingredient: {
                        connect: {
                            id: 1,
                        },
                    },
                },
            });
            // recipie.create({
            //     data: {
            //         title,
            //         description,
            //         ingredients: {
            //             create: [
            //                 {
            //                     ingredient: { connect: { ingredientId: 1 } },
            //                 },
            //                 {
            //                     recipieId_ingredientId: {
            //                         recipieId: 2,
            //                         ingredientId: 2,
            //                     },
            //                 },
            //                 {
            //                     recipieId_ingredientId: {
            //                         recipieId: 3,
            //                         ingredientId: 3,
            //                     },
            //                 },
            //             ],
            //         },
            //     },
            // });

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
