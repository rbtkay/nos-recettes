// modules
import { combineReducers } from "redux";
// reducers
import ingredients  from "./ingredients";
import chosen_ingredients  from "./choseIngredients";
import isModalShow  from "./isModalShow";

export default combineReducers({ ingredients, chosen_ingredients, isModalShow });
