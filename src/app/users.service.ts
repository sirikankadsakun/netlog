import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

 async login(username,password){
    let apiurl ='http://localhost/netlogapi/users.php';
    let result= await axios.post(apiurl,{
      Apikey: 'NetLogApi',
      fn: 'Login',
      users_name: username,
      users_password: password
    });
    return result.data;

    
  }
}
