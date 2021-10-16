import axios from 'axios';

class OrderService {

    getAllOrders() {
        return axios.get('http://localhost:8080/order/getall/')
    }
 
    getOrderById(id) {
        return axios.get('http://localhost:8080/order/getById/' + id);
    }

    changeStatus(id, order) {
        return axios.put('http://localhost:8080/order/update/' + id, order)
    }

    getApprovedOrders() {
        return axios.get('http://localhost:8080/order/approvedOrders');

    }
}
export default new OrderService();