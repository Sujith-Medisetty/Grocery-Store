import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-admin-edit-item',
  templateUrl: './admin-edit-item.component.html',
  styleUrls: ['./admin-edit-item.component.css']
})
export class AdminEditItemComponent implements OnInit {

  categories=["Daily Essentials","Dairy Products","Spices","Dry Fruits"];
  categoryHasError=true;
  public productData=new Product(this.data.product.title,this.data.product.brand,this.data.product.price,this.data.product.description,this.data.product.category,this.data.product.url,this.data.product.quantity,this.data.product.units);

  constructor(private dialogRef:MatDialogRef<AdminEditItemComponent>,private service:ProductsService,@Inject(MAT_DIALOG_DATA) public data:any,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }



  validateCategory(value:any){
    if(value===''){
      this.categoryHasError=true
    }else{
      this.categoryHasError=false
    }
  }

  onsubmit(form:NgForm){
    console.log(this.data.product);
    this.dialogRef.close();
    this.service.editProduct(this.data.product)
    .subscribe(
      d =>{this.snackbar.open("Item Edited Successfully","Dismiss",{duration:4000})  
    },
      error => console.log("Error",error)
    )

  }
}
