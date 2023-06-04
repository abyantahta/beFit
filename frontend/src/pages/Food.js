import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import foodImage from '../images/food.png'
import { BiSearchAlt2 } from 'react-icons/bi';
import FoodRecipe from '../data/foodRecipeSource';
import axios from 'axios'
function Food() {
    const [foods,setFoods] = useState([])
    useEffect(()=>{
        async function fetchDataRecipe(){
            try {
                const data = await FoodRecipe.getList()
                // const data = foods.data
                setFoods(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDataRecipe();
        // console.log(foods)
    },[])

    // const foods = await axios.get('https://api.spoonacular.com/recipes/findByNutrients?apiKey=b7fdae676c0b4cb488fd18ba2796dced&maxCalories=500&minProtein=30')
    // const data = foods.data
    // console.log(data)
  return (
    <div id="food">

        <section className="heroImage">
        </section>

        <section className="recipe">
            <form action="" className='filterFoods'>
                <div className="inputArea">
                    <input placeholder='Search...' id='searchFood' type="text" />
                    <label hidden='hidden' htmlFor="searchFood"></label>
                    <i> < BiSearchAlt2 /></i>
                </div>
            </form>
            <h2 className='subTitle'>Our recommendation</h2>
            <div className="foodsContainer">
                {
                    foods.map((food)=>(
                        <div className="foodItem">
                            <div className="imgArea">
                                <img src={food.image} alt="" />
                            <div className="foodContentContainer">
                                <div className="foodContent">
                                    <h2 className="foodName">{food.title}</h2>
                                    <p className="categories">Salad</p>
                                    <button className="details">Detail</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        
                    ))
                }
                        {/* <div className="foodItem">
                            <div className="imgArea">
                                <img src={foodImage} alt="" />
                            <div className="foodContentContainer">
                                <div className="foodContent">
                                    <h2 className="foodName">Salad</h2>
                                    <p className="categories">Salad</p>
                                    <button className="details">Detail</button>
                                </div>
                            </div>
                            </div>
                        </div> */}
            </div>
        </section>
    </div>
  )
}

export default Food