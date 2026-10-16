# 🌍 Country Explorer

A web application to explore countries around the world. Search by name, filter by region and population, and open a details page for each country.

Built as part of the **Front-End Web Development** course on **IBM SkillsBuild**.

<!-- Add a screenshot or GIF of the app here -->
<!-- ![Country Explorer preview](./assets/preview.png) -->

<!-- Once deployed, add the live demo link: -->
<!-- 🔗 **Live demo:** https://therangel.github.io/country-explorer/ -->

## 📖 About

Country Explorer displays countries as cards and lets users narrow down the results by combining multiple filters. Each card leads to a dedicated details page for that country. The goal of the project was to practice front-end fundamentals: semantic HTML, responsive CSS, and vanilla JavaScript for DOM manipulation, with no frameworks or external libraries.

> **Note:** The data in this project is static and may be outdated or inaccurate. It is used for demonstration purposes only.

## ✨ Features

- 🔎 **Search by country name**, with input validation and an error message for invalid entries
- 🗺️ **Filter by region:** Africa, America, Asia, Europe, and Oceania
- 👥 **Filter by population**, capped at 1.5 billion, with a validation message for values above the limit
- 🃏 **Dynamic country cards** rendered with JavaScript
- 📄 **Country details page** with more information about the selected country
- ➕ **"Show More" button** to load additional countries on demand
- 📱 Responsive layout

## 🛠️ Built With

- **HTML5**: semantic structure and accessible form labels
- **CSS3**: global styles and component styles split across files
- **JavaScript (ES6+)**: filtering logic, validation, and rendering

## 📁 Project Structure

```
country-explorer/
├── assets/        # Images and icons
├── detail-page/   # Country details page  
├── data.js        # Country data
├── global.css     # Global styles
├── styles.css     # Application styles
├── script.js      # Filters, validation, and rendering logic
├── index.html     # Main page
└── README.md
```

## 🚀 Getting Started

No installation or build step is required.

1. Clone the repository:
```bash
   git clone https://github.com/therangel/country-explorer.git
```
2. Navigate to the project folder:
```bash
   cd country-explorer
```
3. Open `index.html` in your browser, or use the **Live Server** extension in VS Code.

## 📚 What I Learned

- Manipulating the DOM and creating elements dynamically
- Combining multiple filters (name, region, and population) on the same dataset
- Validating form inputs on the client side
- Building a multi-page flow, from the list view to a country details page
- Passing data between pages with URL query parameters and reading them with `URLSearchParams`
- Organizing CSS into global and component-specific files
- Writing accessible forms with properly linked labels and inputs
- Version control with Git and GitHub

## 🔮 Future Improvements

- [ ] Fetch up-to-date data from a public API (e.g., REST Countries) instead of using static local data
- [ ] Add sorting options (by name or population)
- [ ] Add a dark mode
- [ ] Deploy with GitHub Pages

## 👤 Author

**Matheus Rangel**

- GitHub: [@therangel](https://github.com/therangel)

---

This is an educational project developed during the Front-End Web Development course on IBM SkillsBuild.