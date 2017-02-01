import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { StoreModule } from '@ngrx/store';

import { CoreModule } from 'rling/core/core.module';
import { WebUIModule } from 'rling/webui/webui.module';
import { AppComponent } from 'rling/webui/app.component';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    WebUIModule,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
