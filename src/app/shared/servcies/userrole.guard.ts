import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, TimeoutError, elementAt } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UseroleGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    console.log(route.data);
    console.log(localStorage.getItem("userRole"));
    let staticRoleFromStaticData : string = route.data['userRole']
    let getLoginguserRole = localStorage.getItem("userRole")!;


    if(staticRoleFromStaticData.includes(getLoginguserRole)){
      return true;
    }else{
      return false;
    }
    
  }
  
}
