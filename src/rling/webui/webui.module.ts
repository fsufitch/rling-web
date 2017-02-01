import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { AppComponent }  from 'rling/webui/app.component';
import { CoreModule } from 'rling/core/core.module';
import { TrashTalkModule } from 'rling/trashtalk/trashtalk.module';
import { OverviewModule } from 'rling/overview/overview.module';


@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    TrashTalkModule,
    OverviewModule,
    RouterModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [ AppComponent ]
})
export class WebUIModule { }
