import React from 'react'
import { Link } from 'react-router-dom'
function FoodItem({food}) {
  return (
    <div className="foodItem">
      <div className="imgArea">
          <img src={food.image} alt="" />
      <div className="foodContentContainer">
          <div className="foodContent">
              <h2 className="foodName">{food.title}</h2>
              <p className="categories">Salad</p>
              <Link to={`./${food.id}`} className="details">Detail</Link>
          </div>
      </div>
      </div>
    </div>
  )
}

export default FoodItem