# Login Consumer - A Graphql Angular Project

![Angular](https://angular.io/assets/images/logos/angular/angular.svg)
![Apollo Server](https://www.apollographql.com/docs/apollo-server/assets/apollo-server-social.png)
![GraphQL](https://graphql.org/img/logo.svg)

Este projeto foi feito para consumir a API que também é encontrada em meu perfil ([User-Auth-Nestjs-Graphql](https://github.com/Colherinhas/User-Auth-Nestjs-Graphql)), utilizando o [Angular CLI](https://github.com/angular/angular-cli) versão 18.1.3 e o [Apollo Server](https://www.apollographql.com/docs/apollo-server/) para as requisições GraphQL.

## Ligar o projeto

Primeiro, você precisará do [Node Package Manager](https://www.npmjs.com/) (npm) para instalar o projeto em seu computador. Também será necessário o [Git](https://git-scm.com/) para cloná-lo ao seu diretório local.  
Este projeto é um consumer de outra [API](https://github.com/Colherinhas/User-Auth-Nestjs-Graphql), e para que funcione corretamente, será necessário que o outro projeto também esteja sendo executado como back-end.

Para iniciar o projeto, digite `npm run main` para rodar a lista de comandos de instalação necessária para o projeto. Os comandos que serão rodados podem ser vistos na seção `scripts` do arquivo `package.json`.  
Iniciado, uma mensagem escrita "Application bundle generation complete" aparecerá, e abaixo dela, o link para acessá-la (link padrão: [http://localhost:4200/](http://localhost:4200/)).

Após a primeira inicialização, você poderá inicializar o projeto mais rapidamente com `ng serve` ou `npm start`. A aplicação será automaticamente reinicializada na mudança de quaisquer arquivos presentes no projeto em seu computador.

## Informações sobre a estrutura do projeto a nível de código

- Utiliza o [Angular CLI](https://github.com/angular/angular-cli) versão 18.1.3.
- Apesar da versão do Angular CLI, o projeto foi modularizado e seus componentes não são do tipo [stand-alone](https://v17.angular.io/guide/standalone-components) da versão 17 do Angular.
- Utiliza SCSS para a estilização de componentes.
- Utiliza o `RouterModule` para navegação entre telas.
- Algumas páginas HTML necessitam dos módulos `FormsModule` e `CommonModule` para funcionamento correto.
- Foi feito para consumir uma API projetada em [GraphQL](https://graphql.org/) e utiliza o [Apollo Server](https://www.apollographql.com/docs/apollo-server/) para lidar com as requisições.
- Para modificação da URL de consumo, basta modificar o arquivo presente em `graphql.module.ts`.
- O projeto é separado em módulos, que são importados com suas injeções no `app.module.ts`.
- O módulo do GraphQL pode ser visto como o serviço do Apollo Server, com as configurações necessárias para autenticação e o que é enviado ao contexto do GraphQL.
