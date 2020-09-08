const addRecipie = async (dispatch, formResult) => {
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
        const recipies = await response.json();
        return recipies;
        // router.push("/");
    }else{
        console.log(response);
        return null;
    }
};
export default addRecipie;