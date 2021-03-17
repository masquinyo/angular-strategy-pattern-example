import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogContentComponent } from './components/dialog/dialog-content.component';
import { ButtonTypes } from './services/button.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'angular-strategy-demo';
  private readonly defaultDelegate = (value: string, dialogRef: MatDialogRef<DialogContentComponent, any>) => {
    dialogRef.close();
    alert(value);
  }

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentComponent);
    dialogRef.componentInstance.buttonType = ButtonTypes.YesOrNo;
    dialogRef.componentInstance.onClientButtonClicked.subscribe((value: string) => this.defaultDelegate(value, dialogRef));
  }

  openDialogWithOk(): void {
    const dialogRef = this.dialog.open(DialogContentComponent);
    dialogRef.componentInstance.buttonType = ButtonTypes.Ok;
    dialogRef.componentInstance.onClientButtonClicked.subscribe((value: string) => this.defaultDelegate(value, dialogRef));
  }
}
