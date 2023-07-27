import { Injectable } from '@angular/core';
import { Iuser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
   
  constructor() { }
  userArray : Array<Iuser> = [
    {
      username : 'omkar',
      userId :1,
      userRole : "admin"
    },
    {
      username : 'nikhil',
      userId :2,
      userRole : "user"
    },
    {
      username : 'shiv',
      userId :3,
      userRole : "admin"
    }

    
  ]

  getAllData(){
    return this.userArray
  }

  getSingleUser(id:number){
    return this.userArray.find((ele) => ele.userId === id)
  }

  update(obj:Iuser){
    this.userArray.forEach((ele)=>{
      if(ele.userId === obj.userId){
        ele.username = obj.username,
        ele.userRole = obj.userRole
      }
    })
  }
}
