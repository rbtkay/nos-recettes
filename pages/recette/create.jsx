import { useState } from "react";
import { useRouter } from "next/router";

import { Button } from "react-bootstrap";
import RecetteForm from "../../components/RecetteForm";

const RecettePage = () => {
  const [stepCount, setStepCount] = useState(1);
  const router = useRouter();
  // console.log(data);

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
    <div className="container">
      <main>
        <h1 className="title">Creez votre recette !</h1>
        <br />
      </main>
      <RecetteForm stepCount={stepCount} addRecipie={addRecipie} />
      <div className="grid">
        <Button onClick={addStep}>Ajouter une etape</Button>
        <Button onClick={removeStep}>Supprimer une etape</Button>
      </div>
    </div>
  );
};
export default RecettePage;
