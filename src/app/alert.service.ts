import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { EnvironmentService } from './environment.service'



@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private http:HttpClient, private envir:EnvironmentService) { }

  mainAlert(){
    return this.http.get(this.envir.getServer("noEncode")+'/alerts/id/main')
  }
}
