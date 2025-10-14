import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { PoFieldModule } from '@po-ui/ng-components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'formly-field-po-radio-group',
  template: `
    <po-radio-group
      [p-label]="props.label || ''"
      [p-help]="props.description || ''"
      [p-required]="props.required ? true : false"
      [p-disabled]="!!props.disabled"
      [p-options]="getOptions()"
      [p-columns]="props['columns']"
      [p-optional]="props['optional']"
      [ngModel]="formControl.value"
      (ngModelChange)="formControl.setValue($event)">
    </po-radio-group>
  `,
  standalone: true,
  imports: [PoFieldModule, ReactiveFormsModule, FormsModule]
})
export class FormlyFieldPoRadioGroup extends FieldType<FieldTypeConfig> {
  getOptions() {
    const options = this.props.options || [];
    if (options instanceof Observable) {
      return [];
    }
    return options;
  }
}