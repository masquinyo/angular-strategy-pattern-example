import { Component, EventEmitter, Output } from '@angular/core';
import { IButtonComponent } from '@components/ibutton.interface';
import { DialogResult } from 'src/app/enums/dialogResult.enum';

@Component({
  selector: 'app-ok-button',
  templateUrl: 'ok-button.component.html',
})
export class OkButtonComponent implements IButtonComponent {

  @Output() OnButtonClicked: EventEmitter<DialogResult> = new EventEmitter();

  public onOkClicked(): void {
    this.OnButtonClicked.emit(DialogResult.Ok);
  }
}
