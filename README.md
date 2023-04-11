# <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Menu

O Menu é uma API com CRUD para gerenciar um cardápio online. Isso foi feito utilizando o banco de dados MongoDB através do framework do Mongoose e JWT para autenticação do usuário.

-----

### <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Motivo da escolha das ferramentas:

- Typescript principalmente por seu recurso de tipagem, o que auxilia na redução de erros;
- NodeJS por ser versátil e por permitir escrever aplicativos em JavaScript;
- Express por ser um framework de aplicativos web para NodeJS e desenvolvimento de aplicativos web;
- MongoDB por ser um dos bancos de dados não relacionais amplamente utilizado em aplicativos web;
- Mongoose por fornecer uma interface orientada a objetos para trabalhar com o MongoDB;
- JWT: JSON Web Tokens por permitir criar um sistema seguro de autenticação;

Além dos fatos mencionados anteriormente, a escolha se deu pela solicitação do projeto e por serem ferramentas que possuo conhecimento prévio e utilizei na construção de outros projetos similares a este, exemplo:
- [Car Shop](https://github.com/WilliansonDantas/project-car-shop)

-----

### <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Instalação:

Para instalar este projeto, é necessário ter o Node.js e o MongoDB instalados em seu sistema.

Clone este repositório: 

``` git clone https://github.com/WilliansonDantas/menu.git ```

Navegue até o diretório do projeto: 

```cd menu```

Instale as dependências: 

```npm install```

Criei um arquivo .env, utilizando as informações contidas no arquivo

```.env-example```

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

 - Express: um framework de aplicativo da web minimalista e flexível para Node.js;
 - Jsonwebtoken: uma implementação de token JSON Web para Node.js;
 - Mongoose: uma ferramenta de modelagem de objetos MongoDB projetada para funcionar em um ambiente assíncrono;

-----

### <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Dependências de desenvolvimento:

 - @types/express: definições TypeScript para o Express;
 - @types/jsonwebtoken: definições TypeScript para o Jsonwebtoken;
 - @types/mongoose: definições TypeScript para o Mongoose;
 - dotenv: um módulo sem dependência que carrega variáveis de ambiente de um arquivo .env para process.env;
 - ts-node: um mecanismo de execução e REPL TypeScript para Node.js;
 - ts-node-dev: uma ferramenta de desenvolvimento que executa um script TypeScript e o reinicia em caso de alterações de arquivos;
 - TypeScript: um superset do JavaScript que adiciona tipagem estática opcional à linguagem.

### <img height="20" src="https://raw.githubusercontent.com/innng/innng/master/assets/soulgem-sayaka.gif"/> Ferramentas & Metodologias Utilizadas:

- [Node.js](https://nodejs.org/en/);
- [Express.js](https://expressjs.com/);
- [MongoDB](https://www.mongodb.com/home);
- [Mongoose(ODM)](https://mongoosejs.com/);
- [Docker](https://www.docker.com/);
- [TypeScript](https://www.typescriptlang.org/);
