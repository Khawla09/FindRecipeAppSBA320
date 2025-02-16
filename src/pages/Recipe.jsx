import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
function Recipe() {
    
 let params = useParams();
 const [details, setDetails] = useState({});
 const[activeTab, setActiveTab]  =useState('instructions')
    const fetchDetails = async()=>{
const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${import.meta.env.VITE_API_KEY}`);
const detailData = await data.json();
setDetails(detailData)
    }
    useEffect(()=>{
        fetchDetails(params.id)
        console.log(details)
    },[params.id])
  return (
    <DetailWrapper>
        
      <div className={divStyle}>
        <h2>  {details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
      
        <Button className={activeTab ==='instructions'? 'active':''} onClick={()=>setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab ==='ingredients'? 'active':''} onClick={()=>setActiveTab('ingredients')}>Ingrdients</Button>
       
        {activeTab === 'instructions' &&
        (<div>
          {/*dangerouslySetInnerHTML to read Html tags that's included in the summary paragraph  */}
        
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
      
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
      </div>)}
        {activeTab === 'ingredients' &&
        (<ul>
          {(details.extendedIngredients).map((ingredient)=>(
              <li key={ingredient.id}> {ingredient.original} </li>
          ))}
      </ul>)}
        
      </Info>
    </DetailWrapper>
  )
}
const DetailWrapper = styled.div`
display: flex;
margin-top: 10rem ;
 margin-bottom: 5rem;
@media (max-width: 780px) {
flex-wrap: wrap;
}
   
   .active{
    background: linear-gradient(35deg, #f59210, #c37012a1);

    // background: linear-gradient(35deg, #494949, #313131);
    color: white;
   }
   h2{
    margin-bottom: 2rem;
   }
   li{
    font-size: 1.2rem;
    line-height: 2.5rem;

   }
   ul{
    margin-top: 2rem;
   }
`
const Button = styled.button`
  padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid #ccc5b9;
    margin-right: 2rem;
    font-weight: 600;
    cursor: pointer ;
    border-radius: 5px;
`
const Info = styled.div`
margin-left: 10rem
`
const divStyle ={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:'200px'
}
export default Recipe