import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from 'src/app/shared/model/prod';
import { ProductsService } from 'src/app/shared/servcies/products.service';

@Component({
  selector: 'app-productedit',
  templateUrl: './productedit.component.html',
  styleUrls: ['./productedit.component.scss']
})
export class ProducteditComponent implements OnInit {
 proId !: number;
 proObj !: Iproduct
 qp !: string
  constructor(private _activate : ActivatedRoute,
    private _service : ProductsService,
    private _rout : Router
    
    ) { }

  ngOnInit(): void {

    this._activate.params
         .subscribe(
          (id:Params) =>{
            this.proId = +id['id']
            console.log(this.proId);
            
          }
         )

         this.proObj = this._service.getsingleprod(this.proId)!
         console.log(this.proObj);

         this._activate.queryParams
         .subscribe(
           (qp:Params) =>{
             console.log(qp);
           this.qp = qp['canEdit']
           }
         )
         
  }


  updateData(pname:HTMLInputElement, pid: HTMLInputElement,){
     let obj : Iproduct ={
           pname : pname.value ,
           pid : this.proId,
           pstatus : this.proObj.pstatus,
           userRole :  this.proObj.userRole
     }
     this._service.update(obj)
     this._rout.navigate(['/products'])
  }
}
