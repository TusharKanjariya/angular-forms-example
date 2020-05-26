import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent implements OnInit {
  constructor() {}
  userName = 'Bob';
  email: string;
  nickName: string;
  password: string;

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);
    }
  }
  ngOnInit(): void {}
}
