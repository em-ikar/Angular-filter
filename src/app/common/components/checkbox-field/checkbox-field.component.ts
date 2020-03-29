import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { FieldBaseComponent } from '../field-base.component';

@Component({
  selector: 'checkbox-field',
  templateUrl: './checkbox-field.component.html',
  styleUrls: ['./checkbox-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckboxFieldComponent),
      multi: true
    }
  ]
})
export class CheckboxFieldComponent extends FieldBaseComponent {

  constructor() { super(); }

}
