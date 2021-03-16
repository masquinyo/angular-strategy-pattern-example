import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from './components/dialog/dialog-content.component';
import { ButtonTypes } from './services/button.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'angular-strategy-demo';

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentComponent);
    dialogRef.componentInstance.buttonType = ButtonTypes.YesOrNo;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogWithOk(): void {
    const dialogRef = this.dialog.open(DialogContentComponent);
    dialogRef.componentInstance.buttonType = ButtonTypes.Ok;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


