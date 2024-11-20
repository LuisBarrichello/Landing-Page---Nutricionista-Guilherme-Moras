# 🌐 Landing Page - Nutricionista Guilherme Morás

Este repositório contém o código e a documentação para a landing page desenvolvida para Guilherme Morás.

## 📋 Objetivo do Projeto

A landing page foi criada com o objetivo de gerar leads, promover os serviços do cliente e ter uma forma acessível e marcar presença no digial. A página é otimizada para SEO, performance em dispositivos móveis.

## 🛠️ Status do Projeto

- **Status**: Em andamento

## 🖼️ Layout inicial
![img_page](./src//assets/images/page-preview.png)

  
### 📋 Tarefas:

#### **Etapa 1: Planejamento e Preparação**
- [x] Revisar o layout no Figma e identificar todas as seções e elementos necessários.  
- [x] Configurar o projeto com React e Vite.  
- [x] Instalar e configurar Tailwind CSS.  
- [x] Configurar ESLint e Prettier para manter o código organizado.  
- [x] Criar a estrutura de pastas do projeto (`/assets`, `/components`, `/styles`).  

#### **Etapa 2: Desenvolvimento**
- [x] Criar o HTML básico no componente `App.jsx`.  
- [ ] Criar componentes menores e reutilizaveis(botões, headers)
- [ ] Dividir a página em componentes React baseados nas seções do layout (Ex.: `Header`, `HeroSection`, `Services`, `Footer`).  
- [ ] Estilizar cada componente usando classes do Tailwind CSS.  
- [ ] Garantir a responsividade para diferentes tamanhos de tela.  
- [ ] Implementar animações suaves (se necessário, usando Tailwind ou Framer Motion).  
- [ ] Configurar a funcionalidade do formulário de leads, se aplicável.  

#### **Etapa 3: Testes e Revisões**
- [ ] Testar a responsividade da página em dispositivos móveis, tablets e desktops.  
- [ ] Validar a funcionalidade de formulários e interações.  
- [ ] Revisar textos e substituí-los pelos fornecidos pelo cliente.  
- [ ] Confirmar que todas as imagens estão otimizadas e posicionadas corretamente.  

#### **Etapa 4: Revisão Final e Deploy**
- [ ] Solicitar feedback do cliente sobre a versão final.  
- [ ] Fazer ajustes com base no feedback do cliente.  
- [ ] Configurar e realizar o deploy na Vercel ou Netlify.  
- [ ] Validar o funcionamento da página no ambiente de produção.  
- [ ] Compartilhar o link final da landing page com o cliente.  

---

## 💻 Tecnologias Usadas

A landing page foi construída utilizando as seguintes tecnologias:

- **HTML5** – Estrutura básica da página
- **CSS** – Estilização e design responsivo
- **JavaScript** – Funcionalidades interativas
- **Frameworks/Libraries**:
  - TailwindCSS
  - React, React Router, PropTypes

## 🌟 Características 

- Design responsivo para visualização em dispositivos móveis, tablets e desktop
- [Incluir se houver] Formulário de captura de leads com integração de [Google Sheets, Mailchimp, etc.]
- [Incluir se houver] Animações suaves
- [Incluir se houver] Otimização para SEO (títulos, meta tags, etc.)
- [Incluir se houver] Performance otimizada (carregamento rápido, imagens comprimidas, etc.)

## 📂 Estrutura do Projeto

A estrutura base do projeto está organizada da seguinte forma:

```
/landingpage-react
├── /public
│   ├── index.html            # HTML principal da aplicação
│   ├── /assets               # Imagens, fontes e outros arquivos estáticos
│   └── favicon.ico           # Ícone da página
├── /src
│   ├── /assets               # Imagens e arquivos estáticos usados no JS
|   |   └── /styles           # Arquivos de estilo CSS ou SASS
│   │       └── global.css       # Estilo global da aplicação
│   ├── /components           # Componentes React reutilizáveis
├── .gitignore                # Arquivos e pastas ignoradas pelo Git
├── package.json              # Dependências do projeto e scripts
└── README.md                 # Documentação do projeto
```