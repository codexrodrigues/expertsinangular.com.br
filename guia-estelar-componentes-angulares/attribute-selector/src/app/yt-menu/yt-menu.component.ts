import { Component } from '@angular/core';

@Component({
  selector: 'yt-menu',
  standalone: true,
  imports: [],
  template: `
    <nav>
      <ul>
        <li>Home</li>
        <li>Videos</li>
        <li>Playlists</li>
      </ul>
    </nav>
  `,
  styles: `nav {
    background-color: #333;
    color: white;
    padding: 10px;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: inline;
    margin-right: 10px;
  }
  `
})
export class YtMenuComponent {

}
