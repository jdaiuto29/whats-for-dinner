import { combineReducers } from 'redux'
import { searchReducer } from './searchReducer'
import { favoritesReducer } from './favoritesReducer'
import { shoppingListReducer} from './shoppingListReducer'

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  search: searchReducer,
  shoppingList: shoppingListReducer
})

export default rootReducer