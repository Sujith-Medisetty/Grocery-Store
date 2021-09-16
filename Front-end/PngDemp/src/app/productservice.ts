import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Product } from './product';

@Injectable()
export class ProductService {

constructor(private http:HttpClient){}

onInit(){}

getChefs(){
   return this.http.get<any>("http://localhost:8080/getChefs");
}

}