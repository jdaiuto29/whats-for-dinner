import {Route, Routes} from 'react-router';
import {Link} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Favorites from './pages/Favorites'
import ShoppingList from './pages/ShoppingList'
import { Center, IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

function App() {
  return (
    <div className="App">
      <Center p={10}>
    <img src='https://see.fontimg.com/api/renderfont4/83GA/eyJyIjoiZnMiLCJoIjoxMTEsInciOjEyNTAsImZzIjo4OSwiZmdjIjoiIzAwMDAwMCIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/V2hhdCdzIEZvciBEaW5uZXIgPyA/rolleteqaku-regular.png' alt='whats for dinner'/>
  </Center>
<nav>
<Menu>
  <MenuButton
    as={IconButton}
    aria-label='Options'
    variant='outline'
    borderColor={'black'}
    m={5}
    p={5}
   >Main Menu </MenuButton>
  <MenuList>
    <MenuItem>
    <Link to="/">Home</Link>    </MenuItem>
    <MenuItem>
    <Link to="/favorites">Favorites</Link>    </MenuItem>
    <MenuItem>
    <Link to="/shopping-list">Shopping List</Link>    </MenuItem>
  </MenuList>
</Menu>
</nav>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/favorites" element={<Favorites />} />
  <Route path="/shopping-list" element={<ShoppingList />} />
</Routes>
    </div>
  );
}

export default App;
