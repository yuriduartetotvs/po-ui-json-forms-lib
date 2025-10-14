# PO-UI JSON Forms

Uma biblioteca Angular que integra o **PO-UI** com **NGX Formly** para criação de formulários dinâmicos através de configuração JSON. Esta biblioteca permite criar formulários complexos usando componentes do PO-UI de forma declarativa e dinâmica.

## 🚀 Características

- ✅ Integração completa entre PO-UI e NGX Formly
- ✅ Suporte a todos os principais componentes de formulário do PO-UI
- ✅ Formulários dinâmicos via configuração JSON
- ✅ Validação reativa integrada
- ✅ Templates pré-definidos
- ✅ Compatível com Angular 19+
- ✅ Componentes standalone

## 📦 Instalação

```bash
npm install po-ui-json-forms @po-ui/ng-components @ngx-formly/core
```

### Dependências Peer

Esta biblioteca requer as seguintes dependências:

```json
{
  "@angular/common": "^19.2.0",
  "@angular/core": "^19.2.0",
  "@angular/forms": "^19.2.0",
  "@ngx-formly/core": "^7.0.0",
  "@po-ui/ng-components": "~19.0.0",
  "rxjs": "~7.8.0"
}
```

## ⚙️ Configuração

### Angular 17+ (Standalone Bootstrap)

Configure no seu `app.config.ts`:

```typescript
import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { FormlyModule } from '@ngx-formly/core';
import { 
  PoUiJsonFormsModule, 
  PO_UI_FORMLY_TYPES,
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
} from 'po-ui-json-forms';

import { routes } from './app.routes';

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
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      PoUiJsonFormsModule.forRoot(),
      FormlyModule.forRoot({
        types: FORMLY_TYPES_CONFIG
      })
    )
  ]
};
```

### Angular 16 e anteriores (NgModule)

Configure no seu `app.module.ts`:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { PoModule } from '@po-ui/ng-components';
import { PoUiJsonFormsModule, PO_UI_FORMLY_TYPES } from 'po-ui-json-forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    PoModule,
    PoUiJsonFormsModule.forRoot(),
    FormlyModule.forRoot({
      types: PO_UI_FORMLY_TYPES
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## 📋 Uso Básico

### Exemplo Simples

```typescript
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { PoModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-exemplo',
  standalone: true,
  imports: [ReactiveFormsModule, FormlyModule, PoModule],
  template: `
    <po-page-default p-title="Formulário Dinâmico">
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
      
      <po-widget p-title="Dados do Formulário" class="po-mt-3">
        <pre>{{ model | json }}</pre>
      </po-widget>
    </po-page-default>
  `
})
export class ExemploComponent {
  form = new FormGroup({});
  model: any = {};
  
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
    }
  ];

  onSubmit() {
    if (this.form.valid) {
      console.log('Dados do formulário:', this.model);
    }
  }

  onClear() {
    this.model = {};
    this.form.reset();
  }
}
```

## 🎯 Tipos de Campos Disponíveis

| Tipo | Componente PO-UI | Descrição |
|------|------------------|-----------|
| `po-input` | po-input | Campo de entrada de texto |
| `po-number` | po-number | Campo numérico |
| `po-email` | po-email | Campo de e-mail com validação |
| `po-password` | po-password | Campo de senha |
| `po-textarea` | po-textarea | Área de texto multilinha |
| `po-select` | po-select | Seleção única (dropdown) |
| `po-multiselect` | po-multiselect | Seleção múltipla |
| `po-combo` | po-combo | Combo box com busca |
| `po-datepicker` | po-datepicker | Seletor de data |
| `po-datepicker-range` | po-datepicker-range | Seletor de intervalo de datas |
| `po-checkbox` | po-checkbox | Checkbox individual |
| `po-checkbox-group` | po-checkbox-group | Grupo de checkboxes |
| `po-radio-group` | po-radio-group | Grupo de radio buttons |
| `po-switch` | po-switch | Switch (liga/desliga) |
| `po-lookup` | po-lookup | Campo de busca avançada |

## 📝 Exemplos de Configuração

### Campo de Seleção

```typescript
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
}
```

### Campo de Data

```typescript
{
  key: 'nascimento',
  type: 'po-datepicker',
  props: {
    label: 'Data de Nascimento',
    format: 'dd/mm/yyyy',
    required: true
  }
}
```

### Grupo de Checkboxes

```typescript
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
```

### Campo Numérico com Validação

```typescript
{
  key: 'salario',
  type: 'po-number',
  props: {
    label: 'Salário',
    min: 1000,
    max: 50000,
    step: 100,
    required: true
  }
}
```

### Campo de Busca (Lookup)

```typescript
{
  key: 'cliente',
  type: 'po-lookup',
  props: {
    label: 'Cliente',
    service: 'https://api.exemplo.com/clientes',
    columns: [
      { property: 'id', label: 'Código' },
      { property: 'nome', label: 'Nome' },
      { property: 'email', label: 'E-mail' }
    ],
    fieldLabel: 'nome',
    fieldValue: 'id'
  }
}
```

## 🔧 Serviços

### FormConfigService

A biblioteca inclui um serviço com templates pré-definidos:

```typescript
import { FormConfigService } from 'po-ui-json-forms';

@Component({...})
export class MeuComponent {
  constructor(private formConfigService: FormConfigService) {}

  ngOnInit() {
    // Obter todos os templates disponíveis
    const templates = this.formConfigService.getTemplates();
    
    // Obter um template específico
    const userTemplate = this.formConfigService.getTemplateByName('Cadastro de Usuário');
    
    if (userTemplate) {
      this.fields = userTemplate.fields;
    }
  }
}
```

### Templates Disponíveis

- **Cadastro de Usuário**: Formulário básico com nome, email e telefone
- **Endereço**: Formulário completo de endereço
- **Contato**: Formulário de contato com múltiplos campos

## 🎨 Validações

A biblioteca suporta todas as validações do Angular Reactive Forms e do Formly:

```typescript
{
  key: 'email',
  type: 'po-email',
  props: {
    label: 'E-mail',
    required: true
  },
  validators: {
    validation: ['email']
  }
}
```

### Validação Customizada

```typescript
{
  key: 'idade',
  type: 'po-number',
  props: {
    label: 'Idade',
    min: 18,
    max: 65
  },
  validators: {
    validation: [
      {
        name: 'idade-valida',
        message: 'Idade deve estar entre 18 e 65 anos'
      }
    ]
  }
}
```

## 🏗️ Build e Publicação

Para buildar a biblioteca:

```bash
npm run build
```

Para publicar no NPM:

```bash
cd dist/po-ui-json-forms
npm publish
```

## 🤝 Contribuição

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

MIT License

## 🐛 Reportar Problemas

Se encontrou algum problema ou tem sugestões, por favor:

1. Verifique se já não existe uma issue similar
2. Crie uma nova issue com:
   - Descrição detalhada do problema
   - Passos para reproduzir
   - Versão do Angular e das dependências
   - Código de exemplo (se aplicável)

## 📚 Recursos Adicionais

- [Documentação do PO-UI](https://po-ui.io/)
- [Documentação do NGX Formly](https://formly.dev/)
- [Angular Reactive Forms](https://angular.io/guide/reactive-forms)

---

**Desenvolvido com ❤️ para a comunidade Angular**