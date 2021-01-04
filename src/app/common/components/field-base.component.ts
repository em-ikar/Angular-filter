import { ControlValueAccessor } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { Input } from '@angular/core';

export class FieldBaseComponent<T> implements ControlValueAccessor {

    @Input() label: string = '';

    set value(data: T) {
        this._value = data;
        this.onChange(data);
    }

    get value(): T {
        return this._value;
    }

    private _value: T = null;

    constructor() { }

    public writeValue(value: T): void {
        if (isNullOrUndefined(value)) { return; }
        this.value = value;
    }

    public registerOnChange(fn): void {
        this.onChange = fn;
    }

    public registerOnTouched(fn): void {
        this.onTouched = fn;
    }

    public onChange = _ => { };

    public onTouched = () => { };

}
