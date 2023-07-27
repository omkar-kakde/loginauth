import { Component } from '@angular/core';
import { Observable, observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rotingnew';

 myObservable = new Observable(observable =>{
  console.log("obserable start !!");
  observable.next("a");
  observable.next("b");
  observable.next("c")
  
 })

 ngOnInit() : void{
  this.myObservable.subscribe((val =>{
    console.log(val);
    
  }))
 }

}
