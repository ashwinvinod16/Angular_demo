import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProserviceService {

  constructor(private http:HttpClient) { }

  
  listproduct():Observable<any>{
    return this.http.get(`https://ecartdemo.herokuapp.com/productlist`)
  }
  listcategory():Observable<any>{
    return this.http.get(`https://ecartdemo.herokuapp.com/categorylist`)
  }
  categoryProducts(cat):Observable<any>{
    return this.http.get(`https://ecartdemo.herokuapp.com/products/`+cat);
  }
  singleview(name):Observable<any>{
    return this.http.get(`https://ecartdemo.herokuapp.com/viewprod/`+name)
  }
}
