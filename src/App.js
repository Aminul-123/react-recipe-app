//import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

import { Routes, Route } from 'react-router-dom';
import RecipeId from './components/RecipeId';
import Category from './components/Category';
import Search from './components/Search';


function App() {
  
  return (
   <>
   <Routes>
<Route path='/' element={<Home/>} />
<Route path='/:idMeal' element={<RecipeId/>} />
<Route path='/category/:name' element={<Category/>} />
<Route path='/searchItem/:itemName' element={<Search/>} />

   </Routes>
 
 
 
  </>
  );
}

export default App;
