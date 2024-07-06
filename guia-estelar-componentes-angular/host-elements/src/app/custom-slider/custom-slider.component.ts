import { Component } from '@angular/core';

@Component({
  selector: 'custom-slider',
  standalone: true,
  imports: [],
  template: `
    <div class="slider">
      <div class="slider-track"></div>
      <div class="slider-thumb" [style.left.%]="value"></div>
    </div>
  `,
  styles: [`
    .slider {
      position: relative;
      width: 100%;
      height: 10px;
      background: #ddd;
    }
    .slider-track {
      position: absolute;
      width: 100%;
      height: 100%;
      background: #AD23F3;
    }
    .slider-thumb {
      position: absolute;
      width: 20px;
      height: 20px;
      background: #000;
      border-radius: 50%;
      cursor: pointer;
    }
  `],
  host: {
    'role': 'slider',
    '[attr.aria-valuenow]': 'value',
    '[tabIndex]': 'disabled ? -1 : 0',
    '(keydown)': 'updateValue($event)',
  }

})
export class CustomSliderComponent {
  value: number = 0;
  disabled: boolean = false;

  updateValue(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.value = Math.min(this.value + 1, 100);
    } else if (event.key === 'ArrowLeft') {
      this.value = Math.max(this.value - 1, 0);
    }
  }

}
