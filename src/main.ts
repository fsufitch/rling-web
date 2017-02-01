import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from 'rling/app.module';

declare const __PROD__: boolean;
!!__PROD__ ? enableProdMode() : console.log('Running in development mode');

platformBrowserDynamic().bootstrapModule(AppModule);
