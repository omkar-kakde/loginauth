import { Injectable, OnInit } from '@angular/core';
import { Iproduct } from '../model/prod';

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements OnInit {
  constructor() { }
  ngOnInit(): void {
   
  }
  productArray : Array<Iproduct>=[
    {
      pname:"samsung",
      pid:1,
      pstatus: "In progress",
      userRole : 'Admin'

    },
    {
      pname:"Lava",
      pid:2,
      pstatus: "dispatched",
      userRole : 'user'

    },
    {
      pname:"Iphone14",
      pid:3,
      pstatus: "Deliverd",
      userRole : 'Admin'

    }
  ]
 

  getAllData(): Array<Iproduct>{
      return this.productArray
  }
 
 getsingleprod(id:number){
  return this.productArray.find((ele)=> ele.pid === id)
 }


update(obj: Iproduct){
  this.productArray.forEach((ele)=>{
    if(ele.pid === obj.pid){
      ele.pname = obj.pname
      ele.pstatus = obj.pstatus
    }
  })
}

}
