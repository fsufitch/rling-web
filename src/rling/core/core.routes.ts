import { Routes } from '@angular/router';
import { PageNotFoundComponent } from 'rling/core/not-found';
import { DummyComponent } from 'rling/core/dummy.component';

export const CORE_ROUTES: Routes = [
  { path: '', component: DummyComponent, pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];
