import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { PoFieldModule } from '@po-ui/ng-components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'formly-field-po-password',
  template: `
    <po-password
      [p-label]="props.label || ''"
      [p-placeholder]="props.placeholder || ''"
      [p-help]="props.description || ''"
      [p-required]="props.required?.toString() || 'false'"
      [p-disabled]="props.disabled?.toString() || 'false'"
      [p-readonly]="props.readonly?.toString() || 'false'"
      [p-hide-password-peek]="props['hidePasswordPeek']"
      [p-clean]="props['clean']"
      [p-optional]="props['optional']"
      [p-maxlength]="props.maxLength ?? 100"
      [p-minlength]="props.minLength ?? 0"
      [ngModel]="formControl.value"
      (ngModelChange)="formControl.setValue($event)">
    </po-password>
  `,
  standalone: true,
  imports: [PoFieldModule, ReactiveFormsModule, FormsModule]
})
export class FormlyFieldPoPassword extends FieldType<FieldTypeConfig> {}