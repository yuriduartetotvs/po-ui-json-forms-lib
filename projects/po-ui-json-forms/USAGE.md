# PO-UI JSON Forms

Uma biblioteca Angular que integra o PO-UI com NGX Formly para criação de formulários dinâmicos através de configuração JSON.

## Instalação

```bash
npm install po-ui-json-forms @po-ui/ng-components @ngx-formly/core
```

## Dependências

Esta biblioteca requer as seguintes dependências peer:

- `@angular/common: ^19.2.0`
- `@angular/core: ^19.2.0`
- `@angular/forms: ^19.2.0`
- `@ngx-formly/core: ^6.0.0`
- `@po-ui/ng-components: ^18.0.0`
- `rxjs: ~7.8.0`

## Configuração

### 1. Importe o módulo no seu app.config.ts (Angular 17+)

```typescript
import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { FormlyModule } from '@ngx-formly/core';
import { PoUiJsonFormsModule, PO_UI_FORMLY_TYPES } from 'po-ui-json-forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      PoUiJsonFormsModule.forRoot(),
      FormlyModule.forRoot({
        types: PO_UI_FORMLY_TYPES
      })
    )
  ]
};
```

### 2. Para projetos com NgModule (Angular 16 e anteriores)

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

## Uso

### Exemplo básico

```typescript
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-exemplo',
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <formly-form 
        [form]="form" 
        [fields]="fields" 
        [model]="model">
      </formly-form>
      <po-button p-label="Enviar" p-type="submit"></po-button>
    </form>
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
    console.log('Dados do formulário:', this.model);
  }
}
```

## Tipos Disponíveis

A biblioteca fornece os seguintes tipos de campo do PO-UI:

- `po-input` - Campo de entrada de texto
- `po-number` - Campo numérico
- `po-email` - Campo de e-mail
- `po-password` - Campo de senha
- `po-textarea` - Área de texto
- `po-select` - Seleção única
- `po-multiselect` - Seleção múltipla
- `po-combo` - Combo box com busca
- `po-datepicker` - Seletor de data
- `po-datepicker-range` - Seletor de intervalo de datas
- `po-checkbox` - Checkbox individual
- `po-checkbox-group` - Grupo de checkboxes
- `po-radio-group` - Grupo de radio buttons
- `po-switch` - Switch (liga/desliga)
- `po-lookup` - Campo de busca avançada

## Exemplos de Configuração

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

## Serviços

### FormConfigService

Fornece templates pré-definidos de formulários:

```typescript
import { FormConfigService } from 'po-ui-json-forms';

constructor(private formConfigService: FormConfigService) {}

ngOnInit() {
  const templates = this.formConfigService.getTemplates();
  const userTemplate = this.formConfigService.getTemplateByName('Cadastro de Usuário');
}
```

## Contribuição

Para contribuir com o projeto:

1. Fork o repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

MIT License