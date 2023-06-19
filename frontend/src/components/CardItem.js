import React from 'react'
import { Link } from 'react-router-dom'

function CardItem({data}) {
  return (
    <div className="card" key={data.id}>
      <div className="imgArea">
        <img src={data.imageUrl} alt="" />
      </div>
    <div className="textArea">
    <Link to={`./${data.id}`} className='title'>{data.title}</Link>
    <p>{data.description}</p>
    </div>
</div>
  )
}

export default CardItem