import { HttpStatusCode } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from 'src/app/domain/service/userService';
import { SchoolingEnum } from '../../domain/enum/schoolingEnum';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  displayedColumns: string[] = ['id', 'Nome', 'Sobrenome', 'Email', 'Escolaridade', 'Data de Nascimento', 'Ações'];
  @Input() dataSource: any;

  constructor(private router: Router, private userService: UserService, private dialog: MatDialog) { }

  goToPage(action: string, userId: string) {
    this.router.navigate(['/user/' + action], { queryParams: { id: userId } });
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(res =>{

      if(res.code == HttpStatusCode.Ok){
        this.showModal("Usuário Excluido","Usuário foi excluido com sucesso",'','OK')
      }

    })
  }

  teste(id: number) {
    return SchoolingEnum[id]
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
