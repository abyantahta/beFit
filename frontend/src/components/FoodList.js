import React from 'react'
import FoodItem from './FoodItem'
function FoodList({foods}) {
  console.log(foods)
  return (
    <>
    {
      foods.map((food)=>(
        <FoodItem key={food.id} food={food} />
      ))
    }
    </>
  )
}

export default FoodList