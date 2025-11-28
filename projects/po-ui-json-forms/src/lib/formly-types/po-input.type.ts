import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { PoFieldModule } from '@po-ui/ng-components';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
  selector: 'formly-field-po-input',
  template: `
    <po-input
      [p-label]="props.label || ''"
      [p-placeholder]="props.placeholder || ''"
      [p-help]="props.description || ''"
      p-required="{{!!props.required}}"
      p-disabled="{{!!props.disabled}}"
      p-readonly="{{!!props.readonly}}"
      [p-clean]="props['clean']"
      [p-optional]="props['optional']"
      [p-maxlength]="props.maxLength || 100"
      [p-minlength]="props.minLength || 0"
      [p-mask]="props['mask']"
      [p-mask-format-model]="props['maskFormatModel']"
      [p-mask-no-length-validation]="props['maskNoLengthValidation']"
      [p-pattern]="props.pattern ? (typeof props.pattern === 'string' ? props.pattern : props.pattern.source) : ''"
      [p-upper-case]="props['upperCase']"
      [p-no-autocomplete]="props['noAutocomplete']"
      [p-auto-focus]="props['autoFocus']"
      [p-icon]="props['icon']"
      [p-show-required]="props['showRequired']"
      [p-required-field-error-message]="props['requiredFieldErrorMessage']"
      [p-error-pattern]="props['errorPattern']"
      [p-error-limit]="props['errorLimit']"
      [p-error-async-properties]="props['errorAsyncProperties']"
      [p-emit-all-changes]="props['emitAllChanges']"
      [ngModel]="formControl.value"
      (ngModelChange)="formControl.setValue($event)"
      (p-blur)="props['onBlur'] && props['onBlur']($event)"
      (p-change)="props['onChange'] && props['onChange']($event)"
      (p-change-model)="props['onChangeModel'] && props['onChangeModel']($event)"
      (p-enter)="props['onEnter'] && props['onEnter']($event)"
      (p-keydown)="props['onKeydown'] && props['onKeydown']($event)"
      (p-additional-help)="props['onAdditionalHelp'] && props['onAdditionalHelp']($event)">
    </po-input>
  `,
  standalone: true,
  imports: [PoFieldModule, ReactiveFormsModule, FormsModule]
})
export class FormlyFieldPoInput extends FieldType<FieldTypeConfig> {}