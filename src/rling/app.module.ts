import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { StoreModule } from '@ngrx/store';

import { WebUIModule } from 'rling/webui/webui.module';
import { AppComponent } from 'rling/webui/app.component';

@NgModule({
  imports: [
    BrowserModule,
    WebUIModule,
  ],
  declarations: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
