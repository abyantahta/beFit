import axios from 'axios';
import API_ENDPOINT from '../global/api-endpoint';

class FoodListSource {
  static async getList(maxCalories,minProtein) {
    const response = await axios.get(API_ENDPOINT.DIETFOODS(maxCalories,minProtein));
    const data = response.data;
    return data;
  }
  static async getDetail(id) {
    const response = await axios.get(API_ENDPOINT.GETDETAILS(id));
    const data = response.data;
    return data;
  }
}

export default FoodListSource;
