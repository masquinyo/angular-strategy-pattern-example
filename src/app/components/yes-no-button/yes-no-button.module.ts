import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { YesNoButtonComponent } from "./yes-no-button.component";

@NgModule({
  imports: [MatButtonModule],
  declarations: [YesNoButtonComponent],
  exports: [YesNoButtonComponent]
})
export class YesNoButtonModule {}
