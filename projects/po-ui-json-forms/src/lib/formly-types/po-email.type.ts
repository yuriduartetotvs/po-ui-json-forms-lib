import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { PoFieldModule } from '@po-ui/ng-components';
import { ReactiveFormsModule, FormsModule, Validators } from '@angular/forms';

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
      (ngModelChange)="onValueChange($event)"
      (p-change)="onEmailChange($event)">
    </po-email>
  `,
  standalone: true,
  imports: [PoFieldModule, ReactiveFormsModule, FormsModule]
})
export class FormlyFieldPoEmail extends FieldType<FieldTypeConfig> {
  override defaultOptions = {
    validators: {
      email: {
        expression: (c: any) => {
          if (!c.value) return true;
          
          if (/\.\./.test(c.value)) return false;
          
          const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          return emailRegex.test(c.value);
        },
        message: 'Email inválido. Use o formato: exemplo@dominio.com',
      },
    },
  };

  onValueChange(value: string) {
    this.formControl.setValue(value);
    this.formControl.markAsTouched();
  }

  onEmailChange(event: any) {
    console.log('Email changed:', event);
    this.formControl.updateValueAndValidity();
  }
}