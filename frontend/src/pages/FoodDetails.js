import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import FoodListSource from '../data/foodList-source'

function FoodDetails() {
  const [food,setFood] = useState({})
  const [instructions,setInstructions]= useState([])
  const [nutrients,setNutrients]= useState([])
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
    <div id="foodDetails">
      <div className="container">
        <h2 className="foodName">{food.title}</h2>
        <ul className="nutrients">
          {
            nutrients?.map((nutrient)=>(
              <li><span>{nutrient.amount}</span>  {nutrient.name}</li>
            ))
          }

        </ul>
        <div className="foodSummary">
          <h2 className="subHead">About Food</h2>
          <h4 dangerouslySetInnerHTML={{__html : food.summary}}></h4>
        </div>
        <div className="imgAndIngredients">
          <div className="imgArea">
            <img src={food.image} alt="" />
          </div>
          <div className="ingredients">
            <h2 className="subHead">Ingredients</h2>
            <ul>
               {
                  food.extendedIngredients?.map((ingredient)=>(
                    <li>{ingredient.original}</li>
                  ))
                }
            </ul>
          </div>
        </div>
        <div className="instructions">
          <h2 className="subHead">Instructions</h2>
          <ol>
            {
              instructions?.map((instruction)=>(
                <li>{instruction.number}. {instruction.step}</li>
              ))
            }
          </ol>
        </div>
      </div>
    </div>
  )
}

export default FoodDetails