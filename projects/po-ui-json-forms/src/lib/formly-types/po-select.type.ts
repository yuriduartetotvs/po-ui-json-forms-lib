import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { PoFieldModule } from '@po-ui/ng-components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'formly-field-po-select',
  template: `
    <po-select
      [p-label]="props.label || ''"
      [p-placeholder]="props.placeholder || ''"
      [p-help]="props.description || ''"
      [p-required]="props.required ? true : false"
      [p-disabled]="!!props.disabled"
      [p-readonly]="!!props.readonly"
      [p-options]="getOptions()"
      [p-field-label]="props['fieldLabel'] || 'label'"
      [p-field-value]="props['fieldValue'] || 'value'"
      [p-optional]="props['optional']"
      [ngModel]="formControl.value"
      (ngModelChange)="formControl.setValue($event)">
    </po-select>
  `,
  standalone: true,
  imports: [PoFieldModule, ReactiveFormsModule, FormsModule]
})
export class FormlyFieldPoSelect extends FieldType<FieldTypeConfig> {
  getOptions() {
    const options = this.props.options || [];
    if (options instanceof Observable) {
      return [];
    }
    return options;
  }
}