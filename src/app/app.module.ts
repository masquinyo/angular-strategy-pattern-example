import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OkButtonModule } from './components/ok-button/ok-button.module';
import { YesNoButtonModule } from './components/yes-no-button/yes-no-button.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogContentsModule } from './components/dialog/dialog-contents.module';
import { ButtonService } from '@services/button.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OkButtonModule,
    YesNoButtonModule,
    DialogContentsModule,
    BrowserAnimationsModule
  ],
  providers: [ButtonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
