import { connect } from "react-redux";
import RecetteForm from "../components/RecetteForm";
import {
    setIngredients,
    removeChosenIngredient,
    getChosenIngredients,
} from "../actions/ingredients";
import { addRecipieToDatabase } from "../fetchers/recipiesFetcher";

const mapStateToProps = (state) => ({
    ingredients: state.ingredients,
    chosen_ingredients: state.chosen_ingredients,
});

const mapDispatchToProps = (dispatch) => ({
    setIngredients: (ingredients) => dispatch(setIngredients(ingredients)),
    removeChosenIngredient: (id) => dispatch(removeChosenIngredient(id)),
    addRecipieToDatabase: (formResult) =>
        addRecipieToDatabase(dispatch, formResult),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecetteForm);
