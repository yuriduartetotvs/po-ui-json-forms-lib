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