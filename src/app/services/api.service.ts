import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    const countriesURL = this.url + 'countries';
    return this.http.get(countriesURL, { observe: 'response' });
  }
}
