import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import foodImage from '../images/food.png'
import { BiSearchAlt2 } from 'react-icons/bi';
import FoodListSource from '../data/foodList-source';
import axios from 'axios'
import FoodList from '../components/FoodList';
function Food() {
    const [foods,setFoods] = useState([])
    useEffect(()=>{
        async function fetchDataRecipe(){
            try {
                const data = await FoodListSource.getList()
                setFoods(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDataRecipe();
    },[])
  return (
    <div id="food">
        <section className="heroImage">
        </section>
        <section className="foodSection">
            <h2 className='subTitle'>Our recommendation</h2>
            <form action="" className='filterFoods'>
                <div className="inputArea">
                    <input placeholder='Search...' id='searchFood' type="text" />
                    <label hidden='hidden' htmlFor="searchFood"></label>
                    <i> < BiSearchAlt2 /></i>
                </div>
            </form>
            <div className="foodsContainer">
                <FoodList foods={foods} />
            </div>
        </section>
    </div>
  )
}

export default Food