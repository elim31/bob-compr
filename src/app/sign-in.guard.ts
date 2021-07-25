/**
 * Title: sign-in.guard.ts
 * Author: Professor Krasso
 * Modified By: Eunice Lim
 * Date: 6 July 2021
 * Description: Sign-in Guard
 */

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {

  constructor(private router: Router, private cookieService: CookieService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const sessionUser= this.cookieService.get('session_user');

      if (sessionUser){
        return true;
    } else {
      this.router.navigate(['/session/sign-in']);
      return false;
    }
  }

}
