const url = 'https://xc-ajax-demo.herokuapp.com/api/countries/';
collectCountries();
function getCountries(allCountries) {
    console.log(JSON.stringify(allCountries));
    let countries = document.getElementById('country');
    for (let i = 0; i < allCountries.length; i++) {
        let option = document.createElement('option');
        option.innerHTML = allCountries[i].name;
        option.value = allCountries[i].code;
        countries.options.add(option);
    }
}

function collectCountries() {
    fetch(url).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => {
        console.log(networkError.message);
    }).then(function (allCountries) {
        getCountries(allCountries);
    })
}
function getCountryCode() {
    let countriesList = document.getElementById('country');
    console.log(countriesList);
    let countryCode = countriesList.value;
    return countryCode;
}
function stateUrl() {
    return `https://xc-ajax-demo.herokuapp.com/api/countries/${getCountryCode()}/states/ `;
}
function stateDropdown(allStates) {
    console.log(JSON.stringify(allStates));
    let findStates = document.getElementById('states');
    findStates.innerHTML = '';
    statesList = [allStates.length];
    for (let j = 0; j < allStates.length; j++) {
        statesList[j] = allStates[j].name;
        statesList[j].value = allStates[j].code;
    }
    statesList.sort();
    for (let k = 0; k < statesList.length; k++) {
        let stateCreate = document.createElement('OPTION');
        stateCreate.innerHTML = statesList[k];
        findStates.options.add(stateCreate);
    }
}
function getStates() {

    fetch(stateUrl()).then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => {
        console.log(networkError.message);
    }).then(function (allStates) {
        stateDropdown(allStates);
    })
}




















