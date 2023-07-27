import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Iproduct } from '../../model/prod';
import { ProductsService } from '../../servcies/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
prodId !: number
proObj !: Iproduct
  constructor(private _activatrout : ActivatedRoute,
        private servcie : ProductsService,
        private router : Router
    ) { }

  ngOnInit(): void {

     this._activatrout.params
         .subscribe(
          (res:Params) => {
            this.prodId =  +res['id']
            console.log(this.prodId);
          }

         )
   
      this.proObj = this.servcie.getsingleprod(this.prodId)!
      console.log(this.proObj);
      
        
  }

  onedit(){
   this.router.navigate(['/products', this.proObj.pid, 'edit' ],
       {queryParamsHandling:'preserve'})
  }

}
