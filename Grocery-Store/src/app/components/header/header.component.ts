import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { JWTService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userlogin=false
  adminlogin=false
  itemcount=0

  constructor(private jwtService:JWTService,private cartservice:CartService) { }

  ngOnInit(): void {
    this.userlogin=this.jwtService.isLoggedIn()
    this.adminlogin=this.jwtService.isAdminLoggedIn()

    this.cartservice.getProducts().subscribe(data=>{
      
      let temp:number=0;
      data.map((a:any)=>{
        console.log("in subscribe1  "+a.quantity)
        temp=temp+parseInt(a.quantity);
      })

      console.log(temp)
      this.itemcount=temp;

    });
  }

  userLogout(){
    this.jwtService.logout()
    location.reload()
  }

  adminLogout(){
    this.jwtService.adminLogout()
    location.reload()
  }

}
