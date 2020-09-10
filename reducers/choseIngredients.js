import {
    ADD_CHOSEN_INGREDIENT,
    REMOVE_CHOSEN_INGREDIENT,
    GET_CHOSEN_INGREDIENTS_AS_LIST_OF_IDS,
} from "../actions/ingredients";
const chosen_ingredients = (state = [], action) => {
    switch (action.type) {
        case ADD_CHOSEN_INGREDIENT:
            if (
                state.some(
                    (ingredient) =>
                        ingredient.name == action.chosen_ingredient.name
                )
            )
                return state;
            return [...state, action.chosen_ingredient];
        case REMOVE_CHOSEN_INGREDIENT:
            const newState = state.filter((el) => el.id != action.id);
            return newState;
        case GET_CHOSEN_INGREDIENTS_AS_LIST_OF_IDS:
            const stateAsListOfIds = state.map((el) => el.id);

            console.log(
                "GET_CHOSEN_INGREDIENTS_AS_LIST_OF_IDS",
                stateAsListOfIds
            );
            return stateAsListOfIds;
        default:
            return state;
    }
};

export default chosen_ingredients;
