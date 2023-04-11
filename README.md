# <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Menu

O Menu é uma API com CRUD para gerenciar gerenciar um cardápio online. Isso foi feito utilizando o banco de dados MongoDB através do framework do Mongoose e JWT para autenticação do usuário.

-----

### <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Instalação:

Para instalar este projeto, é necessário ter o Node.js e o MongoDB instalados em seu sistema.

Clone este repositório: 

``` git clone https://github.com/WilliansonDantas/menu.git ```

Navegue até o diretório do projeto: 

```cd menu```

Instale as dependências: 

```npm install```

-----

### <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Com Docker:

Rode os serviços `node` e `db` com o comando `docker-compose up -d`.

  - Lembre-se de parar o `mongo` se estiver usando localmente na porta padrão (`27017`), ou adapte, caso queria fazer uso da aplicação em containers
  - Esses serviços irão inicializar um container chamado `menu` e outro chamado `menu_db`.
  - A partir daqui você pode rodar o container `menu` via CLI ou abri-lo no VS Code.

-----

### <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Uso:

Para iniciar o servidor, execute o seguinte comando:

```npm run dev```

Isso iniciará o servidor em 

```http://localhost:3001```.

Você pode acessar a documentação da API navegando até 

```http://localhost:3001/api-docs```

em seu navegador da web.

-----

### <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Dependências:

 - Express: um framework de aplicativo da web minimalista e flexível para Node.js.
 - Jsonwebtoken: uma implementação de token JSON Web para Node.js.
 - Mongoose: uma ferramenta de modelagem de objetos MongoDB projetada para funcionar em um ambiente assíncrono.

-----

### <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Dependências de desenvolvimento:

 - @types/express: definições TypeScript para o Express.
 - @types/jsonwebtoken: definições TypeScript para o Jsonwebtoken.
 - @types/mongoose: definições TypeScript para o Mongoose.
 - dotenv: um módulo sem dependência que carrega variáveis de ambiente de um arquivo .env para process.env.
 - ts-node: um mecanismo de execução e REPL TypeScript para Node.js.
 - ts-node-dev: uma ferramenta de desenvolvimento que executa um script TypeScript e o reinicia em caso de alterações de arquivos.
 - TypeScript: um superset do JavaScript que adiciona tipagem estática opcional à linguagem.
