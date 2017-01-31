import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from 'rling/webui/app.component';
import { TrashTalkModule } from 'rling/trashtalk/trashtalk.module';
import { OverviewModule } from 'rling/overview/overview.module';


@NgModule({
  imports: [
    BrowserModule,
    TrashTalkModule,
    OverviewModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class WebUIModule { }
