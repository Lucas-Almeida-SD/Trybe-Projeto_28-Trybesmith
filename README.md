# Projeto Trybe Smith

Esse projeto foi realizado para exercitar o que foi aprendido no Bloco 26 do Módulo de Back End do curso da [Trybe](https://www.betrybe.com/), no qual foi sobre `ORM (Object Relational Mapping)`, `JWT` e `testes de integração`.

Nesse projeto foi desenvolvida uma `REST API`, através do `Node.js`, `Express` e `TypeScript`, utilizando arquitetura de software `MSC`, tendo como sistema de gerenciamento de banco de dados o `MySQL`.

A API é um sistema de gerenciamento de itens de uma loja medieval, no qual é possível realizar operações de CRUD(create, read, update, delete).

Para verificar a funcionalidade da API, foram desenvolvidos testes de integração com as ferramentas `Mocha` e `Chai`, além de utilizar o próprio database para os testes.

## Tecnologias

  - Node.js
  - Express
  - TypeScript
  - MySQL
  - Mocha
  - Chai
  - Docker

## Como executar

Clone o projeto e acesse a pasta do mesmo.

```bash
$ git clone git@github.com:Lucas-Almeida-SD/Trybe-Projeto_28-Trybesmith.git

$ cd Trybe-Projeto_28-Trybesmith
```

Para iniciá-lo, siga os passos abaixo:

<details>
  <summary><strong>Com Docker</strong></summary>

  ```bash
  # Criar container
  $ docker-compose up -d

  # Abrir terminal interativo do container
  $ docker exec -it trybesmith bash

  # Instalar as dependências
  $ npm install

  # Iniciar o projeto
  $ npm start
  ```

  Para executar os testes, utilize o terminal interativo do container e insira o comando abaixo: 

  ```bash
  $ npm run test
  ```
</details>

<details>
  <summary><strong>Sem Docker</strong></summary>

  ```bash
  # Instalar as dependências
  $ npm install

  # Iniciar o projeto
  $ npm start
  ```

  Para executar os testes, utilize o terminal e insira o comando abaixo: 

  ```bash
  $ npm run test
  ```
</details>

O app estará disponível na porta `3000`.