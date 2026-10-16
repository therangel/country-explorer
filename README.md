# 🌍 Country Explorer

Aplicação web para explorar informações sobre países do mundo, com busca por nome, filtro por região e filtro por população.

Projeto desenvolvido durante o curso **Front-End Web Development** da plataforma **IBM SkillsBuild**.

<!-- Adicione aqui um print ou GIF da aplicação -->
<!-- ![Country Explorer](./assets/preview.png) -->

## 📋 Sobre o projeto

O Country Explorer exibe uma lista de países em cards e permite refinar os resultados com filtros combinados. O objetivo foi praticar os fundamentos do desenvolvimento front-end: HTML semântico, CSS responsivo e JavaScript puro para manipulação do DOM, sem frameworks ou bibliotecas externas.

## ✨ Funcionalidades

- 🔎 **Busca por nome** do país, com mensagem de validação para entradas inválidas
- 🗺️ **Filtro por região**: África, América, Ásia, Europe e Oceania
- 👥 **Filtro por população**, com limite máximo de 1,5 bilhão e mensagem de erro para valores acima disso
- 🃏 **Cards de países** gerados dinamicamente via JavaScript
- ➕ **Botão "Show More"** para carregar mais países aos poucos
- 📱 Layout responsivo

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (ES6+)

## 📁 Estrutura do projeto

```
country-explorer/
├── assets/        # Imagens e ícones
├── pages/         # Páginas adicionais
├── data.js        # Dados dos países
├── global.css     # Estilos globais / reset
├── styles.css     # Estilos da aplicação
├── script.js      # Lógica: filtros, renderização e paginação
├── index.html     # Página principal
└── README.md
```

## 🚀 Como executar

Não é necessário instalar nada.

1. Clone o repositório:
```bash
   git clone https://github.com/therangel/country-explorer.git
```
2. Entre na pasta do projeto:
```bash
   cd country-explorer
```
3. Abra o `index.html` no navegador (ou use a extensão **Live Server** do VS Code).

## 📚 O que aprendi

- Manipulação do DOM e criação dinâmica de elementos
- Filtragem combinada de dados (nome + região + população)
- Validação de formulários no front-end
- Organização de arquivos CSS (global vs. específico)
- Boas práticas de versionamento com Git e GitHub

## 🔮 Melhorias futuras

- [ ] Consumir uma API (ex.: REST Countries) em vez de dados locais
- [ ] Página de detalhes de cada país
- [ ] Ordenação dos resultados (nome, população)
- [ ] Modo escuro
- [ ] Publicar com GitHub Pages

## 👤 Autor

**Matheus Rangel**

- GitHub: [@therangel](https://github.com/therangel)

---
Projeto educacional desenvolvido no curso Front-End Web Development • IBM SkillsBuild