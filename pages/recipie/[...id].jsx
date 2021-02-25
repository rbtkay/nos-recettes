import React, { useEffect, getInitialProps } from "react";
import Step from "../../components/Step";
import NavigationBar from "../../components/NavigationBar";
import { PrismaClient } from "@prisma/client";

const RecettePage = (props) => {
    const { id, title, description } = props;

    // output of the description relies on thes two variable
    let isDefault = false;

    // if the description is not set
    if (!description) {
        // set a default value
        description = { "step-1": "Pas de recette pour le moment" };
        isDefault = true; // used to facilitate the mapping, could be improved
    }

    // convert json to array
    const steps = Object.values(description);

    // fill the array responsable for showing the steps
    const descUI = steps.map((step, i) => {
        const count = isDefault ? -1 : i + 1;
        return <Step key={i} content={step} count={count} />;
    });

    return (
        <>
            <NavigationBar />
            <div className="container">
                <main>
                    <h1 className="title">{title}</h1>
                    {descUI}
                </main>
                <footer>
                </footer>
            </div>
        </>
    );
};

export async function getServerSideProps({ res, params }) {
    const { id } = params;
    const prisma = new PrismaClient();
    const recipie = await prisma.recipie.findOne({
        where: {
            id: parseInt(id[0]),
        },
    });

    prisma.$disconnect();

    const { title, description } = recipie;
    return { props: { id, title, description } };
}

export default RecettePage;
