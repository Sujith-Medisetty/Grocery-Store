import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JWTService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  productsURL:any="http://localhost:8080/getproducts";
  
  constructor(private http:HttpClient,private jwtService:JWTService) { }

  getProducts(){
    let headers=this.jwtService.setHeader();
    return this.http.get<any>(this.productsURL,{headers});
  }
}
