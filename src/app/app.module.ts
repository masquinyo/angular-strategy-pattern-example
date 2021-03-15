import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { OkButtonModule } from "@components/ok-button/ok-button.module";
import { YesNoButtonModule } from "@components/yes-no-button/yes-no-button.module";

@NgModule({
  imports: [BrowserModule, FormsModule, OkButtonModule, YesNoButtonModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
