import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
   apiurl ='http://localhost/netlogapi/users.php';
  constructor() { }
 async login(username,password){
    let result= await axios.post(this.apiurl,{
      Apikey: 'NetLogApi',
      fn: 'Login',
      users_name: username,
      users_password: password
    });
    return result.data;

    
  }

  async getAllUsers(){
    let result= await axios.post(this.apiurl,{
      Apikey: 'NetLogApi',
      fn: 'SelectAll',
    });
   
    return result.data;

    
  }


}
