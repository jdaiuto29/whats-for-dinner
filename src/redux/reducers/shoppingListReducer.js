const defaultState = []

const LIST_ADD_INGREDIENTS = 'LIST_ADD_INGREDIENTS'
const LIST_REMOVE_INGREDIENTS = 'LIST_REMOVE_INGREDIENTS'
const CLEAR_SHOPPING_LIST = 'CLEAR_SHOPPING_LIST'

export function addIngredients(recipe) {
  return {
    type: LIST_ADD_INGREDIENTS,
    recipe
  }
}

export function removeIngredients(recipe) {
  return {
    type: LIST_REMOVE_INGREDIENTS,
    recipe
  }
}

export function clearList() {
  return {
    type: CLEAR_SHOPPING_LIST,
  }
}

export function shoppingListReducer(state = defaultState, action) {
  switch (action.type) {
    case LIST_ADD_INGREDIENTS:
      return [
        ...state,
        action.recipe
      ]
    case LIST_REMOVE_INGREDIENTS:
      return state.filter((recipe) => {
        return recipe.id !== action.recipe.id
      })
      case CLEAR_SHOPPING_LIST:
        return defaultState
    default:
      return state
  }
}