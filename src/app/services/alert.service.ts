import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { EnvironmentService } from './environment.service'



@Injectable({
  providedIn: 'root'
})
export class AlertService {

  alerts: EventEmitter<object> = new EventEmitter(); //subscriptions: topbar, home, auth-redirect

  constructor(private http:HttpClient, private envir:EnvironmentService) { }

  mainAlert(){
    return this.http.get(this.envir.getServer("noEncode")+'/alerts/id/main')
  }





  //REQUEST ALERT

  //called from home,..
  getAlert(tag, callback){
    var sessionId = localStorage.getItem("sessionId")
    if ( sessionId != null) this.requestAlert(sessionId, tag, callback)
  }
  //send get alert request
  private requestAlert(sessionId, tag, callback){        
    this.http.get(this.envir.getServer("noEncode")+'/alerts/get/'+sessionId+"/"+tag).subscribe(res => {      
      var alertObj:any = res
      this.emitAlert(alertObj)
      callback
    })
  }
  //called here
  emitAlert(alertObj){  
    if(typeof alertObj.error != "undefined"){ //received error trying to get alert object
      console.log("alertObj msg: "+alertObj.error)
      this.alerts.emit(alertObj);
      //if(alertObj.error == "Auth failed") this.profile.emit({order:"sign out"}) //topbar subscribes to this
      return
    }
    this.alerts.emit(alertObj);
  }





  //SAW ALERT

  //called from home,..
  sawAlert(tag, callback){
    var sessionId = localStorage.getItem("sessionId")
    if ( sessionId != null) this.sawAlertMsg(sessionId, tag, callback)
  }
  //send sawAlert info
  private sawAlertMsg(sessionId, tag, callback){    
    this.http.get(this.envir.getServer("noEncode")+'/alerts/remove/'+sessionId+"/"+tag).subscribe(res => {
      var sawAlert_resObj:any = res
      this.emitSawAlertResponse(sawAlert_resObj)
      callback
    })
  }
  //called here
  emitSawAlertResponse(sawAlert_resObj){  
    if(typeof sawAlert_resObj.error != "undefined"){ //received error trying to remove alert
      console.log("sawAlert_resObj msg: "+sawAlert_resObj.error)
      this.alerts.emit(sawAlert_resObj);
      //if(alertObj.error == "Auth failed") this.profile.emit({order:"sign out"}) //topbar subscribes to this
      return
    }
    this.alerts.emit(sawAlert_resObj);
  }




}
