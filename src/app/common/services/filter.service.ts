import { Injectable } from '@angular/core';
import { IFilter } from '../models/filter';
import { ILecture } from '../models/lecture';

@Injectable({ providedIn: 'root' })
export class FilterService {

  public list = [];

  constructor() { }

  public filterByTitle(title: string): FilterService {
    const backupList = JSON.parse(JSON.stringify(this.list));

    if (!title) {
      this.list = backupList;
      return this;
    }

    this.list = backupList.filter((i: ILecture) => {
      if (i.title.toLocaleLowerCase().match(new RegExp(title.toLocaleLowerCase(), 'g'))) {
        return true;
      }
      return false;
    });

    return this;
  }

  public filterByArrays(filterBy: IFilter): FilterService {
    let stack = [];
    const _VALUES_LIST = [];
    const _FILTER_BY: IFilter = JSON.parse(JSON.stringify(filterBy));
    const _inputDataArray: ILecture[] = JSON.parse(JSON.stringify(this.list));

    delete _FILTER_BY.title;

    _inputDataArray.forEach((i: ILecture) => {
      for (const key in _FILTER_BY) {
        if (_FILTER_BY.hasOwnProperty(key)) {
          const arr = _FILTER_BY[key];
          if (arr.length) {
            _VALUES_LIST.push({ k: key, v: arr });

            if (arr.includes(i[key].toLocaleLowerCase()) && !stack.find(s => s.id === i.id)) {
              stack.push(i);
            }
          }

          _VALUES_LIST.forEach((vl) => {
            stack = stack.filter(s => vl.v.includes(s[vl.k].toLocaleLowerCase()));
          });
        }
      }
    });

    this.list = !_VALUES_LIST.length ? _inputDataArray : stack;

    return this;
  }
}
