import axios from 'axios';

const STORE_DETAILS_URL = 'http://localhost:8080/api/v1/store-details'
const PRODUCT_DETAILS_URL = 'http://localhost:8080/api/v1/product-details'

class storeDetails {
    getStoreDetails() {
        return axios.get(STORE_DETAILS_URL);
    }

    getProductDetails(){
        return axios.get(PRODUCT_DETAILS_URL);
    }
}

export default new storeDetails