import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

export interface PoUiFormlyConfig {
    types: any[];
}

/**
 * Helper para configurar o Formly com componentes PO-UI
 * Utilize este helper no seu app.config.ts ou AppModule
 */
@Injectable()
export class PoUiFormlySetup {

    /**
     * Retorna a configuração completa para usar com FormlyModule.forRoot()
     */
    static getFormlyConfig(): PoUiFormlyConfig {
        return {
            types: [
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
            ]
        };
    }

    /**
     * Exemplos de configuração de campos
     */
    static getExampleFields(): FormlyFieldConfig[] {
        return [
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
    }
}