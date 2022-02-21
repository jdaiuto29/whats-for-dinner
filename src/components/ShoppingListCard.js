import {Button} from "@chakra-ui/react"
import { useDispatch, useSelector } from 'react-redux'
import { clearList } from '../redux/reducers/shoppingListReducer';

export default function ShoppingListCard() {
  const dispatch = useDispatch();
  const shoppingList = useSelector((state) => state.shoppingList)

  const handleClearList = () => {
    dispatch(clearList())
  }


  const handleRemoveIngredient = (name, checked) => {
    if (checked) {
      document.getElementById(name).classList.add("list-item");
  } else {
    document.getElementById(name).classList.remove("list-item");
  }
}

const ingredients = shoppingList.reduce((ingredientsArray, recipe) => {
return [
  ...ingredientsArray,
  ...recipe.extendedIngredients
]
},[])

//combine ingredients in the shopping cart
// const shoppingCart = ingredients.reduce((newCart, ingredient) => {
//   const key = `${ingredient.name} (${ingredient.unit})`
// if (!newCart[ingredient.name]) {
//   newCart[ingredient.name] = 0;
//   }
//   newCart[ingredient.name] += ingredient.amount;
//   return newCart;
// }, {});

  return <div> 
                {ingredients.map((ingredient) => {
                  return <div><input type="checkbox" name={ingredient.name} onChange={(e) => handleRemoveIngredient(ingredient.name, e.target.checked)} value={ingredient.name} /><label id={ingredient.name} className='' for={ingredient.name}> {ingredient.name} ({ingredient.amount.toFixed(2)} {ingredient.unit}) </label><br />
                  </div>
                })}

          {shoppingList.length === 0 ? "You have no items in your shopping list" : <Button mt={5} onClick={handleClearList} colorScheme='red'>Remove From Shopping List</Button>}

      </div>

}
