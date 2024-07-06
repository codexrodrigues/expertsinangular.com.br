import { Component } from '@angular/core';

@Component({
  selector: 'yt-player',
  standalone: true,
  imports: [],
  template: `
    <div class="player">
      <p>Player Component</p>
    </div>
  `,
  styles: `.player {
    width: 100%;
    height: 500px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  `
})
export class YtPlayerComponent {

}
