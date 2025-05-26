![image](https://github.com/user-attachments/assets/b3942c2e-ceb4-44d6-9608-3a2709c7e1b2)


# Sistema de Login e Cadastro - FormLoginDark

Este projeto implementa/simula um sistema de autenticação de usuários com funcionalidades de login e cadastro, utilizando uma interface com tema escuro. Ele simula um backend com `json-server` para persistência de dados de usuários.

## Funcionalidades

*   **Cadastro de Usuários:** Permite que novos usuários criem uma conta fornecendo email, nome de usuário e senha.
*   **Login de Usuários:** Autentica usuários existentes com base em seu nome de usuário e senha.
*   **Validação de Formulários:** Utiliza `react-hook-form` e `yup` para validar os dados inseridos nos formulários de login e cadastro, fornecendo feedback ao usuário.
*   **Listagem de Usuários:** Após o login, o usuário é redirecionado para uma página que exibe a lista de todos os usuários cadastrados (funcionalidade de exemplo).
*   **Navegação:** Utiliza `react-router-dom` para gerenciar a navegação entre as telas de login, cadastro e listagem de usuários.
*   **Feedback Visual:** Emprega `react-toastify` para exibir notificações (toasts) sobre o sucesso ou falha das operações (ex: login bem-sucedido, erro de credenciais, usuário criado).
*   **Simulação de Backend:** Usa `json-server` para simular uma API RESTful, armazenando e recuperando dados de usuários a partir de um arquivo `db.json`.
*   **Logout:** Permite que o usuário encerre sua sessão.

## Tecnologias Utilizadas

*   **React**: Biblioteca principal para construção da interface do usuário.
*   **TypeScript**: Superset do JavaScript para adicionar tipagem estática ao código.
*   **Vite**: Ferramenta de build moderna e rápida para desenvolvimento frontend.
*   **CSS Modules**: Para estilização escopada dos componentes, evitando conflitos de nomes de classes CSS.
*   **React Hook Form**: Para gerenciamento eficiente e flexível de formulários.
*   **Yup**: Para validação de schemas de dados dos formulários.
*   **React Router DOM**: Para gerenciamento de rotas na aplicação single-page.
*   **React Toastify**: Para exibir notificações (toasts) de forma elegante.
*   **JSON Server**: Para criar rapidamente um mock de API RESTful para desenvolvimento e testes.

## Como Executar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/IsaaczZj/FormLoginDark.git 
    cd FormLoginDark
    ```
2.  **Instale as dependências:**
    ```bash
    npm install
    ```
    ou se você utiliza Yarn:
    ```bash
    yarn install
    ```

3.  **Execute o servidor de desenvolvimento do Vite (frontend):**
    Em um terminal, execute:
    ```bash
    npm run dev
    ```
    ou se você utiliza Yarn:
    ```bash
    yarn dev
    ```

4.  **Execute o JSON Server (backend mock):**
    Em **outro terminal**, na raiz do projeto, execute:
    ```bash
    npm run server
    ```
    Isso iniciará o `json-server` monitorando o arquivo `db.json` (geralmente na porta 3000).

5.  Abra o navegador no endereço fornecido pelo Vite (geralmente `http://localhost:5173`).

## Estrutura do Projeto

*   `src/`: Contém todo o código fonte da aplicação.
    *   `assets/`: Arquivos estáticos como imagens e SVGs.
    *   `Components/`: Componentes React reutilizáveis.
        *   `Button/`: Componente de botão customizado.
        *   `Input/`: Componente de input customizado com label e tratamento de erro.
        *   `CardUser/`: Componente para exibir informações de um usuário.
    *   `Pages/`: Componentes que representam as diferentes telas/rotas da aplicação.
        *   `Forms/`
            *   `FormLogin/`: Tela e lógica de login.
            *   `FormRegister/`: Tela e lógica de cadastro.
        *   `Users/`: Tela para listar usuários.
    *   `schemas/`: Schemas de validação Yup.
        *   `userSchema.ts`: Schema para o formulário de cadastro e login.
    *   `Types/`: Definições de tipos TypeScript.
        *   `user.ts`: Tipos relacionados a usuários.
    *   `App.tsx`: Componente raiz onde as rotas são configuradas.
    *   `main.tsx`: Ponto de entrada da aplicação React.
    *   `index.css`: Estilos globais (se houver).
*   `public/`: Arquivos estáticos que são servidos diretamente pelo Vite.
*   `db.json`: Arquivo utilizado pelo `json-server` para armazenar os dados dos usuários.
*   `index.html`: Arquivo HTML principal da aplicação.
*   `vite.config.ts`: Arquivo de configuração para o Vite.
*   `tsconfig.json` / `tsconfig.node.json`: Arquivos de configuração do TypeScript.
*   `package.json`: Define as informações do projeto, scripts (como `dev`, `build`, `server`) e dependências.
