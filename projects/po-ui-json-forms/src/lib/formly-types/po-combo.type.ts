import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { PoFieldModule } from '@po-ui/ng-components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'formly-field-po-combo',
  template: `
    <po-combo
      [p-label]="props.label || ''"
      [p-placeholder]="props.placeholder || ''"
      [p-required]="props.required ? true : false"
      [p-disabled]="!!props.disabled"
      [p-help]="props.description || ''"
      [p-options]="getOptions()"
      [p-field-label]="props['fieldLabel'] || 'label'"
      [p-field-value]="props['fieldValue'] || 'value'"
      [p-filter-mode]="props['filterMode'] || 'contains'"
      [p-clean]="props['clean']"
      [p-optional]="props['optional']"
      [ngModel]="formControl.value"
      (ngModelChange)="formControl.setValue($event)">
    </po-combo>
  `,
  standalone: true,
  imports: [PoFieldModule, ReactiveFormsModule, FormsModule]
})
export class FormlyFieldPoCombo extends FieldType {
  getOptions() {
    const options = this.props.options || [];
    if (options instanceof Observable) {
      return [];
    }
    return options;
  }
}