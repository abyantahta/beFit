import React, { useState } from 'react'
import scaleImage from '../images/scaleImage.png'
import jarumImage from '../images/jarum.png'
import logo from '../images/logo.png'
import food from '../images/food.png'
import workoutImage from '../images/workout.png'
import foodImage from '../images/foodImage.png'
import bodyImage from '../images/bodyPhoto.png'
import {HiRefresh} from 'react-icons/hi'
import axios from 'axios'
function Landing() {
  const [berat,setBerat] = useState(0);
  const [tinggi,setTinggi] = useState(0);
  const [gender,setGender] = useState('male'); 
  const [BMI,setBMI] = useState(0)
  // console.log(berat)
  // console.log(tinggi)
  const handleBMICalculator = async (e) =>{
    e.preventDefault();
    const response = await axios.post('http://localhost:4000/calculateBMI',{
      berat,tinggi,gender
    });
    setBMI(response.data.BMI);
  }
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
              <input type="number" onChange={(e)=> setBerat(e.target.value)} />
            </div>
            <div className="inputArea">
              <label htmlFor="">Tinggi Badan (cm) : </label>
              <input type="number" onChange={(e)=> setTinggi(e.target.value)} />
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
            <button type="submit" onClick={handleBMICalculator}>Hitung</button>
            
          </form>
        </div>

      </section>
      { BMI===0 ? '':(
        <section id="categoriesSection">
          <h2>Result</h2>
          <div className="container">
            <div className="result">
              <div className="bodyImage">
                <img src={bodyImage} alt="" />
                <div className="text">
                <h3>{BMI}</h3>
                <h4>kurus</h4>
                </div>
              </div>
            </div>
            <div className="resultDesc">
              <h3>BMI kamu tergolong <span>kurus</span></h3>
              <h4>Berikut catatan dari kami!</h4>
              <ul>
                <li>Tingkatkan konsumsi protein untuk mencapai berat badan ideal</li>
                <li>Untuk mencapai berat badan ideal kamu perlu makan makanan bergizi dan tingkatkan frekuensi makan</li>
                <li>Tingkatkan aktivitas dan berolahraga secara teratur, dan lakukan pola hidup sehat</li>
              </ul>
              <a className='refreshBMI' href="#calculatorSection">
                Perbarui Hasil BMI
                <i><HiRefresh/></i>
              </a>
            </div>
            <div className="recommendation">
              <h3>Lihat rekomendasi makanan sesuai dengan BMI mu !</h3>
              <div className="imgContainer">
                <div className="imgArea">
                  <img src={food} alt="" />
                </div>
                <h4>Food</h4>
              </div>
            </div>
          </div>
          {/* <div className="imgContent">
            <div className="imgContainer">
              <img src={foodImage} alt="" />
              <h3>Food</h3>
            </div>
            <div className="imgContainer">
              <img src={workoutImage} alt="" />
              <h3>Workout</h3>
            </div>
          </div> */}
        </section>
      )
      }
      <section id="aboutUs">
        <h2>About Us</h2>
        <div className="container">
            <div className="item">
              <div className="imgArea">
                <img src="" alt="" />
              </div>
              <h3>Abyan Tahta</h3>
            </div>
            <div className="item">
              <div className="imgArea">
                <img src="" alt="" />
              </div>
              <h3>Abyan Tahta</h3>
            </div>
            <div className="item">
              <div className="imgArea">
                <img src="" alt="" />
              </div>
              <h3>Abyan Tahta</h3>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Landing