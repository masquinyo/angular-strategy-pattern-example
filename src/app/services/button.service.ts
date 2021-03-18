import { Injectable } from '@angular/core';
import { ConfirmCancelButtonComponent } from '@components/confirm-cancel-button/confirm-cancel-button.component';
import { IButtonComponent } from '@components/ibutton.interface';
import { OkButtonComponent } from '@components/ok-button/ok-button.component';
import { YesNoButtonComponent } from '@components/yes-no-button/yes-no-button.component';
import { ButtonTypes } from '../enums/buttonTypes.enum';

@Injectable()
export class ButtonService {
  buttonMap = new Map<ButtonTypes, any>([
    [ButtonTypes.Ok, OkButtonComponent],
    [ButtonTypes.YesOrNo, YesNoButtonComponent],
    [ButtonTypes.ConfirmOrCancel, ConfirmCancelButtonComponent],
  ]);

  public getComponent(component: ButtonTypes): any {
    return this.buttonMap.get(component) as IButtonComponent;
  }
}


