import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewInit,
  ComponentFactoryResolver,
  Input,
  Type,
  ViewChild,
} from '@angular/core';
import { Component } from '@angular/core';
import { ButtonDirective } from 'src/app/directives/button.directive';
import { ButtonService, ButtonTypes } from 'src/app/services/button.service';

@Component({
  selector: 'app-dialog-content',
  templateUrl: 'dialog-content.component.html',
})
export class DialogContentComponent implements AfterContentChecked {
  @Input()
  public buttonType: ButtonTypes = ButtonTypes.Ok;

  @ViewChild(ButtonDirective)
  appButton: ButtonDirective | undefined;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private buttonService: ButtonService
  ) {
  }
   public ngAfterContentChecked(): void{
    this.loadComponent();
   }
  private loadComponent(): void {
    const factory = this.componentFactoryResolver.resolveComponentFactory(
      this.buttonService.getComponent(this.buttonType)
    );
    const containerRef = this.appButton?.viewContainerRef;
    containerRef?.clear();
    containerRef?.createComponent(factory);
  }
}
