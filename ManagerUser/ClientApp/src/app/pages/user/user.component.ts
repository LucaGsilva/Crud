import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { SchoolingEnum } from 'src/app/domain/enum/schoolingEnum';
import { IUser } from 'src/app/domain/interfaces/interface';
import { UserService } from 'src/app/domain/service/userService';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpStatusCode } from '@angular/common/http';
import { DialogComponent } from 'src/app/component/dialog/dialog.component';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})


export class UserComponent implements OnInit {

  title = 'Usuário';
  subTitle = 'Cadastrar Usuário';
  nameControl = new FormControl();
  lastNameControl = new FormControl();
  emailControl = new FormControl('', Validators.email);
  idUser: number = 0;
  schoolingControl = new FormControl();
  birthDateControl = new FormControl()
  maxDate = new Date().toISOString().split("T")[0];
  schoolingOption = Object.values(SchoolingEnum).filter(x => (typeof x === 'string'));


  constructor(private router: Router, private activatedRoute: ActivatedRoute, private userService: UserService, private dialog: MatDialog) { }


  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe(params => {
      this.idUser = +params['id'] || 0;
    });

    if (this.idUser != 0) {
      this.loadUser();
    }

  }

  loadUser() {
    this.userService.getById(this.idUser).subscribe(res => {

      if (res.code == HttpStatusCode.Ok && res.data != null) {
        
        var userData = res.data;

        this.nameControl.setValue(userData.name)
        this.lastNameControl.setValue(userData.lastName)
        this.schoolingControl.setValue(SchoolingEnum[userData.schooling])
        this.emailControl.setValue(userData.email)
        this.birthDateControl.setValue(new Date(userData.birthDate).toISOString().split("T")[0])
        
      }

    })
  }

  saveUser() {

    var user: IUser =
    {
      id: this.idUser,
      name: this.nameControl.value,
      lastName: this.lastNameControl.value,
      schooling: parseInt(SchoolingEnum[this.schoolingControl.value]),
      email: this.emailControl.value,
      birthDate: this.birthDateControl.value
    };


    if (this.validateUser(user)) {

      if (user.id == 0) {

        this.userService.postUser(user).subscribe(res => {
          if (res.code == HttpStatusCode.Ok && res.data != null) {
            this.showModal('Sucesso', "Usuário Cadastrado com Sucesso !", "OK", 'ENTENDI');
          }else {
            this.showModal('Atenção !', res.messages, 'OK', 'ENTENDI');
          }

        });

      } else {
        this.userService.updatetUser(user).subscribe(res => {
          if (res.code == HttpStatusCode.Ok && res.data != null) {
            this.showModal('Sucesso', "Usuário Atualizado com Sucesso !", 'OK', 'ENTENDI');
          }else {
            this.showModal('Atenção !', res.messages, 'OK', 'ENTENDI');
          }

        });
      }

    }


  }

  backHome() {
    this.router.navigate(['/']);
  }

  validateUser(user: IUser) {
    
    if (this.emailControl.invalid || this.emailControl.value == '') {
      this.emailControl.setErrors({ 'nullEmail': true })
      return false;
    } else if (user.birthDate == null) {

      this.birthDateControl.setErrors({ 'nullData': true })
      return false;

    } else if (user.birthDate > new Date().toISOString().split("T")[0]) {

      this.birthDateControl.setErrors({ 'maxData': true })
      return false;

    } else if (isNaN(user.schooling)) {

      this.schoolingControl.setErrors({ 'schoolingNull': true })
      return false;
    }

    return true;

  }

  showModal(title: string, text: string, firstNameButton: string, secondNameButton: string) {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { title, text },
      height: '238px',
      width: '480px',
      disableClose: true
    });
    dialogRef.componentInstance.firstNameButton = firstNameButton;
    dialogRef.componentInstance.secondNameButton = secondNameButton;

    dialogRef.componentInstance.eventSecondButton.subscribe(res => {
      this.router.navigate(['/']);
    })
  }

}


