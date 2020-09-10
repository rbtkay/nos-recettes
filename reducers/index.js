// modules
import { combineReducers } from "redux";
// reducers
import ingredients from "./ingredients";
import chosen_ingredients from "./choseIngredients";
import isModalShow from "./isModalShow";
import message from "./message";
export default combineReducers({
    ingredients,
    chosen_ingredients,
    isModalShow,
    message,
});
