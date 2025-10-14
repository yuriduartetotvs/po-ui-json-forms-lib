import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { PoFieldModule } from '@po-ui/ng-components';

@Component({
  selector: 'formly-field-po-multiselect',
  template: `
    <po-multiselect
      [p-label]="props['label']"
      [p-placeholder]="props['placeholder']"
      [p-required]="!!props.required"
      [p-disabled]="!!props.disabled"
      [p-help]="props['help'] || props['description']"
      [p-options]="selectOptions"
      [p-sort]="props['sort']"
      [p-hide-select-all]="props['hideSelectAll']"
      [p-literals]="props['literals']"
      [p-append-in-body]="props['appendInBody']"
      [p-auto-focus]="props['autoFocus']"
      [p-auto-height]="props['autoHeight']"
      [p-debounce-time]="props['debounceTime']"
      [p-error-limit]="props['errorLimit']"
      [p-field-error-message]="props['fieldErrorMessage']"
      [p-field-label]="props['fieldLabel']"
      [p-field-value]="props['fieldValue']"
      [p-filter-mode]="props['filterMode']"
      [p-filter-service]="props['filterService']"
      [p-hide-search]="props['hideSearch']"
      [name]="props['name']"
      [p-optional]="props['optional']"
      [p-placeholder-search]="props['placeholderSearch']"
      [p-show-required]="props['showRequired']"
      [ngModel]="formControl.value"
      (ngModelChange)="formControl.setValue($event)"
      (p-additional-help)="props['onAdditionalHelp'] && props['onAdditionalHelp']($event)"
      (p-blur)="props['onBlur'] && props['onBlur']($event)"
      (p-change)="props['onChange'] && props['onChange']($event)"
      (p-keydown)="props['onKeydown'] && props['onKeydown']($event)">
    </po-multiselect>
  `,
  standalone: true,
  imports: [PoFieldModule, ReactiveFormsModule, FormsModule]
})
export class FormlyFieldPoMultiselect extends FieldType<FieldTypeConfig> {
  get selectOptions(): any[] {
    return Array.isArray(this.props['options']) ? this.props['options'] : [];
  }
}