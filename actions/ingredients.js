export const SET_INGREDIENTS = 'SET_INGREDIENTS';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const ADD_CHOSEN_INGREDIENT = 'ADD_CHOSEN_INGREDIENT';
export const REMOVE_CHOSEN_INGREDIENT = 'REMOVE_CHOSEN_INGREDIENT';
export const GET_CHOSEN_INGREDIENTS_AS_LIST_OF_IDS = 'GET_CHOSEN_INGREDIENTS_AS_LIST_OF_IDS';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';

export const units = [
	{
		volume: [
			{teaspoon: "tsp"},
			{tablespoon: "tbsp"},
			{fluid_ounce: "fl oz"},
			{gill: "1/2 cup"},
			{cup: "c"},
			{pint: "pt"},
			{quart: "qt"},
			{gallon: "gal"},
			{milliliter: "ml"},
			{liter: "l"},
			{deciliter: "dl"}
		],
		mass: [
			{pound: "lb"},
			{ounce: "oz"},
			{milligram: "mg"},
			{gram: "g"},
			{kilogrom: "kg"},
		],
		length: [
			{milimeter: "mm"},
			{centimeter: "cm"},
			{meter: "m"},
			{inch: "in"}
		]
	}
]

export const setIngredients = ingredients => ({
	type: SET_INGREDIENTS,
	ingredients,
});

export const removeIngredient = index => ({
	type: REMOVE_INGREDIENT,
	index,
});

export const addIngredient = ingredient =>({
	type: ADD_INGREDIENT,
	ingredient
})

export const addChosenIngredient = chosen_ingredient => ({
	type: ADD_CHOSEN_INGREDIENT,
	chosen_ingredient,
});

export const getChosenIngredients = () => ({
	type: GET_CHOSEN_INGREDIENTS_AS_LIST_OF_IDS,
});

export const removeChosenIngredient = id => ({
	type: REMOVE_CHOSEN_INGREDIENT,
	id,
});