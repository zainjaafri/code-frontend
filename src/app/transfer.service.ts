import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {
  printToConsole(arg: string){
    console.log(arg);
  }

  private _idfromSource = new Subject<string>();
  idfromSource$ = this._idfromSource.asObservable();

  constructor() { }

  sendId(id:string){
    this._idfromSource.next(id);
    //alert(id);
  }
}
