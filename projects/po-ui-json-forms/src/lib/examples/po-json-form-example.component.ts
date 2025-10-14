import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { PoModule } from '@po-ui/ng-components';
import { FormConfigService } from '../services/form-config.service';

@Component({
  selector: 'po-json-form-example',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormlyModule,
    PoModule
  ],
  template: `
    <po-page-default 
      p-title="Exemplo PO-UI JSON Forms">
      
      <div class="po-row">
        <div class="po-md-6">
          <po-widget p-title="Formulário Dinâmico">
            <form [formGroup]="form" (ngSubmit)="onSubmit()">
              <formly-form 
                [form]="form" 
                [fields]="fields" 
                [model]="model">
              </formly-form>
              
              <div class="po-row po-mt-3">
                <div class="po-md-6">
                  <po-button 
                    p-label="Enviar" 
                    p-type="primary"
                    [p-disabled]="!form.valid"
                    (p-click)="onSubmit()">
                  </po-button>
                </div>
                <div class="po-md-6">
                  <po-button 
                    p-label="Limpar" 
                    p-type="default"
                    (p-click)="onClear()">
                  </po-button>
                </div>
              </div>
            </form>
          </po-widget>
        </div>
        
        <div class="po-md-6">
          <po-widget p-title="Dados do Formulário">
            <pre>{{ model | json }}</pre>
          </po-widget>
        </div>
      </div>
      
      <div class="po-row po-mt-3">
        <div class="po-md-12">
          <po-widget p-title="Templates Disponíveis">
            <div class="po-row">
              <div class="po-md-4" *ngFor="let template of templates">
                <po-button 
                  [p-label]="template.name"
                  p-type="default"
                  (p-click)="loadTemplate(template)">
                </po-button>
              </div>
            </div>
          </po-widget>
        </div>
      </div>
    </po-page-default>
  `,
  styles: [`
    pre {
      background-color: #f5f5f5;
      padding: 1rem;
      border-radius: 4px;
      font-size: 12px;
      max-height: 400px;
      overflow-y: auto;
    }
    
    .po-widget {
      margin-bottom: 1rem;
    }
  `]
})
export class PoJsonFormExampleComponent {
  form = new FormGroup({});
  model: any = {};
  templates: any[] = [];
  
  fields: FormlyFieldConfig[] = [
    {
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
      key: 'email',
      type: 'po-email',
      props: {
        label: 'E-mail',
        placeholder: 'exemplo@email.com',
        required: true
      }
    },
    {
      key: 'idade',
      type: 'po-number',
      props: {
        label: 'Idade',
        min: 18,
        max: 120
      }
    },
    {
      key: 'estado',
      type: 'po-select',
      props: {
        label: 'Estado',
        placeholder: 'Selecione um estado',
        options: [
          { label: 'São Paulo', value: 'SP' },
          { label: 'Rio de Janeiro', value: 'RJ' },
          { label: 'Minas Gerais', value: 'MG' }
        ],
        required: true
      }
    },
    {
      key: 'nascimento',
      type: 'po-datepicker',
      props: {
        label: 'Data de Nascimento',
        format: 'dd/mm/yyyy'
      }
    },
    {
      key: 'interesses',
      type: 'po-checkbox-group',
      props: {
        label: 'Interesses',
        options: [
          { label: 'Tecnologia', value: 'tech' },
          { label: 'Esportes', value: 'sports' },
          { label: 'Música', value: 'music' }
        ]
      }
    }
  ];

  constructor(private formConfigService: FormConfigService) {
    this.loadTemplates();
  }

  loadTemplates() {
    this.templates = this.formConfigService.getTemplates();
  }

  loadTemplate(template: any) {
    this.fields = template.fields;
    this.model = {};
    this.form = new FormGroup({});
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Dados do formulário:', this.model);
      alert('Formulário enviado com sucesso! Verifique o console.');
    } else {
      console.log('Formulário inválido:', this.form.errors);
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }

  onClear() {
    this.model = {};
    this.form.reset();
  }
}