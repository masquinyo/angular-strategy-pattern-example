import { Component, EventEmitter, Output } from '@angular/core';
import { IButtonComponent } from '@components/ibutton.interface';
import { DialogResult } from 'src/app/enums/dialogResult.enum';

@Component({
  selector: 'app-yes-no-button',
  templateUrl: 'yes-no-button.component.html',
})
export class YesNoButtonComponent implements IButtonComponent {

  @Output() OnButtonClicked: EventEmitter<DialogResult> = new EventEmitter();

  public OnYesClicked(): void {
      this.OnButtonClicked.emit(DialogResult.Yes);
  }

  public OnNoClicked(): void {
      this.OnButtonClicked.emit(DialogResult.No);
  }
}
