import React from 'react'
import scaleImage from '../images/scaleImage.png'
import jarumImage from '../images/jarum.png'
import logo from '../images/logo.png'
import workoutImage from '../images/workout.png'
import foodImage from '../images/foodImage.png'
function Landing() {
  return (
    <div id="home">
      <section className="landingPage">
        <h1>BeFit.</h1>
        <div className="scaleImage">
          <img src={scaleImage} alt="" />
          <div className="jarumImage">
            <img src={jarumImage} alt="" />
          </div>
        </div>
      </section>
      <section className="aboutBeFit">
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
      <section className="calculatorSection">
        <div className="container">
          <h2 className='takeline'>Ayo Cari Berat Badan Idealmu!</h2>
          <form className="calculator">
            <h2>Kalkulator BMI</h2>
            <div className="inputArea">
              <label htmlFor="">Berat Badan : </label>
              <input type="text" />
            </div>
            <div className="inputArea">
              <label htmlFor="">Tinggi Badan : </label>
              <input type="text" />
            </div>
            <div className="inputArea">
              <label htmlFor="">Jenis Kelamin : </label>
              <div className="inputRadio">
                <input type="radio" name="gender" id="lakilaki" />
                <label htmlFor="lakilaki">Laki-Laki</label> <br />
                <input type="radio" name="gender" id="perempuan" />
                <label htmlFor="perempuan">Perempuan</label>
              </div>
            </div>
            <button type="submit">Hitung</button>
            
          </form>
        </div>

      </section>
      <section className="categoriesSection">
        <h2>Other Feautres</h2>
        <div className="imgContent">
          <div className="imgContainer">
            <img src={foodImage} alt="" />
            <h3>Food</h3>
          </div>
          <div className="imgContainer">
            <img src={workoutImage} alt="" />
            <h3>Workout</h3>
          </div>
        </div>
      </section>
      <section className="aboutUs">
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