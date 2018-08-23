import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class LinkedinLoginService {

  constructor(private http:HttpClient) { }

  getAutorizationCode(){
    return this.http.get('https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=77bhchu07m7fuk&redirect_uri=https%3A%2F%2Fwww.isaackbn.github.io/dreamwakers%2Fauth%2Flinkedin&state=987654321&scope=r_basicprofile')
  }
}
