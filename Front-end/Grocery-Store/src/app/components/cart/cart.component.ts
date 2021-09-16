import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public cartproducts:any=[];
  public totalprice:number=0;

  constructor(private cartservice:CartService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.cartservice.getProducts().subscribe(data=>{
      this.cartproducts=data;
      this.totalprice=this.cartservice.grandTotalPrice();
    });
  }

  deleteItem(product:any){
    this.cartservice.removeCartItem(product);
    this.snackbar.open("Item removed Successfully","Dismiss",{duration:4000}) 

  }

  deleteAll(){
    this.cartservice.removeAllCart();
  }

}
