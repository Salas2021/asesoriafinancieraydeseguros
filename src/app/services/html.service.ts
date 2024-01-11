import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HtmlService {
  private label = [
  ];

  constructor() {}

  getlabel() {
    return this.label;
  }

  getlabe(id: number) {
    return this.label[id];
  }
}
