import config from "./config";

const API_ENDPOINT = {
    DIETFOODS : `${config.BASE_URL}apiKey=${config.FOOD_API_KEY}&maxCalories=500&minProtein=30`
}

export default API_ENDPOINT