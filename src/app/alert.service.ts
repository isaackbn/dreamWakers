import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private http:HttpClient) { }

  mainAlert(){
    return this.http.get('https://dreamwakers.herokuapp.com/alerts/main')
  }
}
