import { Component, EventEmitter, Inject, Input, Output } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  title: string;
  text: string;
  @Input() firstNameButton: any;
  @Input() secondNameButton: any;
  @Input() firstBtnUseDefaultColor: boolean = true;
  @Output() eventFirstButton = new EventEmitter<any>(true);
  @Output() eventSecondButton = new EventEmitter<any>(true);

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.title = data.title;
    this.text = data.text;
  }

  close(): void {

    this.dialogRef.close();
  }

  actionFirstButton(): void {

    this.eventFirstButton.emit();
    this.dialogRef.close();
  }

  actionSecondButton(): void {

    console.log(this.firstNameButton != '')
    this.eventSecondButton.emit();
    this.dialogRef.close();
  }
}
