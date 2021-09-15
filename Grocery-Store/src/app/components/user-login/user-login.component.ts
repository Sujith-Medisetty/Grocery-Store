import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User} from 'src/app/models/user';
import { JWTService } from 'src/app/services/jwt.service';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  userLogin=new User(0,"","","","","user");
  constructor(private jwtService:JWTService,private router:Router) { }

  ngOnInit(): void {
  }

  onsubmit(){
    console.log(this.userLogin)
    this.getTokenAccess(this.userLogin)
  }

  public getTokenAccess(authRequest:any){
    this.jwtService.generateToken(authRequest).subscribe(
      data=>{
      console.log(data)
      this.jwtService.loginUser(data)
      if(this.jwtService.isLoggedIn()){
        window.location.href="user-dashboard"
      }
           
    },
    error=>console.log(error)
    )
  }


}
