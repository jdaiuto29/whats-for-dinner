import React from 'react';
import SearchForm from '../components/SearchForm'
import RecipeResults from '../components/RecipeResults'
import { Box} from '@chakra-ui/react';

export default function Home() {
return <div>

 <Box bgImage="url('https://researchnarrative.com/wp-content/uploads/2017/12/shutterstock_638203369-e1513958209638.jpg')" bgPosition="center" bgRepeat="no-repeat">
<SearchForm />
</Box>
<RecipeResults />
</div>
}