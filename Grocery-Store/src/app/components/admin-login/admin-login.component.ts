import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { JWTService } from 'src/app/services/jwt.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  userLogin=new User(0,"","","","","admin");
  constructor(private jwtService:JWTService,private router:Router) { }

  ngOnInit(): void {
  }

  onsubmit(){
    console.log(this.userLogin)
    this.jwtService.generateToken(this.userLogin).subscribe(
      data=>{
        console.log(data)
        this.jwtService.loginAdmin(data)
        if(this.jwtService.isAdminLoggedIn()){
          window.location.href="admin-dashboard"
        }
      }
    )
  }

}
