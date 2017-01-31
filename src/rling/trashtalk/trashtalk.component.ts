import { Component, OnInit } from '@angular/core';

import { TrashTalkService } from './trashtalk.service';

@Component({
  selector: 'trashtalk',
  template: require('./trashtalk.component.html'),
})
export class TrashTalkComponent implements OnInit {
  trashTalk: string;
  constructor(private trashTalkService: TrashTalkService) {}

  ngOnInit() {
    this.refreshInsult();
  }

  refreshInsult() {
    this.trashTalk = this.trashTalkService.getRandomInsult();
  }
}
