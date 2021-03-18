import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IButtonComponent } from '@components/ibutton.interface';
import { DialogResult } from 'src/app/enums/dialogResult.enum';

@Component({
  selector: 'app-confirm-cancel-button',
  templateUrl: './confirm-cancel-button.component.html',
  styleUrls: ['./confirm-cancel-button.component.sass'],
})
export class ConfirmCancelButtonComponent implements IButtonComponent {
  @Output() OnButtonClicked: EventEmitter<DialogResult> = new EventEmitter();

  constructor() {}

  public onConfirmClicked(): void {
    this.OnButtonClicked.emit(DialogResult.Confirm);
  }

  public onCancelClicked(): void {
    this.OnButtonClicked.emit(DialogResult.Cancel);
  }
}
