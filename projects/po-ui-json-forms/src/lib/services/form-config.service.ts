import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

export interface FormTemplate {
  name: string;
  description: string;
  fields: FormlyFieldConfig[];
}

@Injectable({
  providedIn: 'root'
})
export class FormConfigService {

  // Templates pré-definidos
  private templates: FormTemplate[] = [
    {
      name: 'Cadastro de Usuário',
      description: 'Formulário básico para cadastro de usuários',
      fields: [
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
          key: 'telefone',
          type: 'po-input',
          props: {
            label: 'Telefone',
            placeholder: '(11) 99999-9999',
            mask: '(99) 99999-9999'
          }
        }
      ]
    },
    {
      name: 'Formulário de Contato',
      description: 'Formulário para contato/suporte',
      fields: [
        {
          key: 'nome',
          type: 'po-input',
          props: {
            label: 'Nome',
            required: true
          }
        },
        {
          key: 'email',
          type: 'po-email',
          props: {
            label: 'E-mail',
            required: true
          }
        },
        {
          key: 'assunto',
          type: 'po-select',
          props: {
            label: 'Assunto',
            required: true,
            options: [
              { label: 'Dúvida', value: 'duvida' },
              { label: 'Sugestão', value: 'sugestao' },
              { label: 'Reclamação', value: 'reclamacao' },
              { label: 'Elogio', value: 'elogio' }
            ]
          }
        },
        {
          key: 'mensagem',
          type: 'po-textarea',
          props: {
            label: 'Mensagem',
            required: true,
            rows: 5,
            maxLength: 1000
          }
        }
      ]
    },
    {
      name: 'Pesquisa de Satisfação',
      description: 'Formulário para pesquisa de satisfação',
      fields: [
        {
          key: 'nome',
          type: 'po-input',
          props: {
            label: 'Nome (opcional)',
            placeholder: 'Digite seu nome'
          }
        },
        {
          key: 'satisfacao',
          type: 'po-radio-group',
          props: {
            label: 'Como você avalia nosso serviço?',
            required: true,
            options: [
              { label: 'Muito Satisfeito', value: '5' },
              { label: 'Satisfeito', value: '4' },
              { label: 'Neutro', value: '3' },
              { label: 'Insatisfeito', value: '2' },
              { label: 'Muito Insatisfeito', value: '1' }
            ]
          }
        },
        {
          key: 'aspectos',
          type: 'po-checkbox-group',
          props: {
            label: 'Quais aspectos você mais valoriza?',
            options: [
              { label: 'Atendimento', value: 'atendimento' },
              { label: 'Qualidade', value: 'qualidade' },
              { label: 'Preço', value: 'preco' },
              { label: 'Rapidez', value: 'rapidez' },
              { label: 'Facilidade de uso', value: 'facilidade' }
            ],
            columns: 2
          }
        },
        {
          key: 'recomendaria',
          type: 'po-radio-group',
          props: {
            label: 'Você recomendaria nosso serviço?',
            required: true,
            options: [
              { label: 'Sim', value: 'sim' },
              { label: 'Não', value: 'nao' },
              { label: 'Talvez', value: 'talvez' }
            ]
          }
        },
        {
          key: 'comentarios',
          type: 'po-textarea',
          props: {
            label: 'Comentários adicionais',
            placeholder: 'Deixe aqui seus comentários...',
            rows: 4
          }
        }
      ]
    },
    {
      name: 'Agendamento de Reunião',
      description: 'Formulário para agendamento com novos componentes',
      fields: [
        {
          key: 'titulo',
          type: 'po-input',
          props: {
            label: 'Título da Reunião',
            placeholder: 'Digite o título da reunião',
            required: true
          }
        },
        {
          key: 'data',
          type: 'po-datepicker',
          props: {
            label: 'Data da Reunião',
            required: true,
            format: 'dd/MM/yyyy'
          }
        },
        {
          key: 'periodo_ferias',
          type: 'po-datepicker-range',
          props: {
            label: 'Período de Férias',
            required: false,
            clean: true,
            locale: 'pt-BR',
            help: 'Selecione o período de férias desejado'
          }
        },
        {
          key: 'participantes',
          type: 'po-multiselect',
          props: {
            label: 'Participantes',
            placeholder: 'Selecione os participantes',
            required: true,
            options: [
              { label: 'João Silva', value: 'joao.silva' },
              { label: 'Maria Santos', value: 'maria.santos' },
              { label: 'Pedro Oliveira', value: 'pedro.oliveira' },
              { label: 'Ana Costa', value: 'ana.costa' },
              { label: 'Carlos Ferreira', value: 'carlos.ferreira' }
            ],
            sort: true,
            hideSearch: false,
            placeholderSearch: 'Buscar participante...',
            autoHeight: true
          }
        },
        {
          key: 'sala',
          type: 'po-lookup',
          props: {
            label: 'Sala de Reunião',
            placeholder: 'Buscar sala',
            required: true,
            fieldLabel: 'nome',
            fieldValue: 'id',
            columns: [
              { property: 'id', label: 'ID' },
              { property: 'nome', label: 'Nome da Sala' },
              { property: 'capacidade', label: 'Capacidade' }
            ],
            autoHeight: true,
            infiniteScroll: true,
            clean: true
          }
        },
        {
          key: 'notificar',
          type: 'po-switch',
          props: {
            label: 'Enviar notificações',
            labelOn: 'Sim',
            labelOff: 'Não',
            formatModel: true,
            hideLabelStatus: false,
            labelPosition: 'right'
          }
        },
        {
          key: 'observacoes',
          type: 'po-textarea',
          props: {
            label: 'Observações',
            placeholder: 'Observações adicionais...',
            rows: 3
          }
        }
      ]
    }
  ];

  constructor() { }

  // Obter todos os templates
  getTemplates(): FormTemplate[] {
    return this.templates;
  }

  // Obter template por nome
  getTemplate(name: string): FormTemplate | undefined {
    return this.templates.find(template => template.name === name);
  }

  // Validar configuração JSON
  validateFieldConfig(config: any): boolean {
    if (!Array.isArray(config)) return false;
    
    return config.every(field => {
      return field.key && 
             field.type && 
             field.props && 
             typeof field.key === 'string' &&
             typeof field.type === 'string';
    });
  }

  // Gerar configuração JSON de exemplo
  getExampleConfig(): FormlyFieldConfig[] {
    return [
      {
        key: 'exemplo',
        type: 'po-input',
        props: {
          label: 'Campo de Exemplo',
          placeholder: 'Digite algo...',
          required: true,
          description: 'Este é um campo de exemplo'
        }
      }
    ];
  }

  // Tipos de campo disponíveis
  getAvailableFieldTypes() {
    return [
      {
        type: 'po-input',
        name: 'Campo de Texto',
        description: 'Campo para entrada de texto simples',
        props: ['label', 'placeholder', 'required', 'disabled', 'readonly', 'mask', 'maxLength', 'minLength']
      },
      {
        type: 'po-email',
        name: 'Campo de E-mail',
        description: 'Campo para entrada de e-mail com validação',
        props: ['label', 'placeholder', 'required', 'disabled', 'readonly']
      },
      {
        type: 'po-password',
        name: 'Campo de Senha',
        description: 'Campo para entrada de senha',
        props: ['label', 'placeholder', 'required', 'disabled', 'readonly', 'hidePasswordPeek']
      },
      {
        type: 'po-number',
        name: 'Campo Numérico',
        description: 'Campo para entrada de números',
        props: ['label', 'placeholder', 'required', 'disabled', 'readonly', 'min', 'max', 'step', 'decimals']
      },
      {
        type: 'po-textarea',
        name: 'Área de Texto',
        description: 'Campo para entrada de texto longo',
        props: ['label', 'placeholder', 'required', 'disabled', 'readonly', 'rows', 'maxLength', 'autoResize']
      },
      {
        type: 'po-select',
        name: 'Lista de Seleção',
        description: 'Campo para seleção de opções',
        props: ['label', 'placeholder', 'required', 'disabled', 'readonly', 'options', 'sort', 'filter']
      },
      {
        type: 'po-datepicker',
        name: 'Seletor de Data',
        description: 'Campo para seleção de data',
        props: ['label', 'placeholder', 'required', 'disabled', 'readonly', 'format', 'minDate', 'maxDate']
      },
      {
        type: 'po-datepicker-range',
        name: 'Seletor de Período',
        description: 'Campo para seleção de período entre datas',
        props: [
          'label', 'required', 'disabled', 'readonly', 'help', 'additionalHelpTooltip',
          'appendInBody', 'autoFocus', 'clean', 'endDate', 'errorLimit', 'fieldErrorMessage',
          'labelTextWrap', 'literals', 'locale', 'maxDate', 'minDate', 'noAutocomplete',
          'optional', 'helper', 'showRequired', 'size', 'startDate', 'onAdditionalHelp',
          'onKeydown', 'onChange'
        ]
      },
      {
        type: 'po-checkbox-group',
        name: 'Grupo de Checkboxes',
        description: 'Grupo de opções de múltipla escolha',
        props: ['label', 'required', 'disabled', 'readonly', 'options', 'columns']
      },
      {
        type: 'po-radio-group',
        name: 'Grupo de Radio Buttons',
        description: 'Grupo de opções de escolha única',
        props: ['label', 'required', 'disabled', 'readonly', 'options', 'columns']
      },
      {
        type: 'po-lookup',
        name: 'Lookup',
        description: 'Campo de busca com modal de seleção',
        props: [
          'label', 'placeholder', 'required', 'disabled', 'help', 'columns', 
          'fieldLabel', 'fieldValue', 'filterService', 'multiple', 'spacing',
          'additionalHelpTooltip', 'advancedFilters', 'appendInBody', 'autoFocus',
          'autoHeight', 'clean', 'errorLimit', 'fieldErrorMessage', 'fieldFormat',
          'filterParams', 'hideColumnsManager', 'infiniteScroll', 'labelTextWrap',
          'literals', 'name', 'noAutocomplete', 'optional', 'helper', 'showRequired',
          'size', 'textWrap', 'virtualScroll', 'onAdditionalHelp', 'onChange',
          'onChangeVisibleColumns', 'onRestoreColumnManager', 'onKeydown', 'onError', 'onSelected'
        ]
      },
      {
        type: 'po-multiselect',
        name: 'Seleção Múltipla',
        description: 'Campo para seleção de múltiplas opções',
        props: [
          'label', 'placeholder', 'required', 'disabled', 'help', 'options', 
          'sort', 'hideSelectAll', 'literals', 'additionalHelpTooltip', 
          'appendInBody', 'autoFocus', 'autoHeight', 'debounceTime', 'errorLimit',
          'fieldErrorMessage', 'fieldLabel', 'fieldValue', 'filterMode', 
          'filterService', 'hideSearch', 'labelTextWrap', 'listboxControlPosition',
          'name', 'optional', 'placeholderSearch', 'helper', 'showRequired', 
          'size', 'onAdditionalHelp', 'onBlur', 'onChange', 'onKeydown'
        ]
      },
      {
        type: 'po-switch',
        name: 'Interruptor',
        description: 'Campo de alternância (liga/desliga)',
        props: [
          'label', 'disabled', 'help', 'labelOff', 'labelOn', 'size',
          'additionalHelpTooltip', 'appendInBody', 'errorLimit', 'fieldErrorMessage',
          'formatModel', 'hideLabelStatus', 'invalidValue', 'labelPosition',
          'labelTextWrap', 'name', 'helper', 'onAdditionalHelp', 'onChange', 'onKeydown'
        ]
      }
    ];
  }
}