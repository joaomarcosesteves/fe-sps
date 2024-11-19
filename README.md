# Frontend - CRUD de Usuários com React.js

Este é o frontend para o gerenciamento de usuários do projeto CRUD. Ele foi desenvolvido em **React.js** e utiliza **Tailwind CSS** e **ShadCN** para estilização. A aplicação consome a API desenvolvida no backend do projeto.

---

## **Pré-requisitos**

Antes de iniciar, certifique-se de ter instalado:

- **Node.js** (v12 ou superior)
- **npm** (ou **yarn**)

---

## **Instruções de Configuração**

1. **Clone o Repositório**:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_REPOSITORIO>
   ```

2. **Instale as Dependências**:
   Execute o seguinte comando para instalar as dependências necessárias:
   ```bash
   npm install
   ```

3. **Configure o Tailwind CSS**:
   Verifique se o arquivo `tailwind.config.js` contém a configuração correta:
   ```javascript
   module.exports = {
     content: ['./src/**/*.{js,jsx}', './node_modules/@shadcn/ui/**/*.{js,jsx}'],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```

4. **Inicie o Servidor de Desenvolvimento**:
   Para iniciar o servidor de desenvolvimento, execute:
   ```bash
   npm start
   ```

   A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

---


## **Funcionalidades**

### **Login**
- Acesse a página de login em [http://localhost:3000/login](http://localhost:3000/login).
- Faça login com um usuário existente (ex.: `admin@spsgroup.com.br`) e receba um token JWT que será salvo nos cookies para autenticação.

### **Gerenciamento de Usuários**
Após o login, acesse a página principal em [http://localhost:3000/home](http://localhost:3000/home) para:
- **Criar Usuários**: Use o formulário para adicionar novos usuários.
- **Editar Usuários**: Clique em "Edit" na tabela para abrir um modal com os dados do usuário e editá-los.
- **Deletar Usuários**: Clique em "Delete" na tabela para excluir um usuário.

---

## **Recursos Utilizados**
- **React.js**: Biblioteca para a construção de interfaces.
- **React Router DOM**: Gerenciamento de rotas na aplicação.
- **Axios**: Biblioteca para chamadas HTTP.
- **Tailwind CSS**: Framework CSS para estilização.
- **ShadCN**: Componentes pré-estilizados para integração com Tailwind.
- **js-cookie**: Gerenciamento de cookies para armazenar o token JWT.

---


## **Contato**
Caso tenha dúvidas ou sugestões, entre em contato:
- **Email**: jmepereira2010@gmail.com
- **LinkedIn**: [João Marcos Esteves](https://www.linkedin.com/in/joao-marcos-esteves-pereira-a5b2b317a/)

---

