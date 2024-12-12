## GameS

## Descrição Geral
Este projeto é um site para jogos que possui funcionalidades como sistema de login e um CRUD para gerenciamento de tickets. Após fazer o login, o usuário pode enviar relatórios de possíveis bugs em jogos e monitorar o estado do ticket.

## Usuário Alvo
Qualquer jogador que deseja reportar ou denunciar algum problema sobre um jogo.

## Detalhamento Técnico
A arquitetura do projeto consiste em diversos componentes que interagem entre si para proporcionar uma experiência fluida ao usuário.

### Componentes de Interação
- Sistema de login
- CRUD para gerenciamento de tickets

## Desafios e Soluções
Um dos principais desafios foi a questão da versão do Angular. Ao criar o projeto em uma versão mais nova, os arquivos `app-routing.module.ts` e `app.module.ts` não existiam, sendo substituídos por `app.routes.ts` e `app.config.ts`. Após pesquisa, descobri que era possível criar a mesma estrutura utilizando `ng new --no-standalone`.

Outro desafio encontrado foi no componente de login, o objetivo era que o usuário precisasse inserir usuário e senha para se conectar, atualizando diretamente a navbar. No entanto, ao usar `localStorage`, o estado da aplicação não atualizava automaticamente. A solução foi utilizar `BehaviorSubject`, que notifica outros componentes sobre as mudanças de estado. Isso foi implementado em um serviço de autenticação localizado em `src/app/app-core/services/autenticação.service.ts`.

## Resultados e Melhorias Futuras
Existem problemas que podem ser melhorados, como:
- No sistema de login, se o usuário tiver o caminho, ele pode acessar sem autenticação.
- No CRUD, a parte do painel de usuário permite criar, editar e excluir tickets, mas falta um sentido real de aplicação. Seria interessante adicionar um ID de protocolo com números aleatórios, um modal para visualizar o conteúdo do ticket e estilizar toda a parte do painel para se adaptar ao estilo do site.
