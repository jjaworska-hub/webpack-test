import '../scss/main.scss';
import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () =>{
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})


const firstName = "Joanna";
const age = 24;


const greet = (age,firstName) =>{
    console.log(
        `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lata.`
    );
}

greet(25,'Wojtek');


console.log(firstName);
console.log(age);

console.log(`Nazywam się ${firstName} i mam ${age} lata`);

const startOfDay = (moment().startOf('day').fromNow());

const timePlaceholder = document.querySelector('.time--js');
timePlaceholder.innerHTML = startOfDay;
