import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {
  private url = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
  getData():Observable<any> {
    const url="https://jsonplaceholder.typicode.com/users"
    return this.http.get<any>(url)
  }
  getMore():Observable<any> {
    const url="https://jsonplaceholder.typicode.com/users/id"
    return this.http.get<any>(url)
  }
  deletePost(id){

    return this.http.delete(this.url+'https://jsonplaceholder.typicode.com/users/1'+id);

  }
}
