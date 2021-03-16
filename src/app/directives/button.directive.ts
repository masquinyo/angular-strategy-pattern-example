import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appButton]',
})
export class ButtonDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
