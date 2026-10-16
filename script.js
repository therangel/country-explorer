const containerCards = document.querySelector(".country-cards-container")

const inputCountry = document.getElementById("country-name-input")
const inputRegion = document.getElementById("region-input")
const inputPopulation = document.getElementById("population-input")

const showMoreButton = document.querySelector(".show-more-btn")
const invalidCountryName = document.getElementById("invalid-country_name")
const invalidPopulation = document.getElementById("invalid-population")

const filters = {
    countryName: "",
    region: "",
    population: 0
}

let formatedData = data
let totalCardsOnDisplay = 10

function populateCountryCards() {

    if(formatedData.length === 0) {
        containerCards.innerHTML = "No country found matching the search criteria."
        return
    } 

    if(formatedData.length < 10){
        showMoreButton.style.display = "none"
    } else {
        showMoreButton.style.display = "block"
    }

    containerCards.innerHTML = ""
   
    const loopCounter = formatedData.slice(0, totalCardsOnDisplay)

    loopCounter.forEach((country)  => {

        const card = document.createElement("div")
        card.classList.add("country-card")

        const cardFlag = document.createElement("img")
        const cardTitle = document.createElement("h3")
        const cardStats = document.createElement("div")
        cardStats.classList.add("card-stats")

        const cardPopulation = document.createElement("p")
        const cardCapital = document.createElement("p")
        const cardRegion = document.createElement("p")

        cardFlag.setAttribute("src", country.flags.svg)
        cardTitle.textContent = country.name.official
        
        
        cardPopulation.innerHTML = `<b>Population:</b> ${country.population}`
        cardCapital.innerHTML = `<b>Capital:</b> ${country.capital}`
        cardRegion.innerHTML = `<b>Region:</b> ${country.region}`

        cardStats.append(cardPopulation, cardCapital, cardRegion)

        card.append(cardFlag, cardTitle, cardStats)

        containerCards.append(card)

        card.addEventListener("click", () => getFormattedNames(country))
        
    })
}

function getFormattedNames(country) {

      const dataCountry = {
        name: country.name.official,
        flag: country.flags.svg,
        population: country.population,
        region: country.region,
        subRegion: country.subregion,
        capital: country.capital,
        // Transforma os objetos/arrays em texto simples (JSON) de forma direta
        currencies: JSON.stringify(country.currencies),
        languages: JSON.stringify(country.languages)

        
    };

    const queryString = "?" + new URLSearchParams(dataCountry).toString();
 
    // let queryString = 
    // "?name="+encodeURIComponent(country.name.official)+
    // "&flag="+encodeURIComponent(country.flags.svg)+
    // "&population="+country.population+
    // "&region="+country.region+
    // "&subRegion="+encodeURIComponent(country.subregion)+
    // "&capital="+ encodeURIComponent(country.capital)+
    // "&currencies="+encodeURIComponent(country.currencies)+
    // "&languages="+encodeURIComponent(country.languages);
    // console.log(queryString)
    
    openDetailsPage(queryString)
}

function openDetailsPage(queryString) {

    window.location.href = "./detail-page/detail.html" + queryString
}

function validationData(inputValue) {

    let regex = new RegExp(/^[a-zA-Z -]*$/)

    if(!regex.test(inputValue)) { 
       return false
    } else {
       return true
    }
}


function applyFilters() {
    
    formatedData = data

    if(filters.countryName !== "") {

        formatedData = formatedData.filter((country) => {
            return country.name.official.toLowerCase().includes(filters.countryName) || country.name.common.toLowerCase().includes(filters.countryName)
        })
    } 

    if(filters.region !== "") {
        formatedData = formatedData.filter((country) => {
            return country.region.toLowerCase().includes(filters.region)
        })
    }

    if(filters.population !== ""){
        formatedData = formatedData.filter((country) => {

            const countryPopulation = country.population

            return filters.population <= countryPopulation
           
        })
    }


    populateCountryCards()
}

function showMoreHandle() {
  
    if(totalCardsOnDisplay  === formatedData.length){
        showMoreButton.textContent = "Show more"
        totalCardsOnDisplay = 10
    } else{
        showMoreButton.textContent = "Show less"
        totalCardsOnDisplay = formatedData.length
    }
    
    populateCountryCards()
}


inputCountry.addEventListener("input", (e) => {

    invalidCountryName.classList.remove("active")

    const inputValue = e.target.value
    const formatedValue = inputValue.toLowerCase().trim()

    if(!validationData(formatedValue)) {
        invalidCountryName.classList.add("active")
        return 
    } 

    filters.countryName = formatedValue
    applyFilters()
})

inputRegion.addEventListener("change", (e) => {

    const inputValue = e.target.value
   
    const formatedValue = inputValue.toLowerCase().trim()

    if(!validationData(formatedValue)) {
        return 
    } 

    filters.region = formatedValue
    applyFilters()  
})


const LIMITE_CARACTERES = 10;

inputPopulation.addEventListener("input", (e) => {

    invalidPopulation.classList.remove("active")

    const inputValue = e.target.value
    let formatedValue = inputValue.toLowerCase().trim()

    if (formatedValue.length > LIMITE_CARACTERES) {

        e.target.value = formatedValue.slice(0, LIMITE_CARACTERES);
        formatedValue = e.target.value; 
    }

    if(Number(formatedValue) > 1500000000) {
        invalidPopulation.classList.add("active")
        return

    }

    filters.population= formatedValue
    applyFilters()  
})



showMoreButton.addEventListener("click", showMoreHandle)

populateCountryCards()