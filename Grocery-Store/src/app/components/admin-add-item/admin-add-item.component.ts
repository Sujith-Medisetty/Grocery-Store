import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-add-item',
  templateUrl: './admin-add-item.component.html',
  styleUrls: ['./admin-add-item.component.css']
})
export class AdminAddItemComponent implements OnInit {
  categories=["Daily Essentials","Dairy Products","Spices","Dry Fruits"];
  categoryHasError=true;

  product=new Product("","","","","","","1","1");

  constructor(private service:ProductsService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  onsubmit(){
    console.log(this.product);
    this.service.addProduct(this.product)
    .subscribe(
      data =>this.snackbar.open("Item Added Successfully","Dismiss",{duration:4000}) ,
      error => console.log("Error",error)
    )

  }

  validateCategory(value:any){
    if(value===''){
      this.categoryHasError=true
    }else{
      this.categoryHasError=false
    }
  }

}
