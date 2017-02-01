import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-modal';

import { OverviewComponent } from './overview.component';
import { OverviewGuideComponent } from './overview-guide.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'overview-guide', component: OverviewGuideComponent}
    ]),
    ModalModule,
  ],
  exports: [
    OverviewComponent,
  ],
  declarations: [
    OverviewComponent,
    OverviewGuideComponent,
  ],
})
export class OverviewModule { }
