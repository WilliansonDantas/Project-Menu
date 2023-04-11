# <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Menu

O Menu é uma API com CRUD para gerenciar um cardápio online. Isso foi feito utilizando o banco de dados MongoDB através do framework do Mongoose e JWT para autenticação do usuário.

-----

### <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Motivo da escolha das ferramentas:

- Typescript por ser uma linguagem de programação que adiciona recursos de tipagem estática, interfaces e recursos de programação orientada a objetos que ajudam a minimizar erros antes mesmo de compilar o código
- NodeJS por ser versátil e por permitir escrever aplicativos em JavaScript
- Express por ser um framework de aplicativos web para NodeJS que fornece uma variedade de recursos para facilitar o desenvolvimento de aplicativos web - - MongoDB por ser amplamente utilizado em aplicativos web para armazenar e gerenciar dados de forma eficiente
- Mongoose por fornecer uma interface orientada a objetos para trabalhar com o MongoDB, permitindo que os desenvolvedores definam esquemas de dados e manipulem dados de forma fácil e intuitiva
- JWT: JSON Web Tokens (JWT) por tornar mais fácil criar um sistema seguro de autenticação e autorização

Além dos fatos mencionados a escolha também se deu pela solicitação do projeto e por serem ferramentas que possuo conhecimento prévio e utilizei na construção de outros projetos similares a este.

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

### <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Docker:

Rode o serviço `db` com o comando `docker-compose up -d`.

  - Lembre-se de parar o `mongo` se estiver usando localmente na porta padrão (`27017`)
  - Esse serviço irá inicializar um container chamado `menu_db`

-----

### <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Uso:

Para iniciar o servidor, execute o seguinte comando:

```npm run dev```

Isso iniciará o servidor em 

```http://localhost:3001```

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

### <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Ferramentas & Metodologias Utilizadas:

- [Node.js](https://nodejs.org/en/);
- [Express.js](https://expressjs.com/);
- [MongoDB](https://www.mongodb.com/home);
- [Mongoose(ODM)](https://mongoosejs.com/);
- [Docker](https://www.docker.com/);
- [TypeScript](https://www.typescriptlang.org/);
