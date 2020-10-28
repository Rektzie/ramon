import { MEALS } from "../../data/dummy-data.js";
import { toggleFavorite } from "../actions/mealsAction";
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};

const mealReducer = (state = initialState, action) => {
  switch (action.type) {
    case toggleFavorite:
      if (state.favoriteMeals.findIndex(action) >= 0) {
        return state.favoriteMeals.splice(
          state.favoriteMeals.findIndex(action)
        );
      } else {
        state.favoriteMeals.push(action);
      }
  }
  return state;
};

export default mealReducer;
