import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) {}

  getUsers(){

    let body = new URLSearchParams();
    body.set('first_name', 'authorization_code');
    body.set('last_name', "test");


    return this.http.get('https://dreamwakers.herokuapp.com/users')
  }

  getUser(userId){
    return this.http.get('https://dreamwakers.herokuapp.com/users/'+userId)
  }

  postUser(){
    return this.http.get('https://dreamwakers.herokuapp.com/posts')
  }

}
