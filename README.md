# Portfólio Pessoal - Acessibilidade Digital

Portfólio pessoal desenvolvido para a disciplina de **Programação Web**,
com o objetivo de apresentar minha trajetória acadêmica, projetos,
pesquisas e conhecimentos relacionados principalmente à **Acessibilidade
Digital** e **UI/UX**

O projeto também busca aplicar na própria interface princípios de
acessibilidade Web, considerando aspectos como contraste de cores,
navegação por teclado, estrutura semântica, responsividade e
preferências do usuário.

## Versões do projeto

  | Versão | Framework | Situação |
| -------- | ----- | ----------- |
| A        | Bootstrap 5 | Desenvolvido |
| B        | Tailwind CSS | Em desenvolvimento |


A proposta é manter conteúdo, funcionalidades e identidade visual
semelhantes nas duas implementações, possibilitando uma comparação entre
**Bootstrap** e **Tailwind CSS**.

## Tecnologias utilizadas

### Versão Bootstrap

-   HTML5
-   CSS3
-   JavaScript
-   Bootstrap 5
-   Bootstrap Icons

### Versão Tailwind

-   HTML5
-   CSS3
-   JavaScript
-   Tailwind CSS

## Estrutura do projeto

``` text
pagina-pessoal/
├── bootstrap/
│ ├── index.html
│ └── assets/
│ ├── css/
│ ├── js/
│ └── img/
├── tailwind/
│ ├── index.html
│ └── assets/
│ ├── css/
│ ├── js/
│ └── img/
├── index.html
├── README.md
└── LICENSE
```

### `bootstrap/`

Contém a primeira implementação da Página Pessoal, desenvolvida
utilizando **Bootstrap 5**.

### `tailwind/`

Contém a segunda implementação da Página Pessoal, desenvolvida
utilizando **Tailwind CSS**.

### `index.html`

Arquivo principal de cada versão. Contém a estrutura semântica da página
e as seções Início, Sobre mim, Acessibilidade, Projetos, Pesquisa,
Habilidades e Contato.

### `css/style.css`

Contém os estilos personalizados necessários para complementar o
framework utilizado em cada versão, incluindo cores, temas, espaçamentos
e componentes personalizados.

### `js/script.js`

Responsável pelos comportamentos interativos da página, incluindo:

-   alternância entre tema claro e escuro;
-   atualização do ícone correspondente ao tema;
-   atualização das informações acessíveis do botão;
-   armazenamento da preferência de tema do usuário.

### `img/`

Diretório destinado aos recursos visuais utilizados pelo portfólio,
incluindo a foto de perfil e imagens dos projetos.

## Acessibilidade

Como o portfólio apresenta trabalhos relacionados à acessibilidade
digital, a própria interface busca incorporar boas práticas de
desenvolvimento acessível.

Entre os recursos considerados estão:

-   HTML semântico;
-   contraste adequado entre texto e fundo;
-   suporte aos temas claro e escuro;
-   foco de teclado visível;
-   navegação por teclado;
-   link para pular diretamente ao conteúdo principal;
-   textos alternativos para imagens informativas;
-   uso adequado de atributos ARIA;
-   interface responsiva;
-   suporte à preferência `prefers-reduced-motion`;
-   informações que não dependem exclusivamente de cores.

## Responsividade

As duas versões serão desenvolvidas para funcionar adequadamente em
computadores, notebooks, tablets e smartphones.

Na primeira versão, a responsividade utiliza o sistema de **grid e
breakpoints do Bootstrap**.

Na segunda versão, o mesmo comportamento será reproduzido utilizando as
**classes responsivas do Tailwind CSS**.

## Temas

As duas implementações possuem suporte aos temas claro e escuro.

**Tema claro:** fundo predominantemente claro, textos escuros e cores de
destaque com contraste adequado.

**Tema escuro:** superfícies escuras, textos claros e cores de destaque
adaptadas para preservar contraste e legibilidade.

A preferência de tema será controlada utilizando JavaScript.

## Comparação dos frameworks

O **Bootstrap** oferece componentes e estilos previamente definidos,
além de um sistema de grid que facilita a construção rápida de
interfaces responsivas.

O **Tailwind CSS** adota uma abordagem baseada em classes utilitárias,
permitindo maior controle sobre a construção visual diretamente no HTML.

## Execução

Clone o repositório:

``` bash
git clone https://github.com/i-am-Gab/Portifolio-pessoal.git
```

Acesse a pasta:

``` bash
cd portfolio
```

Para acessar a versão Bootstrap:

``` text
bootstrap/index.html
```

Para acessar a versão Tailwind:

``` text
tailwind/index.html
```

## Objetivo acadêmico

Este projeto foi desenvolvido como atividade da disciplina de
**Programação Web**.

A proposta consiste no desenvolvimento de uma Página Pessoal em duas
versões distintas, utilizando **Bootstrap** e **Tailwind CSS**, além de
HTML, CSS e JavaScript.

Entre os requisitos estão:

-   funcionamento completo no navegador;
-   layout responsivo;
-   organização visual consistente;
-   boa experiência de navegação;
-   tema claro e escuro;
-   informações reais do estudante;
-   utilização de dois frameworks CSS diferentes.

Além dos requisitos da disciplina, o projeto incorpora práticas de
**acessibilidade Web**, alinhando a implementação do portfólio ao
próprio tema dos trabalhos apresentados.

## Autor

**Gabriel Aguiar Alves e Silva**

Sistemas de Informação\
Acessibilidade Digital • UI/UX • Qualidade de Software
