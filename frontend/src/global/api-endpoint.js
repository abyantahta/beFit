import config from "./config";

const API_ENDPOINT = {
    DIETFOODS : (maxCalories,minProtein) => `${config.BASE_URL}findByNutrients?apiKey=${config.FOOD_API_KEY}&maxCalories=${maxCalories}&minProtein=${minProtein}`,
    GETDETAILS: (id) => `${config.BASE_URL}${id}/information?apiKey=${config.FOOD_API_KEY}&includeNutrition=true`,
}

export default API_ENDPOINT