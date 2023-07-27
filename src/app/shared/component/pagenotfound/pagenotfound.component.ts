import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {
  errormsg !: string
  constructor(private  rout : ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.rout.snapshot.data);
    this.errormsg = this.rout.snapshot.data['errormsg']
  }

}
