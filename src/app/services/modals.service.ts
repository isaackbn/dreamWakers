import { Injectable } from '@angular/core';
import { Observable, observable, ReplaySubject } from 'rxjs';
import { Services } from '@angular/core/src/view';
import { ModalsData} from '../modalsDataTypes'


@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  dwFormBucket = new ReplaySubject(1) //listeners: topbar

  constructor() { }


  dwFormEmit(data:ModalsData.dwForm){    
    this.dwFormBucket.next(data)    
  }

}