import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-modal';

import { CORE_ROUTES } from './core.routes';
import { PageNotFoundComponent }  from './not-found';
import { DummyComponent } from './dummy.component';

@NgModule({
  imports: [
    BrowserModule,
    ModalModule,
    RouterModule.forRoot(CORE_ROUTES, {useHash: true}),
  ],
  exports: [
    PageNotFoundComponent,
    DummyComponent,
  ],
  declarations: [
    PageNotFoundComponent,
    DummyComponent,
  ],
})
export class CoreModule { }
