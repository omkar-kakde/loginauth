import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../servcies/products.service';
import { Iproduct } from '../../model/prod';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allData !: Array<Iproduct>;
  constructor(private service : ProductsService) { }

  ngOnInit(): void {
   
    this.getData();
   
    console.log("hii");
    
  }

  getData(){
    this.allData = this.service.getAllData()
  }
}
