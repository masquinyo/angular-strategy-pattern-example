import { EventEmitter } from '@angular/core';

export interface IButtonComponent {
  OnButtonClicked: EventEmitter<string>;
}
