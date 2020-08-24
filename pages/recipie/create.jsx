import { useState } from "react";
import { useRouter } from "next/router";

import { Button } from "react-bootstrap";

import RecetteForm from "../../components/RecetteForm";
import NavigationBar from "../../components/NavigationBar";

const RecettePage = () => {
  const [stepCount, setStepCount] = useState(1);
  const router = useRouter();

  const addStep = () => {
    setStepCount(stepCount + 1);
  };

  const removeStep = () => {
    if (stepCount <= 1) return;

    setStepCount(stepCount - 1);
  };

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
          <RecetteForm stepCount={stepCount} addRecipie={addRecipie} />
          <div className="grid">
            <Button onClick={addStep}>Ajouter une etape</Button>
            <Button onClick={removeStep}>Supprimer une etape</Button>
          </div>
        </main>
      </div>
    </>
  );
};
export default RecettePage;
