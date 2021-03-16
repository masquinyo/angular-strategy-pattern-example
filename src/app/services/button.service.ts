import { Injectable } from '@angular/core';
import { OkButtonComponent } from '@components/ok-button/ok-button.component';
import { YesNoButtonComponent } from '@components/yes-no-button/yes-no-button.component';

@Injectable()
export class ButtonService {
  buttonMap = new Map([
    [ButtonTypes.Ok, OkButtonComponent],
    [ButtonTypes.YesOrNo, YesNoButtonComponent],
  ]);

  public getComponent(component: ButtonTypes): any {
    return this.buttonMap.get(component);
  }
}

export enum ButtonTypes {
  Ok = 'Ok',
  YesOrNo = 'YesOrNo',
}
