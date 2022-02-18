import { Box, Center, Image } from '@chakra-ui/react'
import React from 'react'
import ShoppingListCard from '../components/ShoppingListCard'

function ShoppingList() {

  return (
        <Box m={10}>
          <Center m={7}>
      <Image src="https://see.fontimg.com/api/renderfont4/83GA/eyJyIjoiZnMiLCJoIjo4OCwidyI6MTI1MCwiZnMiOjcwLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/WW91ciBTaG9wcGluZyBsaXN0IC4gLiAuIA/rolleteqaku-regular.png" alt='shopping list'/> 
      </Center>
      <Center>
      <Box boxShadow='dark-lg' p='6' w="300px" rounded="20px"
        overflow="hidden" mb={10} bg='white'>
 <ShoppingListCard />

          </Box>
          </Center>
          </Box>
          
  )
}

export default ShoppingList