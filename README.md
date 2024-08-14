<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Consumer - A Graphql Angular Project</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
        }
        h1 {
            color: #dd0031;
        }
        h2 {
            color: #333;
        }
        ul {
            list-style-type: disc;
            padding-left: 20px;
        }
        a {
            color: #1a73e8;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        .logo-container {
            display: flex;
            gap: 20px;
            margin-bottom: 20px;
        }
        .logo-container img {
            width: 100px;
            height: auto;
        }
    </style>
</head>
<body>

    <div class="logo-container">
        <img src="https://angular.io/assets/images/logos/angular/angular.png" alt="Angular Logo">
        <img src="https://www.apollographql.com/apollo-home-hero-logo.png" alt="Apollo Server Logo">
        <img src="https://graphql.org/img/logo.svg" alt="GraphQL Logo">
    </div>

    <h1>Login Consumer - A Graphql Angular Project</h1>

    <p>Este projeto foi feito para consumir a API que também é encontrada em meu perfil (<a href="https://github.com/Colherinhas/User-Auth-Nestjs-Graphql" target="_blank">https://github.com/Colherinhas/User-Auth-Nestjs-Graphql</a>), utilizando o <a href="https://github.com/angular/angular-cli" target="_blank">Angular CLI</a> versão 18.1.3 e o <a href="https://www.apollographql.com/docs/apollo-server/" target="_blank">Apollo Server</a> para as requisições GraphQL.</p>

    <h2>Ligar o projeto</h2>

    <p>Primeiro, você precisará do <a href="https://www.npmjs.com/" target="_blank">Node Package Manager</a> (npm) para instalar o projeto em seu computador. Também será necessário o <a href="https://git-scm.com/" target="_blank">Git</a> para cloná-lo ao seu diretório local.</p>
    <p>Este projeto é um consumer de outra <a href="https://github.com/Colherinhas/User-Auth-Nestjs-Graphql" target="_blank">API</a>, e para ela funcionar corretamente, será necessário que o outro projeto também esteja sendo executado como back-end.</p>
    <p>Para iniciar o projeto, digite <code>npm run main</code> para rodar a lista de comandos de instalação necessária para o projeto. Os comandos que serão rodados podem ser vistos na seção script do arquivo <code>package.json</code>.</p>
    <p>Iniciado, uma mensagem escrita "Application bundle generation complete" e abaixo dela, o link para acessá-la (link default: <a href="http://localhost:4200/" target="_blank">http://localhost:4200/</a>).</p>
    <p>Após a primeira inicialização, você poderá inicializar o projeto mais rapidamente com <code>ng serve</code> ou <code>npm start</code>. A aplicação automaticamente será reinicializada na mudança de quaisquer arquivos presentes no projeto em seu computador.</p>

    <h2>Informações sobre a estrutura do projeto à nível de código</h2>

    <ul>
        <li>Utiliza o <a href="https://github.com/angular/angular-cli" target="_blank">Angular CLI</a> versão 18.1.3.</li>
        <li>Apesar da versão do Angular CLI, o projeto foi modularizado e seus componentes não são do tipo <a href="https://v17.angular.io/guide/standalone-components" target="_blank">stand-alone</a> da versão 17 do Angular.</li>
        <li>Utiliza SCSS para a estilização de componentes.</li>
        <li>Utiliza o RouterModule para navegação entre telas.</li>
        <li>Algumas páginas HTML necessitam dos módulos FormsModule e CommonModule para funcionamento correto.</li>
        <li>Ele foi feito para consumir uma API projetada em <a href="https://graphql.org/" target="_blank">GraphQL</a> e utiliza o <a href="https://www.apollographql.com/docs/apollo-server/" target="_blank">Apollo Server</a> para lidar com as requisições.</li>
        <li>Para modificação da URL de consumo, basta modificar o arquivo presente em <code>graphql.module.ts</code>.</li>
        <li>O projeto é separado em módulos, que são importados com suas injeções à <code>app.module.ts</code>.</li>
        <li>O módulo do GraphQL pode ser visto como o serviço do Apollo Server, com as configurações necessárias para autenticação e o que se é enviado ao context do GraphQL.</li>
    </ul>

</body>
</html>
