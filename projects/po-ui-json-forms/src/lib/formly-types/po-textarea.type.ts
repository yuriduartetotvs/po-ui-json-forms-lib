import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { PoFieldModule } from '@po-ui/ng-components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'formly-field-po-textarea',
  template: `
    <po-textarea
      [p-label]="props.label || ''"
      [p-placeholder]="props.placeholder || ''"
      [p-help]="props.description || ''"
      [p-required]="props.required ? true : false"
      [p-disabled]="!!props.disabled"
      [p-readonly]="!!props.readonly"
      [p-rows]="props.rows || 3"
      [p-maxlength]="props.maxLength || 0"
       [p-maxlength]="props.maxLength || 0"
      [p-optional]="props['optional']"
      [ngModel]="formControl.value"
      (ngModelChange)="formControl.setValue($event)">
    </po-textarea>
  `,
  standalone: true,
  imports: [PoFieldModule, ReactiveFormsModule, FormsModule]
})
export class FormlyFieldPoTextarea extends FieldType<FieldTypeConfig> {}