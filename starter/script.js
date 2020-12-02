//
//
//

'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) {
//       throw new Error(`${errorMsg} (${response.status})`);
//     }

//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   getJSON(
//     `https://restcountries.eu/rest/v2/name/${country}`,
//     'Country Not Found'
//   )
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) throw new Error('No Neighbor Found');

//       // Country 2
//       return getJSON(
//         `https://restcountries.eu/rest/v2/alpha/${neighbour}`,
//         'Country Not Found'
//       );
//     })
//     .then(data => {
//       renderCountry(data, 'neighbour');
//     })
//     .catch(err => {
//       console.error(`${err}`);
//       renderError(`Something went wrong -- ${err.message} -- Try again Bozo`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('usa');
// });

// const renderCountry = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} million</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].code}</p>
//     </div>
//   </article>
// `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

//////////////////////////////////////////////
//////////////////////////////////////////////

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Problem With Geocoding ${res.status}`);
//       return res.json();
//     })
//     .then(data => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.state} - ${data.country}`);
//       return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
//     })
//     .then(response => {
//       if (!response.ok)
//         throw new Error(`Country Not Found(${response.status})`);
//       return response.json();
//     })

//     .then(data => renderCountry(data[0]))
//     .catch(err =>
//       console.error(`${err.message}
//     😈`)
//     );
// };

// whereAmI(52.508, 13.381);
// whereAmI(27.8455, -82.65);
// whereAmI(27.8457041, -82.6527537);

//////////////////////////////////////////////
//////////////////////////////////////////////

// console.log('Test Start');

// const timer = setTimeout(() => {
//   console.log('0 sec timer'), 0;
// });

// setInterval(() => timer, 5);

// Promise.resolve('Resolved Promise 1').then(res => {
//   console.log(res);
// });

// Promise.resolve(`Resolved Promise 2`).then(res => {
//   for (let i = 0; i < 1000; i++) {}
//   console.log(res);
// });

// console.log('Test End');

//////////////////////////////////////////////
//////////////////////////////////////////////

// const lotteryPromise = new Promise(function (resolve, reject) {
//   let num = Math.random().toFixed(2);

//   setTimeout(function () {
//     if (num >= 0.5) {
//       resolve(`YOU WON BOZO, with a score of ${num}`);
//       // document.body.style.backgroundColor = 'blue';
//     } else {
//       reject(new Error(`YOU LOST BOZO, with a score of ${num}`));
//     }
//   }, 1000);
// });

// lotteryPromise.then(res => console.log(res)).catch(error => console.log(error));

const wait = seconds => {
  return new Promise(resolve => {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log(`I waited for 2 seconds`);
    return wait(1);
  })
  .then(() => console.log(`I waited for 1 second`));

//////////////////////////////////////////////
//////////////////////////////////////////////
