export const bmiCalculation = (berat,tinggi) =>{
    const BMI = (berat/((tinggi/100)*(tinggi/100))).toFixed(2);
        switch (true) {
        case (BMI < 18.5):
            return({
                BMI : BMI,
                desc : "kurus",
                tips : [
                    "Tingkatkan konsumsi protein untuk mencapai berat badan ideal",
                    "Untuk mencapai berat badan ideal kamu perlu makan makanan bergizi dan tingkatkan frekuensi makan",
                    "Tingkatkan aktivitas dan berolahraga secara teratur, dan lakukan pola hidup sehat"
                ]
            })
        case (BMI < 25):
            return({
                BMI : BMI,
                desc : "ideal",
                tips : [
                    "Pertahankan asupan kalori untuk memenuhi kebutuhan kalori harian",
                    "Jaga keseimbangan asupan makanan, jalankan pola rutin hidup sehat, ",
                ]
            })
        case (BMI < 30):
            return({
                BMI : BMI,
                desc : "overweight",
                tips : [
                    "Tingkatkan konsumsi protein untuk mencapai berat badan ideal",
                    "Tingkatkan asupan protein untuk meningkatkan massa otot",
                    "Untuk mencapai berat badan ideal kamu perlu makan makanan bergizi dan tingkatkan frekuensi makan",
                    "Tingkatkan aktivitas dan berolahraga secara teratur, dan lakukan pola hidup sehat"
                ]
            })
        default:
            return({
                BMI : BMI,
                desc : "obesity",
                tips : [
                    "Tingkatkan konsumsi protein untuk mencapai berat badan ideal",
                    "Tingkatkan asupan protein untuk meningkatkan massa otot",
                    "Kurangi asupan kalori agar bisa defisit kalori",
                    "Tingkatkan aktivitas dan berolahraga secara teratur, dan lakukan pola hidup sehat"
                ]
            })
    }
}