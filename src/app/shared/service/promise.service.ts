import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PromiseService {

  constructor(private httpService : HttpService) { }

  public getData(){
    return new Promise((resolve, reject) => {
      this.httpService.get().subscribe(
        response => {
          if (response) {
            resolve(response);
          } else {
            reject();
          }
        }
      )
    }
    )
  }
} 