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
			// the new ingredient's id is the last id in database plus one
            const newIngredient = {
                id: state[state.length - 1].id + 1,
                name: action.ingredient,
            };
            newState = [...state, newIngredient];
            return newState;
        default:
            return state;
    }
};

export default ingredients;
