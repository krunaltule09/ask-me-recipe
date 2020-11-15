import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react'
import Recipe from './components/Recipe';

function App() {
  const APP_ID='9a5d600d';
  const APP_KEY='63766535b43746ac383a917426c634ae';

  

  const [counter,setCounter]=useState(1);
  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState('');
  const [query,setQuery]=useState('chicken')
  const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
   
  useEffect(  ()=>{
    getRecipes();
    // console.log("effect has been run");

  },[query])

  const getRecipes=async ()=>{
    const response=await fetch(url);
    const data=await response.json();
    console.log(data.hits);
    setRecipes(data.hits)

  }

  const getInput=e=>{
    setSearch(e.target.value);
    // console.log(search);
  }

  const getSearch=e=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
    console.log(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
  }


  if(recipes.length==0){
    return (

      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" onChange={getInput} value={search}/>
          <button type="submit"  className="search-button">Search</button>
        </form>
        <h2 >Sorry! No recipes found</h2>
          
          
      
        
      </div>
    );
  }

  return (

    <div className="App">
      <h1>Ask Me Recipes</h1>
      <form onSubmit={getSearch} className="search-form">
      
        <input className="search-bar" onChange={getInput} value={search}/>
        <button type="submit"  className="search-button">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe=> <Recipe key={recipe.recipe.url} calories={recipe.recipe.calories} image={recipe.recipe.image} label={recipe.recipe.label} ingredients={recipe.recipe.ingredients} healthLabels={recipe.recipe.healthLabels}/>)}
      </div>
        
        
    
      
    </div>
  );
}

export default App;
