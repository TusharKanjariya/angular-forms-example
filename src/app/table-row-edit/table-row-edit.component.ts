import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-row-edit',
  templateUrl: './table-row-edit.component.html',
  styleUrls: ['./table-row-edit.component.css'],
})
export class TableRowEditComponent implements OnInit {
  constructor() {}

  name: string;
  password: string;
  post: string;
  id: any;
  userData = [
    {
      id: 1,
      name: 'John',
      password: 'Doe',
      post: 'Front-end Developer',
    },
    {
      id: 2,
      name: 'Steve',
      password: 'Jobs',
      post: 'CEO',
    },
  ];
  ngOnInit(): void {}

  fillData(id) {
    let user = this.userData.filter((user) => user.id === id);
    this.id = id;
    this.name = user[0]['name'];
    this.password = user[0]['password'];
    this.post = user[0]['post'];
  }

  updateDetails(id) {
    this.userData.map((user) => {
      if (user.id === id) {
        user.name = this.name;
        user.password = this.password;
        user.post = this.post;
      }
    });
  }
}
