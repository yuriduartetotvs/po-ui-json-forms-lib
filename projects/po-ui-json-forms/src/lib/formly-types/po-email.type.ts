import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { PoFieldModule } from '@po-ui/ng-components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'formly-field-po-email',
  template: `
    <po-email
      [p-label]="props.label || ''"
      [p-placeholder]="props.placeholder || ''"
      [p-help]="props.description || ''"
      [p-required]="props.required ? 'true' : 'false'"
      [p-disabled]="props.disabled ? 'true' : 'false'"
      [p-readonly]="props.readonly ? 'true' : 'false'"
      [p-clean]="props['clean']"
      [p-optional]="props['optional']"
      [p-maxlength]="props.maxLength || 100"
      [p-minlength]="props.minLength || 0"
      [ngModel]="formControl.value"
      (ngModelChange)="formControl.setValue($event)">
    </po-email>
  `,
  standalone: true,
  imports: [PoFieldModule, ReactiveFormsModule, FormsModule]
})
export class FormlyFieldPoEmail extends FieldType<FieldTypeConfig> {}