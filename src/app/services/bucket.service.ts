import { Injectable } from '@angular/core';
import { Observable, observable, ReplaySubject } from 'rxjs';
import { Services } from '@angular/core/src/view';
import { DataType} from '../support-ts/dataTypes'


@Injectable({
  providedIn: 'root'
})
export class BucketService {

  dwForm = new ReplaySubject(1) //read: topbar; write: dwform, forms-dw
  search = {
    showRes : new ReplaySubject(1),
    barActive : new ReplaySubject(1) //read: home-search, write: topbar
  }
  clientMonitor = new ReplaySubject(1) //read: , write: topbar
  loadIcon = new ReplaySubject(1) //read: , write: topbar

  constructor() {}


}