import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import foodImage from '../images/food.png'
import { BiSearchAlt2 } from 'react-icons/bi';
import FoodListSource from '../data/foodList-source';
import axios from 'axios'
import FoodList from '../components/FoodList';
import { useSelector } from 'react-redux';
import { setToCaloriesAndProtein } from '../utils/setToCaloriesAndProtein';
function Food() {
    const [foods,setFoods] = useState([])
    const {BMI} = useSelector(state=> state.counter)
    const {maxCalories,minProtein} = setToCaloriesAndProtein(BMI.BMI || 0)
    const [query,setQuery] = useState('')
    useEffect(()=>{
        async function fetchDataRecipe(){
            try {
                const data = await FoodListSource.getList(maxCalories,minProtein)
                setFoods(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDataRecipe();
    },[])
    console.log(query)
  return (
    <div id="food">
        <section className="heroImage">
        </section>
        <section className="foodSection">
            <h2 className='subTitle'>Our recommendation</h2>
            <div className="foodsContainer">
                <FoodList foods={foods} />
            </div>
        </section>
    </div>
  )
}

export default Food