/**
 * Exemplo de configuração para usar a biblioteca po-ui-json-forms
 * Copie este arquivo e adapte conforme sua necessidade
 */

import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { FormlyModule } from '@ngx-formly/core';

// Importar da biblioteca (em produção use 'po-ui-json-forms')
import { 
  PoUiJsonFormsModule, 
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
} from '../../public-api';

// Configuração dos tipos do Formly com as classes dos componentes
const FORMLY_TYPES_CONFIG = [
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

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter([]), // suas rotas aqui
    provideHttpClient(),
    importProvidersFrom(
      PoUiJsonFormsModule.forRoot(),
      FormlyModule.forRoot({
        types: FORMLY_TYPES_CONFIG
      })
    )
  ]
};