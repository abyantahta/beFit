import React from 'react'
import CardList from '../components/CardList'
import datas from '../data/workout-db.json'

function Workout() {
    const dataWorkout = datas.workout
  return (
    <div id="workout">
      <div className="heroImage">
        <div className="content">
          <h1>Workout.</h1>
          <a href='#cardContainer'>Let's Start</a>
        </div>
      </div>
      <CardList datas = {dataWorkout} />
    </div>
  )
}

export default Workout