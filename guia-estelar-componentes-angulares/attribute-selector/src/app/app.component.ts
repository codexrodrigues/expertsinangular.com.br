import { Component } from '@angular/core';
import {YtMenuComponent} from "./yt-menu/yt-menu.component";
import {YtPlayerComponent} from "./yt-player/yt-player.component";
import {YoutubeUploadButtonComponent} from "./youtube-upload-button/youtube-upload-button.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ YtMenuComponent,
    YtPlayerComponent,
    YoutubeUploadButtonComponent],
  template: `
    <h1>Welcome to {{title}}!</h1>

    <yt-menu></yt-menu>
    <yt-player></yt-player>
    <button yt-upload></button>
  `,
  styles: [],
})
export class AppComponent {
  title = 'attribute-selector';
}
