import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { PoFieldModule } from '@po-ui/ng-components';

@Component({
  selector: 'formly-field-po-switch',
  template: `
    <po-switch
      [p-disabled]="props['disabled']"
      [p-help]="props['help'] || props['description']"
      [p-label-off]="props['labelOff']"
      [p-label-on]="props['labelOn']"
      [p-format-model]="props['formatModel']"
      [p-hide-label-status]="props['hideLabelStatus']"
      [p-label-position]="props['labelPosition']"
      [name]="props['name']"
      [ngModel]="formControl.value"
      (ngModelChange)="formControl.setValue($event)"
      (p-additional-help)="props['onAdditionalHelp'] && props['onAdditionalHelp']($event)"
      (p-change)="props['onChange'] && props['onChange']($event)"
      (p-keydown)="props['onKeydown'] && props['onKeydown']($event)">
    </po-switch>
  `,
  standalone: true,
  imports: [PoFieldModule, ReactiveFormsModule, FormsModule]
})
export class FormlyFieldPoSwitch extends FieldType<FieldTypeConfig> {}