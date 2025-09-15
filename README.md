# webjump-frontend

Este projeto é uma aplicação frontend desenvolvida para avaliar conhecimentos e habilidades em HTML, CSS e JavaScript, utilizando um conjunto moderno de tecnologias para a construção de interfaces de usuário dinâmicas e reativas.

## Tecnologias Utilizadas

O projeto faz uso das seguintes tecnologias e bibliotecas:

| Categoria        | Tecnologia/Biblioteca |
| :--------------- | :-------------------- |
| **Framework/Biblioteca** | React 18              |
| **Linguagem**    | TypeScript, HTML, JavaScript |
| **Gerenciamento de Estado** | MobX, MobX-React, MobX-React-Lite |
| **Estilização**  | Styled-Components, @emotion/react, @emotion/styled, @material-ui/core, @material-ui/lab, @mui/material, bootstrap, reactstrap |
| **Roteamento**   | React Router DOM      |
| **Requisições HTTP** | Axios                 |
| **GraphQL**      | @apollo/client, graphql |
| **Utilitários**  | ajv, connect, cors, serve-static, react-toastify |

## Funcionalidades

- **Gerenciamento de Estado**: Utiliza MobX para um gerenciamento de estado eficiente, especialmente para filtragem de dados.
- **Componentização**: Implementa Styled-Components para a criação de componentes estilizados e reutilizáveis.
- **Temas e Estilos**: Suporte a alteração de temas e estilos através de Context Providers.
- **Interface Moderna**: Construído com React 18 para uma experiência de usuário moderna e reativa.

## Como Executar o Projeto

Para configurar e executar o projeto localmente, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o Node.js e o npm (Node Package Manager) instalados em sua máquina.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/jfermartins/webjump-frontend.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd webjump-frontend
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```

### Execução

1. Inicie o servidor de desenvolvimento do frontend:
   ```bash
   npm start
   ```
   O frontend estará disponível em `http://localhost:3000`.

2. **API Mock**: Uma API mock estará disponível na porta `8888` para simular as requisições de backend.

## Estrutura do Projeto

```
webjump-frontend/
├── public/                 # Arquivos estáticos
├── src/                    # Código fonte da aplicação
│   ├── assets/             # Imagens, ícones, etc.
│   ├── components/         # Componentes React reutilizáveis
│   ├── contexts/           # Contextos para gerenciamento de estado/temas
│   ├── pages/              # Páginas da aplicação
│   ├── services/           # Serviços de API, GraphQL
│   ├── stores/             # Stores MobX
│   ├── styles/             # Estilos globais, temas
│   ├── App.tsx             # Componente principal da aplicação
│   └── index.tsx           # Ponto de entrada da aplicação
├── build/                  # Saída da build de produção
├── .gitignore              # Arquivos e diretórios a serem ignorados pelo Git
├── app.js                  # Arquivo principal (pode ser o ponto de entrada do servidor de desenvolvimento ou de uma API mock)
├── package.json            # Metadados do projeto e dependências
├── package-lock.json       # Bloqueio de versões de dependências
├── tsconfig.json           # Configurações do TypeScript
└── README.md               # Este arquivo
```


## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Autor

**Jane Fernanda Martins**

[Linkedin](https://linkedin.com/in/jfermartins)
