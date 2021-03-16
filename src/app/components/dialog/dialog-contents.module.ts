import { NgModule } from '@angular/core';
import { MatCommonModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogContentComponent } from './dialog-content.component';

@NgModule({
  imports: [MatDialogModule, MatCommonModule],
  declarations: [DialogContentComponent],
  exports: [DialogContentComponent]
})
export class DialogContentsModule {}
