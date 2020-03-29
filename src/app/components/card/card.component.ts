import { Component, Input } from '@angular/core';
import { ILecture } from 'src/app/common/models/lecture';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() item: ILecture = null;

  constructor() { }

  public getTitle(title: string, maxLength = 60): string {
    if (title.length > maxLength) {
      return title.slice(0, maxLength) + '...';
    }
    return title;
  }

}
