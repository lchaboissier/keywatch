import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const httpOptions = { withCredentials: true, header: new HttpHeaders({'Content-type': 'application/json'})}

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  get(url: string, options?: {}): Observable<any>{
    return this.http.get(environment.env_url + url, {...httpOptions,... options});
  }
}
