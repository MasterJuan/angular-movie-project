import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {

  @Input() photo;

  getLargeImageUrl(imageId) {
    return `https://picsum.photos/500?image=${imageId}`;
  }
}
