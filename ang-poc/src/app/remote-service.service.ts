import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RemoteServiceService {
  private _url:string="http://localhost:8080/getUsers";
  private _posturl:string="http://localhost:8080/users";
  constructor(private _http:HttpClient) { }

  getData(){
  return this._http.get(this._url);

    // return [
    //   {"id":1,name:"surya",age:25},
    //   {"id":2,name:"madan",age:27}
    // ]
  }

  submitForm(filterData){
    return this._http.post<any>(this._posturl,filterData);
  }
}
