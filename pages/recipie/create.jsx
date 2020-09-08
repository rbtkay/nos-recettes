import { useState } from "react";
import { useRouter } from "next/router";

import { Button } from "react-bootstrap";

import RecetteForm from "../../components/RecetteForm";
import NavigationBar from "../../components/NavigationBar";
import CustomModal from "../../components/CustomModal";

import { PrismaClient } from "@prisma/client";
import RecetteFormContainer from "../../containers/RecetteFormContainer";
import { useEffect } from "react";
import { connect } from "react-redux";

const RecetteCreatePage = ({ db_ingredients, setIngredients }) => {
    console.log("ingredients", db_ingredients);
    const [stepCount, setStepCount] = useState(1);
    const router = useRouter();

    // setIngredients(db_ingredients);

    useEffect(()=>{
        setIngredients(db_ingredients);
    })

    // const addRecipie = async (formResult) => {
    //     console.log(formResult);
    //     const param = {
    //         method: "POST",
    //         header: {
    //             Accept: "application/json",
    //             "Content-TYpe": "application/json",
    //         },
    //         body: JSON.stringify(formResult),
    //     };
    //     const response = await fetch(`/api/recipie`, param);
    //     if (response.status == 200) {
    //         router.push("/");
    //     }
    // };

    return (
        <>
            <NavigationBar />
            <div className="container">
                <main>
                    <h1 className="title">Creez votre recette !</h1>
                    <br />
                    <RecetteFormContainer />
                    {/* <RecetteForm
                        stepCount={stepCount}
                        addRecipie={addRecipie}
                        ingredients={ingredients}
                    /> */}
                    <CustomModal/>
                </main>
            </div>
        </>
    );
};

import { setIngredients } from "../../actions/ingredients";

const mapDispatchToProps = (dispatch) => ({
    setIngredients: (ingredients) => dispatch(setIngredients(ingredients)),
});

export async function getServerSideProps({ res }) {
    const prisma = new PrismaClient();

    const ingredients = await prisma.ingredient.findMany();

    await prisma.$disconnect();
    return {
        props: {
            db_ingredients: ingredients,
        },
    };
}

export default connect(null, mapDispatchToProps)(RecetteCreatePage);
