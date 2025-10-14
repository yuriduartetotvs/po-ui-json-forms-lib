import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Injectable({
  providedIn: 'root'
})
export class PoUiFormlyConfigService {

  /**
   * Retorna a configuração dos tipos do Formly para uso com PO-UI
   */
  static getFormlyTypes() {
    return [
      { name: 'po-input', component: 'FormlyFieldPoInput' },
      { name: 'po-number', component: 'FormlyFieldPoNumber' },
      { name: 'po-email', component: 'FormlyFieldPoEmail' },
      { name: 'po-password', component: 'FormlyFieldPoPassword' },
      { name: 'po-textarea', component: 'FormlyFieldPoTextarea' },
      { name: 'po-select', component: 'FormlyFieldPoSelect' },
      { name: 'po-datepicker', component: 'FormlyFieldPoDatepicker' },
      { name: 'po-datepicker-range', component: 'FormlyFieldPoDatepickerRange' },
      { name: 'po-checkbox-group', component: 'FormlyFieldPoCheckboxGroup' },
      { name: 'po-radio-group', component: 'FormlyFieldPoRadioGroup' },
      { name: 'po-combo', component: 'FormlyFieldPoCombo' },
      { name: 'po-checkbox', component: 'FormlyFieldPoCheckbox' },
      { name: 'po-lookup', component: 'FormlyFieldPoLookup' },
      { name: 'po-multiselect', component: 'FormlyFieldPoMultiselect' },
      { name: 'po-switch', component: 'FormlyFieldPoSwitch' }
    ];
  }

  /**
   * Valida se uma configuração de campo é válida
   */
  validateFieldConfig(field: FormlyFieldConfig): boolean {
    if (!field.type) {
      console.error('Campo deve ter um tipo definido', field);
      return false;
    }

    if (!field.key && field.type !== 'group') {
      console.error('Campo deve ter uma chave definida', field);
      return false;
    }

    return true;
  }

  /**
   * Valida um array de configurações de campos
   */
  validateFormConfig(fields: FormlyFieldConfig[]): boolean {
    return fields.every(field => this.validateFieldConfig(field));
  }
}