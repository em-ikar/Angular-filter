import { Component, OnInit } from '@angular/core';
import { IFilter } from 'src/app/common/models/filter';
import { ILecture } from 'src/app/common/models/lecture';
import { FilterService } from 'src/app/common/services/filter.service';
import { LecturesService } from 'src/app/common/services/lecture.service';

@Component({
  selector: 'app-lecture',
  templateUrl: './lecture.component.html',
  styleUrls: ['./lecture.component.scss']
})
export class LectureComponent implements OnInit {

  private backupList: ILecture[] = [];

  public list: ILecture[] = this.backupList;

  constructor(
    private filterService: FilterService,
    private lecturesService: LecturesService
  ) { }

  ngOnInit() {
    this.lecturesService.getAll().subscribe((data) => {
      this.backupList = data;
      this.list = data;
    });
  }

  public onChangeFilter(event: IFilter): void {
    this.filterService.list = this.backupList;
    this.filterService.filterByTitle(event.title).filterByArrays(event);
    this.list = this.filterService.list;
  }
}
