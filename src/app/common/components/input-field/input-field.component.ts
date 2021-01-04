import { Component, forwardRef } from '@angular/core';
import { FieldBaseComponent } from '../field-base.component';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ]
})
export class InputFieldComponent extends FieldBaseComponent<string> implements ControlValueAccessor {

  constructor() {
    super();
  }

}
