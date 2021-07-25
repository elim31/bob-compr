/**
 * Title: grade-summary.component.ts
 * Author: Professor Krasso
 * Modified by: Eunice Lim
 * Date: 30 June 2021
 * Description: Grade Summary Component
 */


import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css']
})
export class GradeSummaryComponent implements OnInit {

  @Input()
  hours!: number;
  @Input() parts: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
