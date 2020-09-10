import {
    SET_INGREDIENTS,
    REMOVE_INGREDIENT,
    ADD_INGREDIENT,
} from "../actions/ingredients";

const ingredients = (state = [], action) => {
    let newState;
    switch (action.type) {
        case SET_INGREDIENTS:
            return action.ingredients;
        case REMOVE_INGREDIENT:
            newState = state.slice();
            newState.splice(action.index, 1);
            return newState;
        case ADD_INGREDIENT:
			console.log("ADDING");
            const newIngredient = {
                id: action.ingredient.id,
                name: action.ingredient.name,
            };
            newState = [...state, newIngredient];
            return newState;
        default:
            return state;
    }
};

export default ingredients;
