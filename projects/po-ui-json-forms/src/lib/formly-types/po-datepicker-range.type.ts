import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { PoFieldModule } from '@po-ui/ng-components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'formly-field-po-datepicker-range',
  template: `
    <po-datepicker-range
      [p-label]="props['label']"
      [p-required]="!!props.required"
      [p-disabled]="!!props.disabled"
      [p-readonly]="!!props.readonly"
      [p-help]="props['help'] || props['description']"
      [p-auto-focus]="props['autoFocus']"
      [p-clean]="props['clean']"
      [p-end-date]="props['endDate']"
      [p-error-limit]="props['errorLimit']"
      [p-field-error-message]="props['fieldErrorMessage']"
      [p-literals]="props['literals']"
      [p-locale]="props['locale']"
      [p-max-date]="props['maxDate']"
      [p-min-date]="props['minDate']"
      [p-no-autocomplete]="props['noAutocomplete']"
      [p-optional]="props['optional']"
      [p-show-required]="props['showRequired']"
      [p-start-date]="props['startDate']"
      [ngModel]="formControl.value"
      (ngModelChange)="formControl.setValue($event)"
      (p-additional-help)="props['onAdditionalHelp'] && props['onAdditionalHelp']($event)"
      (p-keydown)="props['onKeydown'] && props['onKeydown']($event)"
      (p-change)="props['onChange'] && props['onChange']($event)">
    </po-datepicker-range>
  `,
  standalone: true,
  imports: [PoFieldModule, ReactiveFormsModule, FormsModule]
})
export class FormlyFieldPoDatepickerRange extends FieldType<FieldTypeConfig> {}