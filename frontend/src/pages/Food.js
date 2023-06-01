import React from 'react'
import Header from '../components/Header'
import foodImage from '../images/food.png'
import { BiSearchAlt2 } from 'react-icons/bi';
function Food() {
  return (
    <div id="food">

        <section className="heroImage">
        </section>

        <section className="recipe">
            <form action="" className='filterFoods'>
                <div className="inputArea">
                    <input placeholder='Search...' id='searchFood' type="text" />
                    <label hidden='hidden' htmlFor="searchFood"></label>
                    <i> < BiSearchAlt2 /></i>
                </div>
            </form>
            <h2 className='subTitle'>Our recommendation</h2>
            <div className="foodsContainer">
                <div className="foodItem">
                    <div className="imgArea">
                        <img src={foodImage} alt="" />
                    <div className="foodContentContainer">
                        <div className="foodContent">
                            <h2 className="foodName">Italian Salad</h2>
                            <p className="categories">Salad</p>
                            <button className="details">Detail</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="foodItem">
                    <div className="imgArea">
                        <img src={foodImage} alt="" />
                    <div className="foodContentContainer">
                        <div className="foodContent">
                            <h2 className="foodName">Italian Salad</h2>
                            <p className="categories">Salad</p>
                            <button className="details">Detail</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="foodItem">
                    <div className="imgArea">
                        <img src={foodImage} alt="" />
                    <div className="foodContentContainer">
                        <div className="foodContent">
                            <h2 className="foodName">Italian Salad</h2>
                            <p className="categories">Salad</p>
                            <button className="details">Detail</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="foodItem">
                    <div className="imgArea">
                        <img src={foodImage} alt="" />
                    <div className="foodContentContainer">
                        <div className="foodContent">
                            <h2 className="foodName">Italian Salad</h2>
                            <p className="categories">Salad</p>
                            <button className="details">Detail</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="foodItem">
                    <div className="imgArea">
                        <img src={foodImage} alt="" />
                    <div className="foodContentContainer">
                        <div className="foodContent">
                            <h2 className="foodName">Italian Salad</h2>
                            <p className="categories">Salad</p>
                            <button className="details">Detail</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="foodItem">
                    <div className="imgArea">
                        <img src={foodImage} alt="" />
                    <div className="foodContentContainer">
                        <div className="foodContent">
                            <h2 className="foodName">Italian Salad</h2>
                            <p className="categories">Salad</p>
                            <button className="details">Detail</button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="foodItem">
                    <div className="imgArea">
                        <img src={foodImage} alt="" />
                    <div className="foodContentContainer">
                        <div className="foodContent">
                            <h2 className="foodName">Italian Salad</h2>
                            <p className="categories">Salad</p>
                            <button className="details">Detail</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Food