import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmCancelButtonComponent } from './confirm-cancel-button.component';

@NgModule({
  declarations: [ConfirmCancelButtonComponent],
  imports: [
    MatButtonModule,
    CommonModule
  ],
  exports: [ConfirmCancelButtonComponent]
})
export class ConfirmCancelButtonModule { }
