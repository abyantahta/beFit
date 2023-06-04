import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import FoodListSource from '../data/foodList-source'

function FoodDetails() {
  const [food,setFood] = useState({})
  const [instructions,setInstructions]= useState([])
  const [nutrients,setNutrients]= useState([])
  // let food;
  const idParams = useParams();
  useEffect(()=>{
        async function fetchDetails(){
            try {
                const data = await FoodListSource.getDetail(idParams.id)
                console.log(data)
                setFood(data)
                setInstructions(data.analyzedInstructions[0].steps)
                setNutrients(data.nutrition.nutrients.filter((nutrient)=>{
                  return nutrient.name==='Calories'||nutrient.name==='Protein'||nutrient.name==='Fat'||nutrient.name==='Carbohydrates'
                }))
            } catch (error) {
                console.log(error)
            }
        }
        fetchDetails();
    },[])
    console.log(food)
    console.log(nutrients)
  return (
    <>    
    <h1>a</h1>
    <h1>a</h1>
    <h1>a</h1>
    <h1>a</h1>
    <h1>a</h1>
    <h1>a</h1>
    <h1>{food.id}</h1>
      <br />
      <br />
        <h1>Dish Name</h1>
    <p>{food.title}</p>
    {/* <h2>{nutrients}</h2> */}
      <br />
      <br />
        <h1>Dish types</h1>
    <ul>
      {
        food.dishTypes?.map((dishType)=>(
          <li>{dishType}</li>
        ))
      }
    </ul>
      <br />
      <br />
        <h1>Nutrients</h1>
    <ul>
      {
        nutrients?.map((nutrient)=>(
          <li>{nutrient.amount}{nutrient.name}</li>
        ))
      }
    </ul>
      <br />
      <br />
        <h1>Ingredients</h1>
    <ul>
      {
        food.extendedIngredients?.map((ingredient)=>(
          <li>{ingredient.original}</li>
        ))
      }
    </ul>
    <br />
    <br />
      <h1>Instruction</h1>
        <ul>
      {
        instructions?.map((instruction)=>(
          <li>{instruction.number}. {instruction.step}</li>
        ))
      }
    </ul>
    {/* <h1>{ingredients}</h1> */}
    
    {/* {food.instructions} */}
    {/* <h1>{food}</h1>
    <h1>{food}</h1>
    <h1>{food}</h1>
    <h1>{food}</h1>
    <h1>{food}</h1>
    <h1>{food}</h1>
    <h1>{food}</h1> */}
    {/* <h1>{food[0].instructions}</h1> */}
    </>

  )
}

export default FoodDetails