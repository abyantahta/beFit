// const chooseDescription = (BMI) =>{
//     if
// }
const dataDesc2 = [
    {
        desc : "kurus",
        tips : [
            "Tingkatkan konsumsi protein untuk mencapai berat badan ideal",
            "Untuk mencapai berat badan ideal kamu perlu makan makanan bergizi dan tingkatkan frekuensi makan",
            "Tingkatkan aktivitas dan berolahraga secara teratur, dan lakukan pola hidup sehat"
        ]
    },
    {
        desc : "ideal",
        tips : [
            "Pertahankan asupan kalori untuk memenuhi kebutuhan kalori harian",
            "Jaga keseimbangan asupan makanan, jalankan pola rutin hidup sehat, ",
        ]
    },
    {
        desc : "overweight",
        tips : [
            "Tingkatkan konsumsi protein untuk mencapai berat badan ideal",
            "Tingkatkan asupan protein untuk meningkatkan massa otot",
            "Untuk mencapai berat badan ideal kamu perlu makan makanan bergizi dan tingkatkan frekuensi makan",
            "Tingkatkan aktivitas dan berolahraga secara teratur, dan lakukan pola hidup sehat"
        ]
    },
    {
        desc : "obesity",
        tips : [
            "Tingkatkan konsumsi protein untuk mencapai berat badan ideal",
            "Tingkatkan asupan protein untuk meningkatkan massa otot",
            "Kurangi asupan kalori agar bisa defisit kalori",
            "Tingkatkan aktivitas dan berolahraga secara teratur, dan lakukan pola hidup sehat"
        ]
    },
]
const dataDesc = (BMI,res) => {
    console.log(BMI)
    switch (true) {
        case (BMI < 18.5):
            res.send({
                BMI : BMI,
                desc : "kurus",
                tips : [
                    "Tingkatkan konsumsi protein untuk mencapai berat badan ideal",
                    "Untuk mencapai berat badan ideal kamu perlu makan makanan bergizi dan tingkatkan frekuensi makan",
                    "Tingkatkan aktivitas dan berolahraga secara teratur, dan lakukan pola hidup sehat"
                ]
            },)
            break;
        case (BMI < 25):
            res.send({
                BMI : BMI,
                desc : "ideal",
                tips : [
                    "Pertahankan asupan kalori untuk memenuhi kebutuhan kalori harian",
                    "Jaga keseimbangan asupan makanan, jalankan pola rutin hidup sehat, ",
                ]
            },)
            break;
        case (BMI < 30):
            res.send({
                BMI : BMI,
                desc : "overweight",
                tips : [
                    "Tingkatkan konsumsi protein untuk mencapai berat badan ideal",
                    "Tingkatkan asupan protein untuk meningkatkan massa otot",
                    "Untuk mencapai berat badan ideal kamu perlu makan makanan bergizi dan tingkatkan frekuensi makan",
                    "Tingkatkan aktivitas dan berolahraga secara teratur, dan lakukan pola hidup sehat"
                ]
            },)
            break;
        default:
            res.send({
                BMI : BMI,
                desc : "obesity",
                tips : [
                    "Tingkatkan konsumsi protein untuk mencapai berat badan ideal",
                    "Tingkatkan asupan protein untuk meningkatkan massa otot",
                    "Kurangi asupan kalori agar bisa defisit kalori",
                    "Tingkatkan aktivitas dan berolahraga secara teratur, dan lakukan pola hidup sehat"
                ]
            })
            break;
    }
}
export const Calculator = async (req,res) =>{
    const {tinggi,berat,gender} = req.body;
    // console.log(tinggi,berat)
    const BMI = (berat/((tinggi/100)*(tinggi/100))).toFixed(2);
    // res.send({BMI})
    dataDesc(BMI,res);
}

// export default Calculator
