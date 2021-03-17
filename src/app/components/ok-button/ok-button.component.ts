import { Component, EventEmitter, Output } from '@angular/core';
import { IButtonComponent } from '@components/ibutton.interface';

@Component({
  selector: 'app-ok-button',
  templateUrl: 'ok-button.component.html',
})
export class OkButtonComponent {

  @Output() OnButtonClicked: EventEmitter<string> = new EventEmitter();

  public onOkClicked(): void {
    this.OnButtonClicked.emit('Ok');
  }
}
