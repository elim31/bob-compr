/**
 * Title: sign-in.service.ts
 * Author: Professor Krasso
 * Modified By: Eunice Lim
 * Date: 6 July 2021
 * Description: Sign-in Service
 */

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  studentIds: Array<number>;

  constructor() {
    this.studentIds=[1007, 1008, 1009, 1010, 1011, 1012];
   }

   validate(studentId: number){
      return this.studentIds.some(id => id === studentId);
   }
}
