import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { PoModule } from '@po-ui/ng-components';
import { FormConfigService } from '../services/form-config.service';

@Component({
  selector: 'app-form-exemplo-completo',
  standalone: true,
  imports: [ReactiveFormsModule, FormlyModule, PoModule],
  template: `
    <po-page-default p-title="Exemplo Completo - PO-UI JSON Forms">
      
      <div class="po-row">
        <div class="po-md-8">
          <po-widget p-title="Formulário Dinâmico">
            <form [formGroup]="form" (ngSubmit)="onSubmit()">
              <formly-form 
                [form]="form" 
                [fields]="fields" 
                [model]="model">
              </formly-form>
              
              <div class="po-row po-mt-3">
                <div class="po-md-3">
                  <po-button 
                    p-label="Enviar" 
                    p-type="primary"
                    [p-disabled]="!form.valid"
                    (p-click)="onSubmit()">
                  </po-button>
                </div>
                <div class="po-md-3">
                  <po-button 
                    p-label="Limpar" 
                    p-type="default"
                    (p-click)="onClear()">
                  </po-button>
                </div>
                <div class="po-md-3">
                  <po-button 
                    p-label="Preencher Exemplo" 
                    p-type="tertiary"
                    (p-click)="preencherExemplo()">
                  </po-button>
                </div>
                <div class="po-md-3">
                  <po-button 
                    p-label="Validar" 
                    p-type="secondary"
                    (p-click)="validarFormulario()">
                  </po-button>
                </div>
              </div>
            </form>
          </po-widget>
        </div>
        
        <div class="po-md-4">
          <po-widget p-title="Status do Formulário">
            <div class="po-mb-2">
              <strong>Válido:</strong> 
              <po-tag 
                [p-value]="form.valid ? 'SIM' : 'NÃO'" 
                [p-color]="form.valid ? 'success' : 'danger'">
              </po-tag>
            </div>
            
            <div class="po-mb-2" *ngIf="!form.valid">
              <strong>Erros:</strong>
              <ul class="po-mt-1">
                <li *ngFor="let error of getFormErrors()">{{ error }}</li>
              </ul>
            </div>
            
            <div class="po-mt-3">
              <strong>Dados atuais:</strong>
              <pre class="json-preview">{{ model | json }}</pre>
            </div>
          </po-widget>
        </div>
      </div>
      
      <div class="po-row po-mt-3">
        <div class="po-md-12">
          <po-widget p-title="Templates Pré-definidos">
            <div class="po-row">
              <div class="po-md-3" *ngFor="let template of templates">
                <po-button 
                  [p-label]="template.name"
                  p-type="default"
                  p-size="medium"
                  class="po-mb-2"
                  (p-click)="carregarTemplate(template)">
                </po-button>
              </div>
            </div>
          </po-widget>
        </div>
      </div>
      
      <div class="po-row po-mt-3">
        <div class="po-md-12">
          <po-widget p-title="Configuração JSON do Formulário">
            <po-textarea
              p-label="JSON de Configuração"
              p-rows="10"
              p-readonly="true"
              [ngModel]="getFieldsAsJson()">
            </po-textarea>
          </po-widget>
        </div>
      </div>
      
    </po-page-default>
  `,
  styles: [`
    .json-preview {
      background-color: #f5f5f5;
      padding: 0.75rem;
      border-radius: 4px;
      font-size: 11px;
      max-height: 300px;
      overflow-y: auto;
      white-space: pre-wrap;
      word-break: break-word;
    }
    
    .po-widget {
      margin-bottom: 1rem;
    }
    
    ul {
      margin: 0;
      padding-left: 1rem;
    }
    
    li {
      font-size: 12px;
      color: #d73527;
    }
  `]
})
export class FormExemploCompletoComponent {
  form = new FormGroup({});
  model: any = {};
  templates: any[] = [];
  
  // Configuração completa do formulário
  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'po-row',
      fieldGroup: [
        {
          className: 'po-md-6',
          key: 'nome',
          type: 'po-input',
          props: {
            label: 'Nome Completo',
            placeholder: 'Digite seu nome completo',
            required: true,
            description: 'Informe seu nome completo'
          }
        },
        {
          className: 'po-md-6',
          key: 'email',
          type: 'po-email',
          props: {
            label: 'E-mail',
            placeholder: 'exemplo@email.com',
            required: true
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'po-row',
      fieldGroup: [
        {
          className: 'po-md-4',
          key: 'idade',
          type: 'po-number',
          props: {
            label: 'Idade',
            min: 18,
            max: 120,
            required: true
          }
        },
        {
          className: 'po-md-4',
          key: 'estado',
          type: 'po-select',
          props: {
            label: 'Estado',
            placeholder: 'Selecione um estado',
            options: [
              { label: 'São Paulo', value: 'SP' },
              { label: 'Rio de Janeiro', value: 'RJ' },
              { label: 'Minas Gerais', value: 'MG' },
              { label: 'Bahia', value: 'BA' },
              { label: 'Paraná', value: 'PR' }
            ],
            required: true
          }
        },
        {
          className: 'po-md-4',
          key: 'nascimento',
          type: 'po-datepicker',
          props: {
            label: 'Data de Nascimento',
            format: 'dd/mm/yyyy',
            required: true
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'po-row',
      fieldGroup: [
        {
          className: 'po-md-6',
          key: 'salario',
          type: 'po-number',
          props: {
            label: 'Salário Esperado',
            min: 1000,
            max: 50000,
            step: 100
          }
        },
        {
          className: 'po-md-6',
          key: 'senha',
          type: 'po-password',
          props: {
            label: 'Senha',
            placeholder: 'Digite uma senha',
            required: true,
            minLength: 6
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'po-row',
      fieldGroup: [
        {
          className: 'po-md-12',
          key: 'biografia',
          type: 'po-textarea',
          props: {
            label: 'Biografia',
            placeholder: 'Conte um pouco sobre você...',
            rows: 4,
            maxLength: 500
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'po-row',
      fieldGroup: [
        {
          className: 'po-md-6',
          key: 'interesses',
          type: 'po-checkbox-group',
          props: {
            label: 'Interesses',
            options: [
              { label: 'Tecnologia', value: 'tech' },
              { label: 'Esportes', value: 'sports' },
              { label: 'Música', value: 'music' },
              { label: 'Viagens', value: 'travel' },
              { label: 'Leitura', value: 'reading' }
            ]
          }
        },
        {
          className: 'po-md-6',
          key: 'genero',
          type: 'po-radio-group',
          props: {
            label: 'Gênero',
            options: [
              { label: 'Masculino', value: 'M' },
              { label: 'Feminino', value: 'F' },
              { label: 'Outros', value: 'O' },
              { label: 'Prefiro não informar', value: 'N' }
            ],
            required: true
          }
        }
      ]
    },
    {
      fieldGroupClassName: 'po-row',
      fieldGroup: [
        {
          className: 'po-md-6',
          key: 'newsletter',
          type: 'po-switch',
          props: {
            label: 'Receber Newsletter'
          }
        },
        {
          className: 'po-md-6',
          key: 'termos',
          type: 'po-checkbox',
          props: {
            label: 'Aceito os termos e condições',
            required: true
          }
        }
      ]
    }
  ];

  constructor(private formConfigService: FormConfigService) {
    this.carregarTemplates();
  }

  carregarTemplates() {
    this.templates = this.formConfigService.getTemplates();
  }

  carregarTemplate(template: any) {
    this.fields = template.fields;
    this.model = {};
    this.form = new FormGroup({});
  }

  preencherExemplo() {
    this.model = {
      nome: 'João Silva Santos',
      email: 'joao.silva@exemplo.com',
      idade: 30,
      estado: 'SP',
      nascimento: '1994-05-15',
      salario: 8500,
      senha: '123456',
      biografia: 'Desenvolvedor Full Stack com 8 anos de experiência em tecnologias web.',
      interesses: ['tech', 'reading'],
      genero: 'M',
      newsletter: true,
      termos: true
    };
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('✅ Formulário válido! Dados:', this.model);
      
      // Simulação de envio
      alert('Formulário enviado com sucesso! Verifique o console para ver os dados.');
    } else {
      console.log('❌ Formulário inválido. Erros:', this.getFormErrors());
      alert('Por favor, corrija os erros antes de enviar.');
    }
  }

  onClear() {
    this.model = {};
    this.form.reset();
    console.log('🧹 Formulário limpo');
  }

  validarFormulario() {
    this.form.markAllAsTouched();
    
    const erros = this.getFormErrors();
    
    if (erros.length === 0) {
      alert('✅ Formulário válido!');
    } else {
      alert(`❌ Formulário tem ${erros.length} erro(s). Verifique os campos destacados.`);
    }
  }

  getFormErrors(): string[] {
    const errors: string[] = [];
    
    Object.keys(this.form.controls).forEach(key => {
      const control = this.form.get(key);
      if (control && control.errors && control.touched) {
        if (control.errors['required']) {
          errors.push(`Campo "${this.getFieldLabel(key)}" é obrigatório`);
        }
        if (control.errors['email']) {
          errors.push(`Campo "${this.getFieldLabel(key)}" deve ser um e-mail válido`);
        }
        if (control.errors['min']) {
          errors.push(`Campo "${this.getFieldLabel(key)}" deve ser maior que ${control.errors['min'].min}`);
        }
        if (control.errors['max']) {
          errors.push(`Campo "${this.getFieldLabel(key)}" deve ser menor que ${control.errors['max'].max}`);
        }
      }
    });
    
    return errors;
  }

  getFieldLabel(key: string): string {
    // Busca recursiva pelo label do campo
    const findField = (fields: FormlyFieldConfig[], targetKey: string): FormlyFieldConfig | null => {
      for (const field of fields) {
        if (field.key === targetKey) {
          return field;
        }
        if (field.fieldGroup) {
          const found = findField(field.fieldGroup, targetKey);
          if (found) return found;
        }
      }
      return null;
    };

    const field = findField(this.fields, key);
    return field?.props?.['label'] || key;
  }

  getFieldsAsJson(): string {
    return JSON.stringify(this.fields, null, 2);
  }
}