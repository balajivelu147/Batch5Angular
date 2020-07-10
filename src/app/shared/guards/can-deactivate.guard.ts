import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FirstPageManualComponent } from '../../first-page-manual/first-page-manual.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<any> {
  canDeactivate(
    component: FirstPageManualComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // let isError = component.canDeactivate();
    if(component.canDeactivate()){
      
      return true;
    }

  //  sessionStorage.setItem('activeUrl',nextState.url);
     var retVal = confirm("Do you want to continue ?");
    if( retVal == true ) {
      
       return true;
    } else {
       
       return false;
    }
   // return false;
  }


  
}
