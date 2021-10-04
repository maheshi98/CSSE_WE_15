import axios from 'axios';

class OrderService{
   
    getAllOrders(){
        return axios.get('http://localhost:8080/order/getall/')
    } 
    // getApprovedOrders(){
    //     return axios.get('http://localhost:8080/order/getall/')
    // } 
    // getAccessoryById(id ){
    //     return axios.get('http://localhost:8080/petAccessory/getById/' + id);
    // }
}
export default new OrderService();