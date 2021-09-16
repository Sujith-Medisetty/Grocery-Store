import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { JWTService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  
  saveProductURI='http://localhost:8080/saveproduct';
  viewProductsURI='http://localhost:8080/getproducts';
  editProductURI='http://localhost:8080/editproduct';
  deleteProductURI='http://localhost:8080/deleteProduct';

  products:any=[]

  constructor(private http:HttpClient,private jwtService:JWTService) { }

  init(){
  }

  addProduct(product:Product){
    let headers=this.jwtService.setAdminHeader();
    return this.http.post(this.saveProductURI,product,{headers});
  }

  getProducts():Observable<Product>{
    let headers=this.jwtService.setAdminHeader();
    return this.http.get<Product>(this.viewProductsURI,{headers});
  }

  getProductsData(){
    this.getProducts().subscribe(
      data=>{ this.products=data
      console.log(data);}
    )
  }

  editProduct(product:Product){
    let headers=this.jwtService.setAdminHeader();
    return this.http.post(this.editProductURI,product,{headers});
  }

  deleteProduct(product:Product){
    let headers=this.jwtService.setAdminHeader();
    return this.http.post(this.deleteProductURI,product,{headers});
  }

}
