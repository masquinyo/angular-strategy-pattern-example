import { Injectable } from '@angular/core';
import { IButtonComponent } from '@components/ibutton.interface';
import { OkButtonComponent } from '@components/ok-button/ok-button.component';
import { YesNoButtonComponent } from '@components/yes-no-button/yes-no-button.component';

@Injectable()
export class ButtonService {
  buttonMap = new Map<ButtonTypes, any>([
    [ButtonTypes.Ok, OkButtonComponent],
    [ButtonTypes.YesOrNo, YesNoButtonComponent],
  ]);

  public getComponent(component: ButtonTypes): any {
    return this.buttonMap.get(component) as IButtonComponent;
  }
}

export enum ButtonTypes {
  Ok = 'Ok',
  YesOrNo = 'YesOrNo',
}
