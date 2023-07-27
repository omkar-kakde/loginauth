import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNav]'
})
export class NavDirective {

  constructor() { }
    @HostListener('click',['$event'])
    onclickHandler(eve:Event){
      console.log("hii");
      let dropmenu = eve.target as HTMLInputElement;
   
      dropmenu.nextElementSibling?.classList.toggle('show') 
    }

}
