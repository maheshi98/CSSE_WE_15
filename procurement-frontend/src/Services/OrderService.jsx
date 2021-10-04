import axios from 'axios';

class OrderService{
   
    getAllOrders(){
        return axios.get('http://localhost:8080/order/getall/')
    } 
    // getApprovedOrders(){
    //     return axios.get('http://localhost:8080/order/getall/')
    // } 
    getOrderById(id ){
        return axios.get('http://localhost:8080/order/getById/' + id);
    }
}
export default new OrderService();