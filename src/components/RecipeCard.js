import { Box, Image, Badge, Text, Stack, Button, Collapse, Center, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { addRecipe, removeRecipe } from '../redux/reducers/favoritesReducer';
import { addIngredients, removeIngredients } from '../redux/reducers/shoppingListReducer';

export default function RecipeCard(props) {
  const { recipe } = props
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites)
  const shoppingList = useSelector((state) => state.shoppingList)
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow(!show);

  const handleAddRecipe = () => {
    dispatch(addRecipe(recipe))
  }

  const handleRemoveRecipe = () => {
    dispatch(removeRecipe(recipe))
  }

  const handleAddIngredients = () => {
    dispatch(addIngredients(recipe))
  }

  const handleRemoveIngredients = () => {
    dispatch(removeIngredients(recipe))
  }

  const isAlreadySaved = favorites.find((savedRecipe) => {
    return savedRecipe.id === recipe.id
  });

  const isIngredientsAlreadySaved = shoppingList.find((savedRecipe) => {
    return savedRecipe.id === recipe.id
  });

  if (!recipe) {
    return "No results, Please broaden your search!"
  }

  return (
<div>
    <Center>
      <Box w="300px" rounded="20px"
        overflow="hidden" bg={'white'} mt={10}>
        <Box boxShadow='dark-lg' p='6' rounded='md' bg='white'>
          <Image rounded='md' src={recipe.image} alt={recipe.title} boxSize="250px">
          </Image>
        </Box>
        <Box p={5}>
          <Stack align="center">
            <Text as="h2" fontWeight="bold" my={2} >
              {recipe.title}
            </Text>
            <Badge variant="solid" colorScheme="green"
                  rounded="full" px={2} m={5}>
                  Recipe Info
                </Badge>
                <Text pb={5}>
                  Servings : {recipe.servings}<br />
                  Price Per Serving: ${(recipe.pricePerServing / 100).toFixed(2)}<br />
                  Ready in: {recipe.readyInMinutes} minutes<br />
                  Taste Score: {recipe.spoonacularScore}%<br />
                  WW Smart Points: <b>{recipe.weightWatcherSmartPoints}</b>
                </Text>
            <Button colorScheme="blue" onClick={handleToggle}>
              {show ? 'Hide' : 'Show'} Recipe
            </Button>
            <Collapse mt={4} in={show}>
              <Box border='1px' borderColor='black.200' pb={5}>
                <Badge variant="solid" colorScheme="green"
                  rounded="full" px={2} m={5}>
                  Ingredients
                </Badge>
                <Text fontWeight="light">
                  {recipe.extendedIngredients.map((ingredient) => {
                    return <div>
                      <Box mb={5}>
                      <Center><Image src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`} alt={ingredient.name}></Image></Center>
                      {ingredient.name} ({ingredient.amount.toFixed(2)} {ingredient.unit})
                      </Box>
                    </div>
                  })}
                  <Badge variant="solid" colorScheme="green"
                    rounded="full" px={2} m={5}>
                    Instructions
                  </Badge>
                  {recipe.analyzedInstructions.map((instruction) => {
                    return instruction.steps.map((step) => {
                      return <div>
                        <span>{step.number}. {step.step}</span><br /><br />
                      </div>
                    })
                  })}
                  </Text>
              </Box>
            </Collapse>
          </Stack>

          <VStack>
            {isAlreadySaved ? (
              <Button variant='solid' onClick={handleRemoveRecipe} colorScheme='red' size='sm' mt={5}>Remove From Favorites</Button>
            ) : (
              <Button variant='solid' onClick={handleAddRecipe} colorScheme='green' size='sm' mt={5}>Add To Favorites</Button>
            )}
            {isIngredientsAlreadySaved ? (
              <Button variant='solid' onClick={handleRemoveIngredients} colorScheme='red' size='sm'>Remove From Shopping List</Button>
            ) : (
              <Button variant='solid' onClick={handleAddIngredients} colorScheme='green' size='sm'>Add To Shopping List</Button>
            )}
          </VStack>
        </Box >
      </Box >
    </Center>
    </div>
  )
}
