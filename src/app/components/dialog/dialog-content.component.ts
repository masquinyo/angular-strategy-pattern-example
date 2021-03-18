import {
  AfterContentChecked,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { Component } from '@angular/core';
import { IButtonComponent } from '@components/ibutton.interface';
import { ButtonDirective } from 'src/app/directives/button.directive';
import { ButtonService } from 'src/app/services/button.service';
import { ButtonTypes } from "src/app/enums/buttonTypes.enum";

@Component({
  selector: 'app-dialog-content',
  templateUrl: 'dialog-content.component.html',
})
export class DialogContentComponent implements AfterContentChecked, OnDestroy {
  @Input()
  public buttonType: ButtonTypes = ButtonTypes.Ok;

  @Output()
  public onClientButtonClicked: EventEmitter<string> = new EventEmitter();

  private componentRef!: ComponentRef<any>;

  @ViewChild(ButtonDirective)
  appButton!: ButtonDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private buttonService: ButtonService
  ) {}
  public ngAfterContentChecked(): void {
    this.loadComponent();
  }
  private loadComponent(): void {
    if (this.componentRef) {
      return;
    }

    const factory = this.componentFactoryResolver.resolveComponentFactory(
      this.buttonService.getComponent(this.buttonType)
    );
    const containerRef = this.appButton?.viewContainerRef;
    containerRef?.clear();
    this.componentRef = containerRef?.createComponent(factory);
    if (this.componentRef) {
      (this.componentRef
        .instance as IButtonComponent).OnButtonClicked.subscribe((value) =>
        this.onClientButtonClicked.emit(value)
      );
    }
  }
  public ngOnDestroy(): void {
    this.componentRef.destroy();
  }
}
