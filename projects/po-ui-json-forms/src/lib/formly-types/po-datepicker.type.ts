import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { PoFieldModule } from '@po-ui/ng-components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'formly-field-po-datepicker',
  template: `
    <po-datepicker
      [p-label]="props.label || ''"
      [p-placeholder]="props.placeholder || ''"
      [p-help]="props.description || ''"
      [p-required]="props.required ? 'true' : 'false'"
      [p-disabled]="props.disabled ? 'true' : 'false'"
      [p-readonly]="props.disabled ? 'true' : 'false'"
      [p-format]="props['format']"
      [p-locale]="props['locale']"
      [p-max-date]="props['maxDate']"
      [p-min-date]="props['minDate']"
      [p-clean]="props['clean']"
      [p-optional]="props['optional']"
      [ngModel]="formControl.value"
      (ngModelChange)="formControl.setValue($event)">
    </po-datepicker>
  `,
  standalone: true,
  imports: [PoFieldModule, ReactiveFormsModule, FormsModule]
})
export class FormlyFieldPoDatepicker extends FieldType<FieldTypeConfig> {}