import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TrashTalkComponent } from './trashtalk.component';
import { TrashTalkService } from './trashtalk.service';

@NgModule({
  exports: [
    TrashTalkComponent,
  ],
  declarations: [
    TrashTalkComponent,
  ],
  providers: [
    TrashTalkService,
  ]
})
export class TrashTalkModule { }
