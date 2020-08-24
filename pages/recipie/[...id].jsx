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
        description = {"step-1":"Pas de recette pour le moment"};
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
                    <div className="grid"></div>
                </main>
                {descUI}
                <footer>
                    {/* <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{" "}
                        <img
                            src="/vercel.svg"
                            alt="Vercel Logo"
                            className="logo"
                        />
                    </a> */}
                </footer>
            </div>
        </>
    );
};

// const Recipies = require("../../lib/Recipies");

export async function getServerSideProps({ res, params }) {
    // get the id from parameter
    const { id } = params;

    console.log("id", id[0]);
    console.log("type", typeof id);

    const prisma = new PrismaClient();

    const recipie = await prisma.recipie.findOne({
        where: {
            id: parseInt(id[0]),
        },
    });

    // recipie.createdAt = recipie.createdAt.toJSON();

    prisma.$disconnect();
    // const recipie = result.map((recipie) => {
    //     return {
    //       id: recipie.id,
    //       title: recipie.title,
    //       description: recipie.description,
    //       createdAt: recipie.createdAt.toJSON(),
    //     };
    //   });

    // get a recipie by its id
    // const result = await Recipies.findById(id);
    // console.log(result);
    // const recipie = JSON.parse(result);
    const { title, description } = recipie;
    return { props: { id, title, description } };
}

export default RecettePage;
