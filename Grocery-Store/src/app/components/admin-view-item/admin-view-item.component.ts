import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';
import { AdminEditItemComponent } from '../admin-edit-item/admin-edit-item.component';

@Component({
  selector: 'app-admin-view-item',
  templateUrl: './admin-view-item.component.html',
  styleUrls: ['./admin-view-item.component.css']
})
export class AdminViewItemComponent implements OnInit {

  products:any=[]
  constructor(public service:ProductsService,private dialog:MatDialog,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getProducts().subscribe(
      data=>this.products=data
    )
  }

  editProduct(product:Product){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.autoFocus=true;
    dialogConfig.disableClose=true;
    dialogConfig.width="60%";
    dialogConfig.data={product}
   let dialogref=this.dialog.open(AdminEditItemComponent,dialogConfig);
   dialogref.afterClosed().subscribe(
    result=>{
        console.log("entered")
        this.getData()
    }
   )
  }

  deleteProduct(product:Product){
    this.service.deleteProduct(product).subscribe(
      d =>{
        this.snackbar.open("Item deleted Successfully","Dismiss",{duration:4000}) 
        this.getData()
      },
      error => console.log("Error",error)
    )
  }

}
