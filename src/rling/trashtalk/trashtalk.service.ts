import { Injectable } from '@angular/core';

const INSULTS_FILE: string = require('./insults.txt');

@Injectable()
export class TrashTalkService {
  insults = INSULTS_FILE.split('\n')
    .map(insult => insult.trim());

  getInsult(index: number) {
    return this.insults[index];
  }

  getRandomInsult() {
    let index = parseInt('' + this.insults.length * Math.random());
    return this.getInsult(index);
  }
}
