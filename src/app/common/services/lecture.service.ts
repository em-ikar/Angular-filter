import { Injectable } from '@angular/core';
import { ILecture } from '../models/lecture';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LecturesService {

    private _namespace = '/api';

    constructor(private _http: HttpClient) { }

    public getAll(): Observable<ILecture[]> {
        return this._http.get<ILecture[]>(`${this._namespace}/lectures`);
    }

}
