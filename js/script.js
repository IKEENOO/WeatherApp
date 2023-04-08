import conditions from './condition.js';
console.log(conditions);

const apiKey = 'ca5bb123e4124264b06173914230704';

const header = document.querySelector('#header');
const form = document.querySelector('#form');
const input = document.querySelector('#input__city');

function removeCard() {
    const prevCard = document.querySelector('.card');
    if(prevCard) document.querySelector('.card').remove();
}

function showError(errorMassage) {
    const html = `<div style="text-align: center; padding-bottom: 40px" class="card">${errorMassage}</div>`;
    header.insertAdjacentHTML('afterend', html);
}

function showCard({name, country, temp, condition, icon}) {
    const html = 
            `<div class="card">
                <h2 class="card__city">${name} <span>${country}</span> </h2>
                <div class="card__weather">
                    <div class="card__value">${temp}<sup>°C</sup></div>
                    <img class="card__image" src="${icon}" alt="#">
                </div>
                <div class="description">${condition}</div>
            </div>`;
    header.insertAdjacentHTML('afterend', html);
}

async function getWeather(city) {
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}

form.onsubmit = async function (e) {
    e.preventDefault();
    let city = input.value.trim();
    const data = await getWeather(city);
    if(data.error) {
        removeCard();
        showError(data.error.message);
    }
    else {
        removeCard();
        const info = conditions.find(function(obj) {
            return obj.code === data.current.condition.code;
        })
        const dayTime = data.current.is_day ? info['day'] : info['night'];
        const dataCode = data.current.condition.code;
        const infoCode = info.code;
        let filePath = '';
        if(dataCode == infoCode) {
            const time = data.current.is_day ? 'day' : 'night';
            const fileDir = './assets/' + time + '/';
            filePath = fileDir + (info.icon) + '.png';
        }
        const weatherData = {
            name: data.location.name,
            country: data.location.country,
            temp: data.current.temp_c,
            condition: dayTime,
            icon: filePath,
        }
        showCard(weatherData);
    }
}
