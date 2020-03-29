import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IFilterBuilder, IFilter } from 'src/app/common/models/filter';
import { FormBuilder } from '@angular/forms';
import { interval } from 'rxjs';
import { debounce } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {

  @Output() filterChange: EventEmitter<any> = new EventEmitter<any>();

  private defaultFilterSettings: IFilterBuilder = {
    name: '',
    lang: {
      ru: false,
      en: false,
    },
    level: {
      hot: false,
      intermediate: false,
      advanced: false,
      hardcore: false,
      academic: false,
    }
  };

  public form = this.fb.group({
    name: [this.defaultFilterSettings.name],

    lang: this.fb.group({
      ru: [this.defaultFilterSettings.lang.ru],
      en: [this.defaultFilterSettings.lang.en],
    }),

    level: this.fb.group({
      hot: [this.defaultFilterSettings.level.hot],
      intermediate: [this.defaultFilterSettings.level.intermediate],
      advanced: [this.defaultFilterSettings.level.advanced],
      hardcore: [this.defaultFilterSettings.level.hardcore],
      academic: [this.defaultFilterSettings.level.academic],
    }),
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initSubscribe();
  }

  public onReset(): void {
    this.form.setValue(this.defaultFilterSettings);
  }

  private initSubscribe(): void {
    this.form.valueChanges
      .pipe(debounce(() => interval(800)))
      .subscribe((data) => {
        const _data = JSON.parse(JSON.stringify(data));

        let filter: IFilter = {
          title: this.checkName(_data.name),
          lang: [],
          level: []
        };

        delete _data.name;

        for (const key in _data) {
          if (_data.hasOwnProperty(key)) {
            filter = this.getUpdatedFilter(_data, key, filter);
          }
        }

        this.filterChange.emit(filter);
      });
  }

  private checkName(fieldName: string): string {
    if (fieldName.trim()) {
      return fieldName;
    }
    return '';
  }

  private getUpdatedFilter(data, key: string, filter: IFilter): IFilter {
    const _FILTER = JSON.parse(JSON.stringify(filter));
    if (data[key]) {
      for (const k in data[key]) {
        if (data[key].hasOwnProperty(k)) {
          const value = data[key][k];
          if (value) {
            _FILTER[key].push(k);
          }
        }
      }
    }
    return _FILTER;
  }

}
