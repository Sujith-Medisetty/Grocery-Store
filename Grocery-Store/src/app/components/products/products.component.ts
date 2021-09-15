import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productList:any=[];
  constructor(private apiservice:ApiService,private cartservice:CartService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(){
    this.apiservice.getProducts().subscribe(
      data=>{
        console.log(data)
        this.productList=data
      }
    )
  }

  
  addToCart(product:Product){
    this.cartservice.addToCart(product);
    this.snackbar.open("Item added Successfully","Dismiss",{duration:4000}) 
  }

}
