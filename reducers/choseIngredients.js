import {
    ADD_CHOSEN_INGREDIENT,
    REMOVE_CHOSEN_INGREDIENT,
    GET_CHOSEN_INGREDIENTS_AS_LIST_OF_IDS,
} from "../actions/ingredients";
const chosen_ingredients = (state = [], action) => {
    switch (action.type) {
        case ADD_CHOSEN_INGREDIENT:
            return [...state, action.chosen_ingredient];
        case REMOVE_CHOSEN_INGREDIENT:
            const newState = state.filter((el) => el.id != action.id);
            return newState;
        case GET_CHOSEN_INGREDIENTS_AS_LIST_OF_IDS:
            const stateAsListOfIds = state.map(el => el.id);
            return stateAsListOfIds;
        default:
            return state;
    }
};

export default chosen_ingredients;
