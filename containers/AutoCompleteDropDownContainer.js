import { connect } from "react-redux";
import AutoCompleteDropDown from "../components/AutoCompleteDropdown";
import { addChosenIngredient } from "../actions/ingredients";
import { showModal } from "../actions/modal";

const mapStateToProps = (state) => ({
    ingredients: state.ingredients,
});
const mapDispatchToProps = dispatch =>({
    addChosenIngredient: chosen_ingredient => dispatch(addChosenIngredient(chosen_ingredient)),
    showModal: () => dispatch(showModal())
})
export default connect(mapStateToProps, mapDispatchToProps)(AutoCompleteDropDown);
