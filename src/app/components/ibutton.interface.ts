import { EventEmitter } from '@angular/core';
import { DialogResult } from '../enums/dialogResult.enum';

export interface IButtonComponent {
  OnButtonClicked: EventEmitter<DialogResult>;
}
