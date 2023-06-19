import React from 'react'
import { useParams } from 'react-router-dom'
import datas from '../data/articles-db.json'
import { Link } from 'react-router-dom';
import {BsFillArrowLeftSquareFill} from 'react-icons/bs'

const nextId = (id,dataArticles) => {
    return (id % dataArticles.length)+1;
}
const prevId = (id,dataArticles) => {
    if(id===1) return dataArticles.length
    
    return id-1
    
}
function ArticleDetails() {
    const paramsId = useParams();
    const id = parseInt(paramsId.id)
    const dataArticles = datas.articles
    const data = dataArticles.filter(d => d.id === id)[0]
    // let nextId = (id % dataArticles.length)+1;
    // let prevId = ((id + dataArticles.length)-1);
    console.log(data)
  return (
    <div className="articleDetails">
        <div className="imgArea">
            <img src={data.imageUrl} alt="" />
            <div className="container">
                <h1>{data.title}</h1>
                <div className="buttonContainer">
                    <Link to={`../article/${prevId(id,dataArticles)}`} className='button'>Previous</Link>
                    <Link to={`../article/${nextId(id,dataArticles)}`} className='button'>Next</Link>
                </div>
            </div>
            <Link to='../article' className="back">
                <i><BsFillArrowLeftSquareFill/></i>
                <p>Back</p>
            </Link>
        </div>
        <div className="textArea">
            <p>{data.description}</p>
        </div>
    </div>
  )
}

export default ArticleDetails