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
  "@angular/common": "^19.0.0",
  "@angular/core": "^19.0.0",
  "@angular/forms": "^19.0.0",
  "@ngx-formly/core": "^7.0.0",
  "@po-ui/ng-components": "~19.0.0",
  "rxjs": "~7.8.0"
}
```

## ⚙️ Configuração

### Angular 19 (Standalone Bootstrap)

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

## 🔧 Uso Básico

### Exemplo Completo de Formulário

Aqui está um exemplo completo demonstrando todos os tipos de campos disponíveis:

```typescript
import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { PoModule } from '@po-ui/ng-components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule, FormlyModule, PoModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'JSON PO-UI Form Generator';
  
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  // Configuração usando diferentes tipos do PO-UI
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
      key: 'sobrenome',
      type: 'po-input',
      props: {
        label: 'Sobrenome',
        placeholder: 'Digite seu sobrenome',
        required: false
      }
    },
    {
      key: 'email',
      type: 'po-email',
      props: {
        label: 'E-mail',
        placeholder: 'Digite seu e-mail',
        required: true,
        description: 'Informe um e-mail válido'
      }
    },
    {
      key: 'senha',
      type: 'po-password',
      props: {
        label: 'Senha',
        placeholder: 'Digite sua senha',
        required: true,
        minLength: 8,
        description: 'A senha deve ter pelo menos 8 caracteres'
      }
    },
    {
      key: 'idade',
      type: 'po-number',
      props: {
        label: 'Idade',
        placeholder: 'Digite sua idade',
        required: true,
        min: 18,
        max: 120,
        description: 'Informe sua idade (mínimo 18 anos)'
      }
    },
    {
      key: 'dataNascimento',
      type: 'po-datepicker',
      props: {
        label: 'Data de Nascimento',
        required: true,
        description: 'Selecione sua data de nascimento'
      }
    },
    {
      key: 'estado',
      type: 'po-select',
      props: {
        label: 'Estado',
        placeholder: 'Selecione seu estado',
        required: true,
        options: [
          { label: 'São Paulo', value: 'SP' },
          { label: 'Rio de Janeiro', value: 'RJ' },
          { label: 'Minas Gerais', value: 'MG' },
          { label: 'Bahia', value: 'BA' },
          { label: 'Paraná', value: 'PR' },
          { label: 'Rio Grande do Sul', value: 'RS' },
          { label: 'Pernambuco', value: 'PE' },
          { label: 'Ceará', value: 'CE' },
          { label: 'Pará', value: 'PA' },
          { label: 'Santa Catarina', value: 'SC' }
        ],
        description: 'Selecione o estado onde reside'
      }
    },
    {
      key: 'profissao',
      type: 'po-combo',
      props: {
        label: 'Profissão',
        placeholder: 'Digite ou selecione sua profissão',
        required: true,
        options: [
          { label: 'Desenvolvedor', value: 'dev' },
          { label: 'Designer', value: 'design' },
          { label: 'Analista', value: 'analista' },
          { label: 'Gerente', value: 'gerente' },
          { label: 'Consultor', value: 'consultor' },
          { label: 'Arquiteto de Software', value: 'arquiteto' },
          { label: 'Product Owner', value: 'po' },
          { label: 'Scrum Master', value: 'sm' }
        ],
        fieldValue: 'value',
        fieldLabel: 'label',
        description: 'Digite ou selecione sua profissão'
      }
    },
    {
      key: 'genero',
      type: 'po-radio-group',
      props: {
        label: 'Gênero',
        required: true,
        options: [
          { label: 'Masculino', value: 'M' },
          { label: 'Feminino', value: 'F' },
          { label: 'Outro', value: 'O' },
          { label: 'Prefiro não informar', value: 'N' }
        ],
        description: 'Selecione seu gênero'
      }
    },
    {
      key: 'hobbies',
      type: 'po-checkbox-group',
      props: {
        label: 'Hobbies',
        options: [
          { label: 'Leitura', value: 'leitura' },
          { label: 'Esportes', value: 'esportes' },
          { label: 'Música', value: 'musica' },
          { label: 'Cinema', value: 'cinema' },
          { label: 'Culinária', value: 'culinaria' },
          { label: 'Viagens', value: 'viagens' },
          { label: 'Tecnologia', value: 'tecnologia' },
          { label: 'Arte', value: 'arte' }
        ],
        description: 'Selecione seus hobbies (múltipla escolha)'
      }
    },
    {
      key: 'biografia',
      type: 'po-textarea',
      props: {
        label: 'Biografia',
        placeholder: 'Conte um pouco sobre você...',
        rows: 4,
        maxLength: 500,
        description: 'Escreva uma breve biografia (máximo 500 caracteres)'
      }
    },
    {
      key: 'newsletter',
      type: 'po-checkbox',
      props: {
        label: 'Aceito receber newsletter',
        description: 'Marque para receber nossas novidades por e-mail'
      }
    },
    {
      key: 'termos',
      type: 'po-checkbox',
      props: {
        label: 'Aceito os termos de uso',
        required: true,
        description: 'É obrigatório aceitar os termos para continuar'
      }
    },
    {
      key: 'periodoFerias',
      type: 'po-datepicker-range',
      props: {
        label: 'Período de Férias',
        required: false,
        description: 'Selecione o período desejado para suas férias'
      }
    },
    {
      key: 'tecnologias',
      type: 'po-multiselect',
      props: {
        label: 'Tecnologias',
        placeholder: 'Selecione as tecnologias que conhece',
        options: [
          { label: 'Angular', value: 'angular' },
          { label: 'React', value: 'react' },
          { label: 'Vue.js', value: 'vue' },
          { label: 'Node.js', value: 'node' },
          { label: 'Python', value: 'python' },
          { label: 'Java', value: 'java' },
          { label: 'C#', value: 'csharp' },
          { label: 'JavaScript', value: 'javascript' },
          { label: 'TypeScript', value: 'typescript' },
          { label: 'PHP', value: 'php' }
        ],
        description: 'Selecione múltiplas tecnologias que você conhece'
      }
    },
    {
      key: 'notificacoes',
      type: 'po-switch',
      props: {
        label: 'Ativar Notificações',
        description: 'Ative para receber notificações push'
      }
    }
  ];

  onSubmit() {
    if (this.form.valid) {
      console.log('Dados:', this.model);
    }
  }
}
```

### Template HTML

```html
<po-page-default p-title="{{ title }}">
  <form [formGroup]="form" (ngSubmit)="onSubmit()">
    <formly-form 
      [form]="form" 
      [fields]="fields" 
      [model]="model" 
      [options]="options">
    </formly-form>
    
    <div class="po-row">
      <po-button
        class="po-md-3"
        p-label="Submeter"
        p-type="primary"
        type="submit"
        [p-disabled]="!form.valid">
      </po-button>
      
      <po-button
        class="po-md-3 po-ml-1"
        p-label="Limpar"
        p-type="default"
        (p-click)="form.reset(); model = {}">
      </po-button>
    </div>
  </form>
</po-page-default>
```

### 🚀 Teste Online

Experimente a biblioteca em funcionamento no StackBlitz:

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/~/github.com/yuriduartetotvs/po-ui-json-forms?file=src/app/app.component.html)

**Link direto:** https://stackblitz.com/~/github.com/yuriduartetotvs/po-ui-json-forms?file=src/app/app.component.html

## 📋 Tipos de Campos Suportados

| Tipo | Componente PO-UI | Descrição |
|------|------------------|-----------|
| `po-input` | PoInputComponent | Campo de texto simples |
| `po-email` | PoEmailComponent | Campo de e-mail com validação |
| `po-password` | PoPasswordComponent | Campo de senha |
| `po-number` | PoNumberComponent | Campo numérico |
| `po-textarea` | PoTextareaComponent | Área de texto multilinha |
| `po-select` | PoSelectComponent | Lista suspensa de seleção única |
| `po-combo` | PoComboComponent | Campo de busca com autocomplete |
| `po-multiselect` | PoMultiselectComponent | Seleção múltipla |
| `po-radio-group` | PoRadioGroupComponent | Grupo de radio buttons |
| `po-checkbox-group` | PoCheckboxGroupComponent | Grupo de checkboxes |
| `po-checkbox` | PoCheckboxComponent | Checkbox individual |
| `po-datepicker` | PoDatepickerComponent | Seletor de data |
| `po-datepicker-range` | PoDatepickerRangeComponent | Seletor de período |
| `po-switch` | PoSwitchComponent | Botão liga/desliga |
| `po-lookup` | PoLookupComponent | Campo de busca avançada |

## 🎯 Exemplos de Configuração

### Campo de Input Simples
```typescript
{
  key: 'nome',
  type: 'po-input',
  props: {
    label: 'Nome',
    placeholder: 'Digite seu nome',
    required: true,
    maxLength: 100
  }
}
```

### Campo Select com Opções
```typescript
{
  key: 'categoria',
  type: 'po-select',
  props: {
    label: 'Categoria',
    required: true,
    options: [
      { label: 'Tecnologia', value: 'tech' },
      { label: 'Saúde', value: 'health' },
      { label: 'Educação', value: 'education' }
    ]
  }
}
```

### Campo com Validação Customizada
```typescript
{
  key: 'cpf',
  type: 'po-input',
  props: {
    label: 'CPF',
    mask: '999.999.999-99',
    required: true
  },
  validators: {
    validation: ['cpf']
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

**Desenvolvido para ajudar na produtividade de criação de formulario com JSON para PO-UI**