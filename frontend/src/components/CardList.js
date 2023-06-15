import React from 'react'
import { Link } from 'react-router-dom'
import CardItem from './CardItem'
function CardList({datas}) {
  return (
          <div id="cardContainer">
        {
          datas?.map((data)=>(
            <CardItem data={data} />
          ))
        }
      </div>
  )
}

export default CardList