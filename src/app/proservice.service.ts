import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProserviceService {

  constructor(private http:HttpClient) { }

  postProduct(data:object):Observable<any>{
    return this.http.post(`http://localhost:4040/products`,data)
  }
  listproduct():Observable<any>{
    return this.http.get(`http://localhost:4040/productlist`)
  }
  listcategory():Observable<any>{
    return this.http.get(`http://localhost:4040/categorylist`)
  }
  categoryProducts(cat):Observable<any>{
    return this.http.get(`http://localhost:4040/products/`+cat);
  }
  singleview(name):Observable<any>{
    return this.http.get(`http://localhost:4040/viewprod/`+name)
  }
}
