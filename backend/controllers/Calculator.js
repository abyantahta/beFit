const Calculator = async (req,res) =>{
    const {tinggi,berat,gender} = req.body;
    // console.log(tinggi,berat)
    const BMI = (berat/((tinggi/100)*(tinggi/100))).toFixed(2);
    res.send({BMI})
}
export default Calculator
