import React from 'react'
import datas from '../data/articles-db.json'
import {Link} from 'react-router-dom'
import CardList from '../components/CardList'

function Article() {
  const dataArticle = datas.articles
  return (
    <div id="article">
      <div className="heroImage">
        <div className="content">
          <h1>Our Articles.</h1>
          <a href='#cardContainer'>Read More</a>
        </div>
      </div>
      <CardList datas = {dataArticle} />
    </div>
  )
}

export default Article