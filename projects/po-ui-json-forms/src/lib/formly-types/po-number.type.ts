import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { PoFieldModule } from '@po-ui/ng-components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'formly-field-po-number',
  template: `
    <po-number
      [p-label]="props.label || ''"
      [p-placeholder]="props.placeholder || ''"
      [p-help]="props.description || ''"
      [p-required]="props.required ? 'true' : 'false'"
      [p-disabled]="props.disabled ? 'true' : 'false'"
      [p-readonly]="props.readonly ? 'true' : 'false'"
      [p-max]="props.max ?? 99"
      [p-min]="props.min ?? 0"
      [p-step]="(props.step ?? 0).toString()"
      [p-maxlength]="props.maxLength ?? 100"
      [p-minlength]="props.minLength ?? 0"
      [p-clean]="props['clean']"
      [p-optional]="props['optional']"
      [ngModel]="formControl.value"
      (ngModelChange)="formControl.setValue($event)">
    </po-number>
  `,
  standalone: true,
  imports: [PoFieldModule, ReactiveFormsModule, FormsModule]
})
export class FormlyFieldPoNumber extends FieldType<FieldTypeConfig> {}