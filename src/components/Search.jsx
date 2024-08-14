import React, { useState } from 'react'
import styled from 'styled-components'
import { FaSearch } from "react-icons/fa";
// we use useNavigate instead of navLink
import { useNavigate } from 'react-router-dom';
function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();
    
const handleSubmit =(e)=>{
   e.preventDefault();
   navigate(`/searched/${input}`)

}

  return (
    // Form
   <FormStyles onSubmit={handleSubmit} >
    <div>
    
    <FaSearch />
    <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
    </div>
 
   </FormStyles>
  )
}
const FormStyles = styled.form`
margin: 0rem 20rem;
  
  div{
  width: 100%;
  position: relative;
  }
  input{
  display:flex;
 
    border: none;
   background: linear-gradient(35deg, #da830a, #f0c594a1);

    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
   width: 100%;
   margin-bottom:10px;
  }
  svg{
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`
export default Search