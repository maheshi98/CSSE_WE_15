import axios from 'axios';

class OrderService{
   
    getAllOrders(){
        return axios.get('http://localhost:8080/getAllOrder/')
    } 
    // getAccessoryById(id ){
    //     return axios.get('http://localhost:8080/petAccessory/getById/' + id);
    // }
}
export default new OrderService();