import axios from 'axios';

class QuotationService{
   
    getAllQuotation(){
        return axios.get('http://localhost:8080/getAllOrder/')
    } 
    // getAccessoryById(id ){
    //     return axios.get('http://localhost:8080/petAccessory/getById/' + id);
    // }
}
export default new QuotationService();