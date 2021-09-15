import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JWTService {

  public token:any=null;
  public loggedInUser=null;
  
  constructor(private http:HttpClient,private service:JwtHelperService) { }


  public getToken(){
    return localStorage.getItem("token")
  }

 public loginUser(token:any){
    localStorage.setItem("token",token)
    return true
  }

  public getUserName(){
    let headers=this.setHeader();
    this.http.get<any>("http://localhost:8080",{headers,responseType: 'text' as 'json'}).subscribe(
      data=>{
        console.log(data)
        this.loggedInUser=data
      }
    )
  }

  public isLoggedIn(){
    this.getUserName()
    let token=localStorage.getItem("token")
    if(token != null && !this.service.isTokenExpired(token)){
      return true
    }else{
      return false
    }
  }

  public logout(){
  localStorage.removeItem("token")
    return true
  }



  setHeader(){
    let token=localStorage.getItem("token")
    let tokenstr='Bearer '+token;

    const headers = new HttpHeaders().set('Authorization', tokenstr);
  
    return headers
  }

  public generateToken(request:any){
    return this.http.post("http://localhost:8080/authenticate",request,{responseType: 'text' as 'json'})
  } 


  public getAdminToken(){
    return localStorage.getItem("admintoken")
  }

  loginAdmin(token:any){
    localStorage.setItem("admintoken",token)
    return true
  }

  public isAdminLoggedIn(){
    let token=localStorage.getItem("admintoken")
    if(token != null && !this.service.isTokenExpired(token)){
      return true
    }else{
      return false
    }
  }

  public adminLogout(){
    localStorage.removeItem("admintoken")
      return true
    }

    setAdminHeader(){
      let token=localStorage.getItem("admintoken")
      let tokenstr='Bearer '+token;
  
      const headers = new HttpHeaders().set('Authorization', tokenstr);
    
      return headers
    }
}
