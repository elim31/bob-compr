/**
 * Title: base-layout.component.ts
 * Author: Professor Krasso
 * Modified by: Eunice Lim
 * Date: 6 July 2021
 * Description: Base-layout Component
 */

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  assignment:string;

  constructor(private cookieService: CookieService, private router:Router) {
    this.assignment='GPA Calculator';
  }

  ngOnInit(): void {
  }

  signOut(){
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in'])
  }
}
