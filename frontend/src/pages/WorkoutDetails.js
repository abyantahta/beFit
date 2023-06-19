import React from 'react'
import { useParams } from 'react-router-dom'
import datas from '../data/workout-db.json'
import { Link } from 'react-router-dom';
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'

const nextId = (id,dataArticles) => {
    return (id % dataArticles.length)+1;
}
const prevId = (id,dataArticles) => {
    if(id===1) return dataArticles.length
    
    return id-1
    
}
function WorkoutDetails() {
    const paramsId = useParams();
    const id = parseInt(paramsId.id)
    const dataArticles = datas.workout
    // let direction = dataArticles.direction
    // console.log(dataArticles)
    const data = dataArticles.filter(d => d.id === id)[0]
  return (
    <div className="articleDetails">
        <div className="imgArea">
            <img src={data.imageUrl} alt="" />
            <div className="container">
                <h1>{data.title}</h1>
                <div className="buttonContainer">
                    <Link to={`../workout/${prevId(id,dataArticles)}`} className='button'>Previous</Link>
                    <Link to={`../workout/${nextId(id,dataArticles)}`} className='button'>Next</Link>
                </div>
            </div>
            <Link to='../workout' className="back">
                <i><BsFillArrowLeftSquareFill/></i>
                <p>Back</p>
            </Link>
        </div>
        <div className="textArea">
            <h4>{data.description}</h4>
              <h2>How to :</h2>
            {
              data.direction.map((d,index)=>(
                <h3>Step {index+1} : {d}</h3>
              ))
              // Object.values(dataArticles.direction[0]).forEach(val => console.log(val));
            }
        </div>
    </div>
  )
}

export default WorkoutDetails