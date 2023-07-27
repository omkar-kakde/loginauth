import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isUserLogin : boolean = false;
  constructor(private _rout : Router) { }

  isAuthentication() : Promise<boolean>{
    return new Promise((resovle, reject)=>{
      // if(localStorage.getItem("token")){
      //     this.isUserLogin= true
      // }else{
      //   this.isUserLogin = false
      // }
 //ternary oprator 
 //log : use ? amdin

//  localStorage.getItem("token") ?  this.isUserLogin= true : this.isUserLogin = false
 this.isUserLogin = Boolean( localStorage.getItem("token")) ?? false
          resovle(this.isUserLogin)
    })
  }
  
  logInToapp(email:string,password:string){
      if(email==="omkar@123" && password==="om123"){
        localStorage.setItem("userRole", "can")
        this.isUserLogin = true;
        this._rout.navigate(['/home'])
        localStorage.setItem("token", "JWT ADMIN")
      }else if(email==="om@123" && password==="om123"){
        localStorage.setItem("userRole", "ADMIN")
        this.isUserLogin = true;
        this._rout.navigate(['/home'])
        localStorage.setItem("token", "JWT ADMIN")
      }else{
        alert("plz enter valid email & password !!!")
      } 
  }


  logOutToapp(){
    this.isUserLogin = false;
    localStorage.clear()
    this._rout.navigate(['/'])
  }

}
