/**
 * Title: gpa.component.ts
 * Author: Professor Krasso
 * Modified by: Eunice Lim
 * Date: 30 June 2021
 * Description: GPA Component
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {

  @Input() gpaTotal: number | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
