import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClickCounterService  {
  private count = 0;

  increment() {
    this.count++;
  }

  getCount() {
    return this.count;
  }

  reset() {
    this.count = 0;
  }

}
