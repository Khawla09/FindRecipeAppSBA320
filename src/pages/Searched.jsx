import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
function Searched() {
    const apikey = import.meta.env.VITE_API_KEY;

    const[searchedRecipes, setSearchesRecipes]= useState([]);
    const params = useParams()
    const getSearched = async(name)=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apikey}&query=${name}`);
    const recipes=await  data.json();

setSearchesRecipes(recipes.results)

    }
    useEffect(()=>{
        // we get .search from the path in pages
getSearched(params.search)
// console.log(params.search)
    },[params.search]);

  return (
    <Grid>
        {searchedRecipes.map((item)=>(
          <Card key={item.id}>
         <Link to={`/recipe/${item.id}`}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
           </Link>

          </Card>
        ))}
    </Grid>
  )
}
const Grid= styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 2rem;

`
const Card= styled.div`
img{
width:100%;
border-radius: 2rem;
}
a{
text-decoration: none;
}
h4{
text-align: center;
padding:1rem;
}
`

export default Searched