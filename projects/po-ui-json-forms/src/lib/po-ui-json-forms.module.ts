import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PoModule } from '@po-ui/ng-components';

// Importando todos os tipos
import {
  FormlyFieldPoInput,
  FormlyFieldPoNumber,
  FormlyFieldPoEmail,
  FormlyFieldPoPassword,
  FormlyFieldPoTextarea,
  FormlyFieldPoSelect,
  FormlyFieldPoDatepicker,
  FormlyFieldPoDatepickerRange,
  FormlyFieldPoCheckboxGroup,
  FormlyFieldPoRadioGroup,
  FormlyFieldPoCombo,
  FormlyFieldPoCheckbox,
  FormlyFieldPoLookup,
  FormlyFieldPoMultiselect,
  FormlyFieldPoSwitch
} from './formly-types';

import { PoUiJsonFormsComponent } from './po-ui-json-forms.component';
import { FormConfigService } from './services/form-config.service';

// Definindo os tipos do Formly
export const PO_UI_FORMLY_TYPES = [
  { name: 'po-input', component: FormlyFieldPoInput },
  { name: 'po-number', component: FormlyFieldPoNumber },
  { name: 'po-email', component: FormlyFieldPoEmail },
  { name: 'po-password', component: FormlyFieldPoPassword },
  { name: 'po-textarea', component: FormlyFieldPoTextarea },
  { name: 'po-select', component: FormlyFieldPoSelect },
  { name: 'po-datepicker', component: FormlyFieldPoDatepicker },
  { name: 'po-datepicker-range', component: FormlyFieldPoDatepickerRange },
  { name: 'po-checkbox-group', component: FormlyFieldPoCheckboxGroup },
  { name: 'po-radio-group', component: FormlyFieldPoRadioGroup },
  { name: 'po-combo', component: FormlyFieldPoCombo },
  { name: 'po-checkbox', component: FormlyFieldPoCheckbox },
  { name: 'po-lookup', component: FormlyFieldPoLookup },
  { name: 'po-multiselect', component: FormlyFieldPoMultiselect },
  { name: 'po-switch', component: FormlyFieldPoSwitch }
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    PoModule,
    PoUiJsonFormsComponent,
    FormlyModule
  ],
  exports: [
    PoUiJsonFormsComponent,
    FormlyModule,
    ReactiveFormsModule,
    FormsModule,
    PoModule
  ]
})
export class PoUiJsonFormsModule {
  
  static forRoot(): ModuleWithProviders<PoUiJsonFormsModule> {
    return {
      ngModule: PoUiJsonFormsModule,
      providers: [
        FormConfigService
      ]
    };
  }

  static forChild(): ModuleWithProviders<PoUiJsonFormsModule> {
    return {
      ngModule: PoUiJsonFormsModule,
      providers: []
    };
  }
}