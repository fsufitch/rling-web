import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'ng2app',
  template: require('./app.component.html'),
  styles: [
    require('./app.component.scss')
  ],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
}
