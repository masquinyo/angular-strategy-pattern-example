import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogContentComponent } from './components/dialog/dialog-content.component';
import { ButtonTypes } from './enums/buttonTypes.enum';
import { DialogResult } from './enums/dialogResult.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'angular-strategy-demo';
  private readonly defaultDelegate = (
    value: DialogResult,
    dialogRef: MatDialogRef<DialogContentComponent, any>
  ) => {
    dialogRef.close();
    alert(value);
  }

  constructor(public dialog: MatDialog) {}

  public openDialogWithYesOrNo(): void {
    this.openDialog(ButtonTypes.YesOrNo);
  }

  public openDialogWithOk(): void {
    this.openDialog(ButtonTypes.Ok);
  }

  public openDialogWithConfirmCancel(): void {
    this.openDialog(ButtonTypes.ConfirmOrCancel);
  }

  private openDialog(
    buttonType: ButtonTypes
  ): MatDialogRef<DialogContentComponent, any> {
    const dialog = this.dialog.open(DialogContentComponent);
    dialog.componentInstance.buttonType = buttonType;
    dialog.componentInstance.onClientButtonClicked.subscribe(
      (value: DialogResult) => this.defaultDelegate(value, dialog)
    );
    return dialog;
  }
}
