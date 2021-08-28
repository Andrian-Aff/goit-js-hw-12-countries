import './sass/main.scss';
import fetchCountries from './js/fetchCountries';

import { alert, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});

const debounce = require('lodash.debounce');


export const refs = {
    inputEl: document.querySelector('#country-name-input'),
    container: document.querySelector('.card-container'),
    body: document.querySelector('body'),
    
}

refs.inputEl.addEventListener('input', debounce(getCountry, 500));
refs.body.addEventListener('click', closeContryCard );
window.addEventListener('keydown', closeEscModal);


function getCountry(event) {
    // console.log(event.target.value);
    return fetchCountries(event.target.value)
}

function closeContryCard(){
    if (document.querySelector('.country__card')){
        refs.container.innerHTML = '';
        refs.inputEl.value = '';

    }
}

function closeEscModal(event) {
    const ESC_KEY_CODE = 'Escape';
    if (event.code === ESC_KEY_CODE) {
        closeContryCard();
    }
  }

