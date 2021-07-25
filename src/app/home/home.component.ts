/**
 * Title: home.component.ts
 * Author: Professor Krasso
 * Modified by: Eunice Lim
 * Date: 6 July 2021
 * Description: Home Component
 */

import { Component, OnInit } from '@angular/core';
import { ITranscript } from '../transcript.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectableHours: Array<number> = [1,2,3,4,5];
  transcriptEntries: Array<ITranscript> = [];
  transcriptForm: FormGroup;

  constructor(private fb: FormBuilder){

  }


  ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      course:['', Validators.required],
      grade: ['', Validators.required]
    })
  }

  get form(){
    return this.transcriptForm.controls;
  }

  clearEntries(){
    this.transcriptEntries =[];
      }

  /*onSubmit(event){
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value
    });

    event.currentTarget.reset();

  }

  calculateResults(){
    let gpa: number = 0;



    console.log(gpa);
    this.gpaTotal = gpa / this.transcriptEntries.length;
    console.log(this.gpaTotal);
  }


*/
}
