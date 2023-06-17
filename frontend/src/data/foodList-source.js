import axios from 'axios';
import API_ENDPOINT from '../global/api-endpoint';
// import getWithLoader from '../utils/getWithLoader';
// import errorHandler from '../utils/errorHandler';
// import { hideLoader, showLoader } from '../utils/loader-initiator';

class FoodListSource {
  static async getList(maxCalories,minProtein) {
    const response = await axios.get(API_ENDPOINT.DIETFOODS(maxCalories,minProtein));
    const data = response.data;
    // console.log(data);
    return data;
  }
  static async getDetail(id) {
    const response = await axios.get(API_ENDPOINT.GETDETAILS(id));
    const data = response.data;
    return data;
  }
}

export default FoodListSource;
