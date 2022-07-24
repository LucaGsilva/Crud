import { HttpStatusCode } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SchoolingEnum } from 'src/app/domain/enum/schoolingEnum';
import { IUser } from 'src/app/domain/interfaces/interface';
import { UserService } from 'src/app/domain/service/userService';


@Component({
  selector: 'app-query',
  templateUrl: './query.component.html',
  styleUrls: ['./query.component.scss']
})


export class QueryComponent implements OnInit {

  searchControl = new FormControl();
  dataSource: IUser[] = [];
  listUsers: IUser[] = [];
  filteredUser: IUser[] = [];


  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {

    this.loadUsers();

  }


  createUser() {

    this.router.navigate(['user']);
  }

  search() {
    this.filteredUser = this.listUsers.filter(x => this.userExists(x));
    this.dataSource = this.filteredUser;
  }

  userExists(value: IUser) {

    if (value.name.match(this.searchControl.value) != null || value.lastName.match(this.searchControl.value) != null) {
      return true
    } else {
      return false
    }

  }

  loadUsers() {

    this.userService.getAll().subscribe(res => {

      if (res.code == HttpStatusCode.Ok && res?.data) {

        this.listUsers = res.data
        this.dataSource = res.data;

      }

    });
  }

}


