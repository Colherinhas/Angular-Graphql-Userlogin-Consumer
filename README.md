# Login Consumer - A Graphql Angular Project

Este projeto foi feito para consumir a api que também é encontrada em meu perfil (https://github.com/Colherinhas/User-Auth-Nestjs-Graphql), utilizando o [Angular CLI](https://github.com/angular/angular-cli) versão 18.1.3 e o [Apollo Server](https://www.apollographql.com/docs/apollo-server/) para as requisições graphql.

## Ligar o projeto

Primeiro, você precisará do [Node Package Manager](https://www.npmjs.com/) (npm) para instalar o projeto em seu computador. Também será necessário o [Git](https://git-scm.com/) para cloná-lo ao seu diretório local.
Este projeto é um consumer de outra [api](https://github.com/Colherinhas/User-Auth-Nestjs-Graphql), e para ela funcionar corretamente, será necessário que o outro projeto também esteja sendo executado como back-end.
Para iniciar o projeto, digite `npm run main` para rodar a lista de comandos de instalação necessária para o projeto. Os comandos que serão rodados podem ser vistos na seção script do arquivo package.json.
Iniciado, uma mensagem escrita "Application bundle generation complete" e abaixo dela, o link para acessá-la (link default: http://localhost:4200/).
Após a primeira inicialização, você poderá inicializar o projeto mais rapidamente com `ng serve` ou `npm start`. A aplicação automaticamente será reinicializada na mudança de quaisquer arquivos presentes no projeto em seu computador.

## Informações sobre a estrutura do projeto à nível de código

• Utiliza o [Angular CLI](https://github.com/angular/angular-cli) versão 18.1.3.
• Apesar da versão do Angular CLI, o projeto foi modularizado e seus componentes não são do tipo [stand-alone](https://v17.angular.io/guide/standalone-components) da versão 17 do angular.
• Utiliza SCSS para a estilização de componentes.
• Utiliza o RouterModule para navegação entre telas.
• Algumas páginas HTML necessitam dos módulos FormsModule e CommonModule para funcionamento correto.
• Ele foi feito para consumir uma Api projetada em [Graphql](https://graphql.org/) e utiliza o [Apollo-Server](https://www.apollographql.com/docs/apollo-server/) para lidar com as requisições.
• Para modificação da url de consumo, basta modificar o arquivo presente em graphql.module.ts
• O projeto é separado em Modules, que são importados com suas injeções à app.module.ts
• O Módulo do graphql pode ser visto como o serviço do apollo server, com as configurações necessárias para autenticação e o que se é enviado ao context do graphql.
