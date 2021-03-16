import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { ButtonDirective } from 'src/app/directives/button.directive';
import { DialogContentComponent } from './dialog-content.component';

@NgModule({
  imports: [MatDialogModule, MatCommonModule],
  declarations: [DialogContentComponent, ButtonDirective],
  exports: [DialogContentComponent]
})
export class DialogContentsModule {}
