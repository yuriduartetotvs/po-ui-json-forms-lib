import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PoFieldModule } from '@po-ui/ng-components';

@Component({
  selector: 'formly-field-po-lookup',
  template: `
    <po-lookup
      [p-label]="props['label']"
      [p-required]="!!props.required"
      [p-disabled]="!!props.disabled"
      [p-help]="props['help'] || props['description']"
      [p-columns]="props['columns']"
      [p-field-label]="props['fieldLabel']"
      [p-field-value]="props['fieldValue']"
      [p-filter-service]="props['filterService']"
      [p-multiple]="props['multiple']"
      [p-spacing]="props['spacing']"
      [p-advanced-filters]="props['advancedFilters']"
      [p-auto-focus]="props['autoFocus']"
      [p-auto-height]="props['autoHeight']"
      [p-clean]="props['clean']"
      [p-error-limit]="props['errorLimit']"
      [p-field-error-message]="props['fieldErrorMessage']"
      [p-field-format]="props['fieldFormat']"
      [p-filter-params]="props['filterParams']"
      [p-hide-columns-manager]="props['hideColumnsManager']"
      [p-infinite-scroll]="props['infiniteScroll']"
      [p-literals]="props['literals']"
      [name]="props['name']"
      [p-no-autocomplete]="props['noAutocomplete']"
      [p-optional]="props['optional']"
      [p-show-required]="props['showRequired']"
      [p-text-wrap]="props['textWrap']"
      [p-virtual-scroll]="props['virtualScroll']"
      [ngModel]="formControl.value"
      (ngModelChange)="formControl.setValue($event)"
      (p-additional-help)="props['onAdditionalHelp'] && props['onAdditionalHelp']($event)"
      (p-change)="props['onChange'] && props['onChange']($event)"
      (p-change-visible-columns)="props['onChangeVisibleColumns'] && props['onChangeVisibleColumns']($event)"
      (p-restore-column-manager)="props['onRestoreColumnManager'] && props['onRestoreColumnManager']($event)"
      (p-keydown)="props['onKeydown'] && props['onKeydown']($event)"
      (p-error)="props['onError'] && props['onError']($event)"
      (p-selected)="props['onSelected'] && props['onSelected']($event)">
    </po-lookup>
  `,
  standalone: true,
  imports: [PoFieldModule, ReactiveFormsModule, FormsModule]
})
export class FormlyFieldPoLookup extends FieldType<FieldTypeConfig> {}