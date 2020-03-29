import { ControlValueAccessor } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { Input } from '@angular/core';

export class FieldBaseComponent implements ControlValueAccessor {

    @Input() label = '';

    private _value = null;

    set value(data) {
        this._value = data;
        this.onChange(data);
    }

    get value() {
        return this._value;
    }

    constructor() { }

    public writeValue(value: any): void {
        if (isNullOrUndefined(value)) { return; }
        this.value = value;
    }

    public registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    public onChange = _ => { };

    public onTouched = () => { };

}
