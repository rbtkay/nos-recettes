import { useState } from "react";
import { useRouter } from "next/router";

import { Button } from "react-bootstrap";

import RecetteForm from "../../components/RecetteForm";
import NavigationBar from "../../components/NavigationBar";

import { PrismaClient } from "@prisma/client";

const RecettePage = ({ingredients}) => {
    const [stepCount, setStepCount] = useState(1);
    const router = useRouter();

    const addRecipie = async (formResult) => {
        console.log(formResult);
        const param = {
            method: "POST",
            header: {
                Accept: "application/json",
                "Content-TYpe": "application/json",
            },
            body: JSON.stringify(formResult),
        };
        const response = await fetch(`/api/recipie`, param);
        if (response.status == 200) {
            router.push("/");
        }
    };

    return (
        <>
            <NavigationBar />
            <div className="container">
                <main>
                    <h1 className="title">Creez votre recette !</h1>
                    <br />
                    <RecetteForm
                        stepCount={stepCount}
                        addRecipie={addRecipie}
                        ingredients={ingredients}
                    />
                </main>
            </div>
        </>
    );
};

export async function getServerSideProps({ res }) {
    const prisma = new PrismaClient();

    const ingredients = await prisma.ingredient.findMany();
    await prisma.$disconnect();    
    return {
        props: {
            ingredients,
        },
    };
}

export default RecettePage;
