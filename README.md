# 10News

Uma aplicação de notícias construída em **Next.js**, o projeto foi elaborado como solução para o teste técnico da **Investidor10**.

Neste repositório está localizado o front-end do projeto, como requisitos do desafio foram utilizados **Next.js** e **Tailwind CSS**.

## Pré-requisitos

- Git
- Node 20+

## Como iniciar

Antes de começar, siga o tutorial de instalação do back-end [10News API](https://github.com/rodrigofontesdev/investidor10-api).

Clone o repositório em um novo diretório:

```sh
git clone git@github.com:rodrigofontesdev/investidor10.git
```

```sh
cd investidor10
```

Instale as dependências do projeto:

```sh
npm install
```

Inicie o Next.js:

```sh
npm run dev
```

## Funcionalidades

- [x] Visualizar todas as notícias na página inicial
- [x] Fazer a paginação de resultados
- [x] Exibir as notícias por categoria
- [x] Acessar o conteúdo da notícia
- [x] Utilizar a aplicação em qualquer tamanho de dispositivo

## Considerações

Para a construção de alguns componentes foi utilizado o padrão **Compound Pattern**, ideal para componentes que são dependentes de outros e muitas das vezes compartilhan informações entre si. Exemplos, componente de menu, campo de formulário, etc.

Para a paginação foi escolhido o conceito de "infinite scroll", o hook `useInfiniteQuery()` do React Query permite manipular os dados e parametros da página de maneira simples.

Criei alguns custom hooks para separar a camada de lógica do JSX, outro benefício da abordagem é o reaproveitamento de código.

A escolha do React Query para trabalhar com comunicação assincrona se deve aos benefícios que ele oferece, como gerenciamento de dados simplificado, cache das requisições e poder trabalhar com interfaces optimisticas.

## Construído com

- Next.js
- Tailwind CSS
- TanStack Query (React Query)
