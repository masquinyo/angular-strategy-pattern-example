import { Component, EventEmitter, Output } from '@angular/core';
import { IButtonComponent } from '@components/ibutton.interface';

@Component({
  selector: 'app-yes-no-button',
  templateUrl: 'yes-no-button.component.html',
})
export class YesNoButtonComponent {

  @Output() OnButtonClicked: EventEmitter<string> = new EventEmitter();

  public OnYesClicked(): void {
      this.OnButtonClicked.emit('Yes');
  }

  public OnNoClicked(): void {
      this.OnButtonClicked.emit('No');
  }

}




