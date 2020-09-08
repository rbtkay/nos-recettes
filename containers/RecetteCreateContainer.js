import { connect } from "react-redux";
import RecetteCreatePage from "../pages/recipie/create";

const mapStateToProps = (state) => ({
    ingredients: state.ingredients,
    chosen_ingredients: state.chosen_ingredients
});

export default connect(mapStateToProps, null)(RecetteCreatePage);
