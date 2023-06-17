export const setToCaloriesAndProtein = (bmi) => {
    let maxCalories = 700
    let minProtein = 0
    console.log(bmi,'sekar')
    if(bmi<18.5){
        maxCalories = 700 - (bmi*(200/18.5))
        minProtein = (bmi*(10/18.5)) + 0
    }
    else if(bmi>=18.5 && bmi<25){
        maxCalories = 500 - ((bmi-18.5)*(200/6.5))
        minProtein = ((bmi-18.5)*(10/6.5)) + 10
    }
    else{
        maxCalories = 300;
        minProtein = 25;
    }
    return {maxCalories,minProtein}
}

