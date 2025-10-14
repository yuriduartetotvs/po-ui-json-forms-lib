import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { PoFieldModule } from '@po-ui/ng-components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'formly-field-po-input',
  template: `
    <po-input
      [p-label]="props.label || ''"
      [p-placeholder]="props.placeholder || ''"
      [p-help]="props.description || ''"
      p-required="{{!!props.required}}"
      p-disabled="{{!!props.disabled}}"
      p-readonly="{{!!props.readonly}}"
      [ngModel]="formControl.value"
      (ngModelChange)="formControl.setValue($event)">
    </po-input>
  `,
  standalone: true,
  imports: [PoFieldModule, ReactiveFormsModule, FormsModule]
})
export class FormlyFieldPoInput extends FieldType<FieldTypeConfig> {}