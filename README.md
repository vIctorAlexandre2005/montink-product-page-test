# 🛒 Desafio Técnico - Página de Produto com Consulta de Frete (CEP)

Este projeto foi desenvolvido como parte de um **teste técnico Front-End**. A proposta era construir uma página de produto semelhante às encontradas em e-commerces como **Mercado Livre**, **Shopee** e **Amazon**, com foco em usabilidade, persistência de dados e responsividade.

---

## ✅ Funcionalidades Implementadas

- 📸 **Galeria de Imagens do Produto**
  - Imagem principal ocupa 35% da tela.
  - Miniaturas abaixo da imagem principal.
  - Ao clicar em uma miniatura, a imagem principal é atualizada dinamicamente.

- 🏷️ **Título e Preço do Produto**
  - Informações organizadas no layout.

- 🎨 **Seletores de Variantes (Tamanho e Cor)**
  - Campos gerados dinamicamente a partir de um array/objeto.
  - Nenhuma variante é hardcoded.

- 📦 **Consulta de Entrega por CEP**
  - Campo para digitação do CEP.
  - Consulta à API pública [ViaCEP](https://viacep.com.br/).
  - Exibição do endereço completo, cidade, bairro e UF.
  - Mensagens de erro para CEPs inválidos.
  - Exibe "Frete grátis" ao encontrar um endereço válido.

- 💾 **Persistência de Dados**
  - Todos os dados preenchidos pelo usuário são **salvos no localStorage**.
  - Persistência com tempo de expiração de **15 minutos**.
  - Se a página for recarregada nesse intervalo, os dados são mantidos.

---

## 🧪 Testes Automatizados com Cypress

- Os testes cobrem:
  - Consulta de CEPs válidos e inválidos
  - Persistência de dados no localStorage
  - Validação visual da interface
- Uso de interceptação com `cy.intercept` para simular chamadas à API do ViaCEP.
- Testes descritos em `tests/cep.cy.ts`.

---

## 🛠️ Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Cypress** (e2e)
- **Axios**
- **Context API**
- **LocalStorage com TTL**
- **Flexbox / Responsividade**

---
## 🚀 Como Rodar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/montink-product-page-test.git
cd montink-product-page-test

```
### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Execute o projeto localmente
```bash
npm run dev
# ou
yarn dev
```

## 👨‍💻 Autor

Desenvolvido por Victor Alexandre.

[LinkedIn](https://www.linkedin.com/in/victoralexandredasilvamarins) • [GitHub](https://github.com/vIctorAlexandre20005)

---
