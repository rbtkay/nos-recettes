import { connect } from "react-redux";
import RecetteForm from "../components/RecetteForm";
import {
    setIngredients,
    removeChosenIngredient,
    getChosenIngredients,
} from "../actions/ingredients";
import { addRecipie } from "../fetchers/recipiesFetcher";

const mapStateToProps = (state) => ({
    ingredients: state.ingredients,
    chosen_ingredients: state.chosen_ingredients,
});

const mapDispatchToProps = (dispatch) => ({
    setIngredients: (ingredients) => dispatch(setIngredients(ingredients)),
    removeChosenIngredient: (id) => dispatch(removeChosenIngredient(id)),
    addRecipie: (formResult) =>
        addRecipie(dispatch, formResult),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecetteForm);
