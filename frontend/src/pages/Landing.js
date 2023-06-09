import React, { useState } from 'react'
import scaleImage from '../images/scaleImage.png'
import jarumImage from '../images/jarum.png'
import logo from '../images/logo.png'
import food from '../images/food.png'
import bodyImage from '../images/bodyPhoto.png'
import {HiRefresh} from 'react-icons/hi'
import abyan from '../images/abyan.jpg'
import workout from '../images/workout.png'
import kiki from '../images/kiki.jpg'
import milla from '../images/milla.jpg'
import {bmiCalculation} from '../utils/bmi-calculation'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../utils/bmi-slice'
import { Link } from 'react-router-dom'
function Landing() {
  const [berat,setBerat] = useState(0);
  const [tinggi,setTinggi] = useState(0);
  const [gender,setGender] = useState('male');
  const [empty,setEmpty] = useState(false);
  const dispatch = useDispatch();
  const handleBMICalculator = async (e) =>{
    e.preventDefault();
    if(berat===0 || tinggi===0){
      setEmpty(true)
      return;
    }
    setEmpty(false)
    const response = bmiCalculation(berat,tinggi)
    const BMI = response;
    dispatch(update({BMI}))

  }
  const {BMI} = useSelector(state=> state.counter)
  return (
    <div id="home">
      <section id="landingPage">
        <h1>BeFit.</h1>
        <div className="scaleImage">
          <img src={scaleImage} alt="" />
          <div className="jarumImage">
            <img src={jarumImage} alt="" />
          </div>
        </div>
      </section>
      <section id="aboutBeFit">
          <h2>Apa itu BeFit?</h2>
        <div className="logoArea">
          <img src={logo} alt="" />
        </div>
        <div className="textArea">
          <h2>Apa itu BeFit?</h2>
          <p>BeFit merupakan website yang dapat membantumu untuk memperoleh dan mempertahankan berat badan ideal. Kamu dapat mengecek dengan kalkulator BMI yang kami sediakan di bawah ini ya! <br /><br />  Setelah melihat hasilnya, kamu dapat melihat resep makanan dan kandungan gizi yang tersedia di dalamnya. Kamu juga dapat melihat workout plan untuk membantu menjaga dan mendapatkan berat badan idealmu serta melihat beberapa artikel mengenai kesehatan yang dapat menambah wawasanmu. Yuk jelajahi sekarang! :)
          </p>
        </div>
      </section>
      <section id="calculatorSection">
        <div className="container">
          <h2 className='takeline'>Ayo Cari Berat Badan Idealmu!</h2>
          <form className="calculator">
            <h2>Kalkulator BMI</h2>
            <div className="inputArea">
              <label htmlFor="">Berat Badan (kg) : </label>
              <input required type="number" onChange={(e)=> setBerat(e.target.value)} />
            </div>
            <div className="inputArea">
              <label htmlFor="">Tinggi Badan (cm) : </label>
              <input required type="number" onChange={(e)=> setTinggi(e.target.value)} />
            </div>
            <div className="inputArea">
              <label htmlFor="">Jenis Kelamin : </label>
              <div className="inputRadio">
                <div className="">
                  <input type="radio" value='male' name="gender" id="male" checked={gender==='male'} onChange={(e)=>setGender(e.target.value)} />
                  <label htmlFor="male">Laki-Laki</label> <br />
                </div>
                <div className="">
                  <input type="radio" value='female' name="gender" id="female" checked={gender==='female'} onChange={(e)=>setGender(e.target.value)} />
                  <label htmlFor="female">Perempuan</label>
                </div>
              </div>
            </div>
            {
              !empty ? '' : (
                <p className='isEmpty'>Mohon isi seluruh form</p>
              )
            }
            <button type="submit" onClick={handleBMICalculator}>Hitung</button>
            
          </form>
        </div>

      </section>
      { BMI === 0 ? '':(
        <section id="categoriesSection">
          <h2>Result</h2>
          <div className="container">
            <div className="result">
              <div className="bodyImage">
                <img src={bodyImage} alt="" />
                <div className="text">
                <h3>{BMI.BMI}</h3>
                <h4>{BMI.desc}</h4>
                </div>
              </div>
            </div>
            <div className="resultDesc">
              <h3>BMI kamu tergolong <span>{BMI.desc}</span></h3>
              <h4>Berikut catatan dari kami!</h4>
              <ul>
                {
                  BMI.tips.map((tip,index)=>(
                    <li key={index}>{tip}</li>
                  ))
                }
              </ul>
              <a className='refreshBMI' href="#calculatorSection">
                Perbarui Hasil BMI
                <i><HiRefresh/></i>
              </a>
            </div>
            <div className="recommendation">
              <h3>Lihat rekomendasi makanan sesuai dengan BMI mu !</h3>
              <div className="imgContainer">
                <Link to='./food' className="img">
                  <div className="imgArea">
                    <img src={food} alt="" />
                  </div>
                  <h4>Food</h4>
                </Link>
                <Link to='./workout' className="img">
                  <div className="imgArea">
                    <img src={workout} alt="" />
                  </div>
                  <h4>Workout</h4>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )
      }
      <section id="aboutUs">
        <h2>About Us</h2>
        <div className="container">
            <div className="item">
              <div className="imgArea">
                <img src={abyan} alt="" />
              </div>
              <h3>Abyan Tahta</h3>
            </div>
            <div className="item">
              <div className="imgArea">
                <img src={milla} alt="" />
              </div>
              <h3>Nia Millatul Izza</h3>
            </div>
            <div className="item">
              <div className="imgArea">
                <img src={kiki} alt="" />
              </div>
              <h3>Rizky Novian</h3>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Landing