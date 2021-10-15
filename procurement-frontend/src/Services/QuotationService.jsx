import axios from 'axios';

class QuotationService{
   
    getAllQuotation(){
        return axios.get('http://localhost:8080/quotation/getall')
    } 
    getQuotationById(id ){
        return axios.get('http://localhost:8080/quotation/getById/' + id);
    }

    createQuotation(quotation){
        return axios.post('http://localhost:8080/quotation/create', quotation);

    }
}
export default new QuotationService();