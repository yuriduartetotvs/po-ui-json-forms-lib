import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';
import { PoFieldModule } from '@po-ui/ng-components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'formly-field-po-checkbox',
  template: `
    <po-checkbox
      [p-label]="props.label || ''"
      [p-disabled]="!!props.disabled"
      [ngModel]="formControl.value"
      (ngModelChange)="formControl.setValue($event)">
    </po-checkbox>
  `,
  standalone: true,
  imports: [PoFieldModule, ReactiveFormsModule, FormsModule]
})
export class FormlyFieldPoCheckbox extends FieldType {}