# Organiza Clinic

Organiza Clinic é uma aplicação web desenvolvida para gerenciar informações de médicos, pacientes, além de possibilitar a organização de agendas. A interface foi desenvolvida com React, o backend utiliza Node.js e o banco de dados é gerido pelo MySQL.

## Funcionalidades

- **Cadastro e edição de médicos e pacientes**: Permite que os usuários cadastrem e editem médicos e pacientes de forma eficiente.
- **Visualização de médicos e pacientes**: Exibe as listas de médicos e pacientes cadastrados na clínica.
- **Agenda**: Organize e visualize a agenda da clínica com facilidade.
- **Toast Notifications**: Notificações em tempo real usando `react-toastify` para alertar o usuário sobre ações realizadas na aplicação.
- **Integração com MySQL**: Todos os dados, como médicos, pacientes e consultas, são armazenados em um banco de dados MySQL.

## Tecnologias Utilizadas

### Frontend
- **React**: Biblioteca JavaScript para a construção da interface de usuário.
- **Styled-components**: Para estilização de componentes com JavaScript.
- **React Router**: Gerenciamento de rotas para navegação entre páginas.
- **React Toastify**: Para exibir notificações ao usuário.
- **Axios**: Para realizar requisições HTTP para a API.
- **FullCalendar**: Para gerenciar e visualizar a agenda da clínica.
- **DayPicker**: Para visualizar dias já cheios na página home.
- **Tailwind CSS**: Framework de CSS utilitário para estilização rápida e responsiva.
- **Material-UI**: Biblioteca de componentes de interface do usuário para React.

### Backend
- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para Node.js para facilitar a criação de APIs.
- **MySQL**: Sistema de gerenciamento de banco de dados relacional utilizado para armazenar os dados.
- **CORS**: Middleware que permite o compartilhamento de recursos entre diferentes origens.
- **Nodemon**: Ferramenta para reiniciar o servidor automaticamente durante o desenvolviemnto.

## Estrutura do Projeto

A estrutura do projeto é organizada em pastas de componentes e páginas no frontend, e a parte do backend em uma estrutura separada com Node.js e MySQL.

### Frontend
- **Components**: Contém componentes reutilizáveis como a barra de navegação (`Nav`).
- **Pages**: Contém as páginas principais da aplicação como `Home`, `Agenda`, `Pacientes`, `Medicos`, etc.
- **Css**: Arquivos relacionados ao estilo, como `GlobalStyle` e `Theme`.
- **Context**: Onde é gerenciado o estado global da aplicação, usando a Context API.

### Backend
- **Src/Server.js**: Arquivo principal que contém o código do servidor Node.js, utilizando o Express para as rotas da API.
- **Database**: Configurações e scripts relacionados ao banco de dados MySQL.

## Como Rodar

### 1. Configuração do Backend (Node.js + MySQL)

1. Clone este repositório: 
 ```bash
   git clone https://github.com/your-username/organiza-clinic.git
 ``` 

2. Navegue até a pasta do backend e instale as dependências:

 ```bash
    cd organiza-clinic/backend
    npm install
 ```

3. Crie o banco de dados no MySQL (ou utilize um banco existente) e configure as tabelas conforme necessário.

4. Inicie o servidor do backend:

 ```bash
    npm run dev
 ```

5. O servidor Node.js estará rodando em http://localhost:2000.

### 2. Configuração do Frontend (React)

1. Navegue até a pasta do frontend:
```bash
      cd OrganizaClinic/frontend
```

2. Instale as dependências:
```bash
   npm install
```

3. Inicie o servidor de desenvolvimento do React:
```bash
   npm start
```

4. O frontend estará disponível em http://localhost:3000.

## Estrutura de Rotas

### Frontend

- **/pacientes**: Exibe a lista de pacientes e possibilita o cadastro, edição e exclusão de pacientes.
   - **/pacientes/cadastrarpaciente**: Página para cadastro de um novo paciente.
   - **/paciente/editarpaciente**: Página para edição de informações de um paciente.
- **/medicos**: Exibe a lista de médicos e possibilita o cadastro, edição e exclusão de médicos.
   - **/medicos/cadastrarmedico**: Página para cadastro de um novo médico.
   - **/medicos/editarmedico**: Página para a edição de informações de um médico.
- **/agenda**: Exibe a agenda de compromissos.
- **/home**: Página inicial com informações gerais.

### Backend

- **/** → Rota inicial da API.
- **/addNewPatient**: Adiciona um novo paciente.
- **/getPacientes**: Retorna a lista de pacientes.
- **/addNewDoctor**: Adiciona um novo médico.
- **/getDoctors**: Retorna a lista de médicos.
- **/addNewAppointment**: Cria um novo agendamento.
- **/getAppointments**: Retorna a lista de agendamentos.
- **/deleteDoctor**: Remove um médico cadastrado.
- **/deletePatient**: Remove um paciente cadastrado.
- **/updateDoctor**: Atualiza informações de um médico.
- **/updatePatient**: Atualiza informações de um paciente.
- **/updateAppointment**: Atualiza um agendamento.
- **/deleteEvent**: Remove um evento/agendamento.