import { NgModule } from "@angular/core";
import { OkButtonComponent } from "./ok-button.component";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [MatButtonModule],
  declarations: [OkButtonComponent],
  exports: [OkButtonComponent]
})
export class OkButtonModule {}
