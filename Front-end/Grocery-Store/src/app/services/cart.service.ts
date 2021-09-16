import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList:any=[];
  public productList=new BehaviorSubject<any>([]);

  constructor() { }

  getProducts(){
    
    return this.productList.asObservable();
  }

  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }

  addToCart(product:any){

    console.log("came")

    let temp=0;
    for(let i=0;i<this.cartItemList.length;i++){
      if(product.id===this.cartItemList[i].id){
        this.cartItemList[i].quantity=parseInt(this.cartItemList[i].quantity)+ 1;
        console.log("quantity is "+product.quantity)
        temp=1;
        console.log("added")
        this.productList.next(this.cartItemList);
        break;
      }
    }

    if(temp===0){
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      console.log(product);
    }
    this.grandTotalPrice();
  }

  grandTotalPrice(){
    let total:number=0;
    this.cartItemList.map((a:any)=>{
      total=total+parseFloat((parseFloat(a.price)*parseFloat(a.quantity)).toFixed(2));
    })
    return total;
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1);
        this.productList.next(this.cartItemList);
      }
    })
  }

  removeAllCart(){
    this.cartItemList=[];
    this.productList.next(this.cartItemList);
  }
}
