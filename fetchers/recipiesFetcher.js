const addRecipieToDatabase = async (dispatch, formResult) => {
    const param = {
        method: "POST",
        header: {
            Accept: "application/json",
            "Content-TYpe": "application/json",
        },
        body: JSON.stringify(formResult),
    };
    const response = await fetch(`/api/recipie`, param);
    console.log("response", response);
    if (response.status == 200) {
        const recipies = await response.json();
        return recipies;
        // router.push("/");
    } else {
        console.log(response);
        return null;
    }
};

const addIngredientToDatabase = async (newIngredient) => {
    console.log("inserting in databse", newIngredient);

    const param = {
        method: "POST",
        header: {
            Accept: "application/json",
            "Content-TYpe": "application/json",
        },
        body: JSON.stringify({
            ingredient: newIngredient,
        }),
    };
    const response = await fetch(`/api/ingredient`, param);
    console.log("response", response);

    if (response.status == 200) {
        const new_ingredient = await response.json();
        return new_ingredient;
    } else if (response.status == 409) {
        console.log("Already exists");
        return null;
    }
};
module.exports = { addRecipieToDatabase, addIngredientToDatabase };
