import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'




@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) {}

  getUsers(){
    return this.http.get('https://dreamwakers.herokuapp.com/users')
  }

  getUser(userId){
    return this.http.get('https://dreamwakers.herokuapp.com/users/'+userId)
  }

  postUser(){
    return this.http.get('https://dreamwakers.herokuapp.com/posts')
  }

}
