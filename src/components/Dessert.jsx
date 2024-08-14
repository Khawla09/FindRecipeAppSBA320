import React,{useState, useEffect} from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
//a library for using caroussel
import '@splidejs/react-splide/css';
import styled from "styled-components"
import { Link } from 'react-router-dom';

function Dessert() {
  const apikey = import.meta.env.VITE_API_KEY;
const [dessert, setDessert]= useState([]);

    useEffect(()=>{
 getDessert()
    },[])
const getDessert =async()=>{
  //here we are checking id data saved in local storage
  const check = localStorage.getItem("dessert");
  if(check){
    setDessert(JSON.parse(check))
  }else{
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apikey}&number=8&tags=dessert`)
      const data = await response.json();
      // add items to local storage
      localStorage.setItem("dessert", JSON.stringify(data.recipes))
      setDessert(data.recipes)
      console.log(data.recipes)
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
  7    }
    } catch (error) {
      console.log(error)
    }
  }}
  return (
    <Wrapper>
      <h3>Our Dessert Picks</h3>
      <Splide  options={{
        perPage:4,
        gap: "5rem",
        arrows: true,
        pagination: true,
        drag:"free"
      }}>
      {dessert.map(recipe =>
        (
          <SplideSlide key={recipe.id}>
            {/* div = card */}
      <Card key={recipe.id}> 
          <Link to={`/recipe/${recipe.id}`}>
          <p>{recipe.title}</p>
          <img src={recipe.image} alt={recipe.title} />
          <Gradient />
          
          </Link>
       </Card>
          </SplideSlide>
        )
      
      )} 
      </Splide>
    </Wrapper>
  )
}
const Wrapper = styled.div`
margin: 4rem 0rem;
`
const Card= styled.div`
min-height: 25rem;
border-radius: 2rem;
overflow: hidden;
position: relative;

img{
border-radius: 2rem;
position: absolute;
left:0;
width: 100%;
height: 100%;
object-fit: cover;
}
p{
position: absolute;
z-index : 10;
left: 50%;
bottom: 0%;
 transform: translate(-50%, 0%);
color: white;
width: 100%;
font-weight: 600;
font-size:1rem;
height: 40%;
text-align: center;
display:flex;
justify-content: center;
align-items: center;

}
`
const Gradient = styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`
export default Dessert