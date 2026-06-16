# Especificação de Requisitos de Software (SRS)
**Projeto:** Plataforma RH
**Versão:** 1.0
**Data:** 16 de Junho de 2026

## 1. Introdução
### 1.1 Propósito
Este documento descreve os requisitos funcionais e não funcionais para o Módulo de Currículos e Vagas da Plataforma de RH. O objetivo deste módulo é permitir que candidatos gerenciem suas informações profissionais e que a administração visualize esses dados.

### 1.2 Escopo
O sistema compreende o desenvolvimento de uma interface frontend em Angular integrada a um backend simulado (json-server). As funcionalidades incluem o CRUD completo de currículos, vinculação de dados por ID de usuário e interface administrativa para gestão.

---

## 2. Descrição Geral
O sistema é dividido em duas perspectivas principais de usabilidade:
* **Visão do Candidato:** Uma interface focada na experiência do usuário (UX) onde o profissional pode verificar se possui um currículo ativo, criá-lo do zero, editá-lo ou excluí-lo.
* **Painel Administrativo:** Uma interface estilo *Master-Detail* voltada para os recrutadores da empresa. Permite visualizar o total de talentos, buscar informações detalhadas de contato (e-mail, telefone) e atualizar ou remover perfis de forma centralizada e ágil.

---

## 3. Requisitos do Sistema 

### 3.1 Requisitos Funcionais (RF)
* **RF-001 - Cadastrar Currículo:** O sistema deve permitir que novos candidatos cadastrem suas informações profissionais (Nome, E-mail, Telefone, Habilidades, Formação Acadêmica e Experiência) através de um formulário.
* **RF-002 - Listar Currículos (Candidato):** O sistema deve exibir os dados do currículo do candidato caso ele já possua um cadastro ativo.
* **RF-003 - Listar Todos os Currículos (Admin):** O painel administrativo deve listar todos os candidatos salvos no banco de dados e exibir um contador com o total de registros.
* **RF-004 - Visualizar Currículo Único:** Ao selecionar um candidato na lista administrativa, o formulário lateral deve ser automaticamente preenchido com as informações detalhadas do perfil selecionado.
* **RF-005 - Atualizar Currículo:** O sistema deve permitir a alteração de qualquer dado de um currículo existente, tanto pela rota de edição do candidato quanto pelo painel do administrador.
* **RF-006 - Excluir Currículo:** O candidato ou o administrador devem ter a permissão de deletar um registro de currículo permanentemente do sistema.
* **RF-007 - Tratamento de Estado Vazio:** A interface do candidato deve exibir uma tela de incentivo ("Você ainda não tem um currículo cadastrado") caso o usuário não possua dados no sistema.

### 3.2 Requisitos Não-Funcionais (RNF)
* **RNF-001 - Arquitetura de Componentes:** O frontend deve ser desenvolvido utilizando Angular (padrão Componentes Standalone) para modularidade e facilidade de manutenção.
* **RNF-002 - Interface de Usuário (UI):** A interface gráfica deve utilizar a biblioteca Angular Material, garantindo componentes visuais modernos, padronizados e com transições suaves.
* **RNF-003 - Responsividade:** O layout deve ser adaptável (Responsivo) usando CSS Grid e Flexbox, colapsando o layout em uma única coluna em dispositivos móveis (telas menores que 960px).
* **RNF-004 - Persistência Simulada:** As operações de escrita e leitura devem persistir os dados em formato JSON em um arquivo local através do `json-server`.
* **RNF-005 - Preservação de Formatação:** A exibição dos blocos de texto longo (Formação e Experiência) deve respeitar as quebras de linha enviadas pelo usuário (`white-space: pre-wrap`).

---

## 4. Interface de Dados e Modelagem do Sistema

### 4.1 Estrutura do Modelo de Dados
A entidade core do sistema é a classe `Curriculo`, estruturada com os seguintes atributos:
* `id` (number): Identificador único do registro.
* `nome` (string): Nome completo do candidato.
* `telefone` (number/string): Número de contato.
* `email` (string): Endereço eletrônico.
* `experiencia` (string): Histórico profissional.
* `formacao` (string): Histórico acadêmico.
* `skills` (string): Lista de competências técnicas.

### 4.2 Mapeamento de Dados (Camada de Serviço)
A classe de modelo implementa dois métodos cruciais para a comunicação com a API:
* `toMap()`: Converte o objeto TypeScript em uma estrutura chave-valor JSON aceita pelo servidor.
* `fromMap(map)`: Transforma a resposta bruta da API de volta em uma instância tipada da classe `Curriculo`.

---

## 5. Critérios de Aceitação

1.  **Operação CRUD:** É possível criar, ler, atualizar e excluir um registro no `db.json` através da interface?
2.  **Navegação:** As rotas configuradas levam aos componentes corretos sem erros de console?
3.  **Feedback:** O usuário recebe uma confirmação (ex: mensagens de `alert` ou `MatSnackBar`) ao salvar, atualizar ou excluir um currículo?
4.  **Consistência:** Os dados exibidos na listagem correspondem exatamente ao que está no backend simulado?

---

## 6. Configuração do Ambiente

### 6.1 Pré-requisitos
* Node.js instalado (versão LTS recomendada).
* Angular CLI instalado globalmente (`npm install -g @angular/cli`).

### 6.2 Passo a Passo para Execução

1. **Instalar as dependências do projeto:**
   ```bash
   npm install
