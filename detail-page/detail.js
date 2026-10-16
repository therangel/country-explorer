const containerCard = document.getElementById("container-card-detail")
const backPageButton = document.getElementById("back-page-btn")

const countryNameField = document.querySelector(".country-name-field")
const countryFlagField = document.querySelector(".country-flag-field")
const populationField = document.querySelector(".population-field")
const regionField = document.querySelector(".region-field")
const subRegionField = document.querySelector(".sub-region-field")
const capitalField = document.querySelector(".capital-field")
const currenciesField = document.querySelector(".currencies-field")
const languagesField = document.querySelector(".languages-field")

function getQueryParamers() {

    const params = new URLSearchParams(window.location.search)

    let decodedCurrencies = JSON.parse(params.get("currencies"))
    let decodedLanguages = JSON.parse(params.get("languages"))

    const formatedData = {
        name: params.get("name"),
        flag: params.get("flag"),
        population: params.get("population"),
        region: params.get("region"),
        subRegion: params.get("subRegion"),
        capital: params.get("capital"),
        currencies: decodedCurrencies,
        languages: decodedLanguages,

    }

    
    fillCard(formatedData) 
}


function fillCard(formatedData) {

    console.log(formatedData)

    countryNameField.textContent = formatedData.name
    countryFlagField.setAttribute("src", "." + formatedData.flag)
    populationField.textContent = formatedData.population
    regionField.textContent = formatedData.region
    subRegionField.textContent = formatedData.subRegion
    capitalField.textContent = formatedData.capital

    const currencies = formatedData.currencies
    const languages = formatedData.languages

    currencies.map((curr) => {
        const currency = document.createElement("span")

        currency.textContent = `${curr.name} ${curr.symbol}`

        currency.classList.add("currency")
        currenciesField.append(currency)

    })

    languages.map((lang) => {
        const language = document.createElement("span")
        language.classList.add("language")

        language.textContent = `${lang.name} - ${lang.nativeName} /`

        languagesField.append(language)

    })

}

function backButtonHandler() {
    console.log("funciona")
    window.location.href = "../index.html"
}

backPageButton.addEventListener("click", backButtonHandler)

getQueryParamers()