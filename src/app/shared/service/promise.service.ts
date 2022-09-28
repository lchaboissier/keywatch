import { Injectable, resolveForwardRef } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { HttpService } from '../http.service';

@Injectable({
  providedIn: 'root'
})
export class PromiseService {

  constructor(private httpService : HttpService) { }

  public getList(){
    return new Promise((resolve, reject) =>{
      this.httpService.get('posts').subscribe(
        response => {
          if (response){
            resolve(response)
          }else{
            reject()
          }
        }
      )
    })
  }
}
