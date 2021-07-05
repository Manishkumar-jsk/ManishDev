'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountriesData = function(country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.eu/rest/v2/capital/${country}`);
    request.send();
    request.addEventListener('load', function() {
        const [data] = JSON.parse(this.responseText);
        console.log(data);
        renderData(data);
    })
}
const renderData = function(data, className = '') {
    const html = `<article class = "country ${className}">
                    <img class = "country__img" src = "${data.flag}">
                    <div class = "country__data">
                    <h3 class = "country__name" > ${data.name} </h3>  
                    <h4 class = "country__region"> ${data.region}</h4>
                    <p class = "country__row" > <span> </span>${(data.population / 100000).toFixed(1)} People</p>
                    <p class = "country__row" > <span> 🗣️ </span>${data.languages[0].name}</p>
                    <p class = "country__row" > <span> 💰 </span>${data.currencies[0].name}</p>
                    </div>  
                    </article >
                    `
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};
const getNeighbourCountriesData = function(country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    request.send();
    request.addEventListener('load', function() {
        const [data] = JSON.parse(this.responseText);
        renderData(data);

        //neighbour country
        const [neighbour] = data.borders;
        console.log(neighbour);
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.eu/rest/v2/alpha/${neighbour}`);
        request2.send();
        request2.addEventListener('load', function() {
            const data2 = JSON.parse(this.responseText);
            console.log(data2);
            renderData(data2, 'neighbour');
        });
    })
}
getNeighbourCountriesData('portugal')
    //using promises
    /*const getCountriesData = function(country) {
        fetch(`https://restcountries.eu/rest/v2/name/${country}`)
            .then((response) => {
                console.log(response);
                if (!response.ok)
                    throw new Error(`Country not found ${response.status}`);
                return response.json()
            })
            .then(data => {
                renderData(data[0])
                const neighbour1 = data[0].borders[2];
                console.log(neighbour1);
                if (!neighbour1) throw new Error('Neighbour not found!');
                return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour1}`)
            })
            .then(response => {
                if (!response.ok)
                    throw new Error(`Country not found ${response.status}`);
                return response.json()
            })
            .then((data) => renderData(data, 'neighbour'))
            .catch(err => alert(err))
            .finally(() => {
                countriesContainer.style.opacity = 1
            })
    };
    btn.addEventListener('click', function() {
            getCountriesData("Bharat");
        })
        /*const getCountriesData = function(country) {
            const request = new XMLHttpRequest();
            request.open('GET', `https://restcountries.eu/rest/v2/capital/${country}`);
            request.send();
            request.addEventListener('load', function() {
                const [data] = JSON.parse(this.responseText);
                console.log(data);
                renderData(data);
            })
        }*/
    /*const whereAmI = function() {
        getPosition().then(pos => {
                const { latitude: lat, longitude: lng } = pos.coords;
                return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
            })
            .then(function(response) {
                console.log(response);
                return response.json()
            })
            .then(function(data) {
                console.log(data);
                console.log(data.country);
                return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
            }).then(function(response) {
                return response.json()
            }).then(data => {
                renderData(data[0]);
            })
    }*/
    /*const getPosition = function() {
        return new Promise(function(resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        })
    };
    /*btn.addEventListener('click', whereAmI());*/
    //creating usingasyn and await
    /*const whereAmI = async function(country) {
        const pos = await getPosition();
        const coords = pos.coords;
        const { latitude: lat, longitude: lng } = coords;
        const res1 = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        const data1 = await res1.json();
        console.log(data1);
        const res = await fetch(`https://restcountries.eu/rest/v2/name/${data1.country}`)
        const data = await res.json();

    }
    whereAmI("usa")*/