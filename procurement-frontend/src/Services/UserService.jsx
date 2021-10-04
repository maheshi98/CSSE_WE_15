import axios from 'axios';

class UserService{
   
    login(user){
        return axios.get('http://localhost:8080/user/login/' + '/' +user)
    } 
    
}
export default new UserService();