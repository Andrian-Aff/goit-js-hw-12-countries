
import countryCardTpl from '../templates/countryCardTpl.hbs';
import countryListTpl from '../templates/countryListTpl.hbs';
import fetchCountries from '../js/fetchCountries'
import { refs } from '../index';

export default renderMarkup;

import { error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/confirm/dist/PNotifyConfirm.css";

function renderMarkup(arreyCountries) {
    refs.cardmarkupEl.innerHTML = '';
    if (arrCountries.length === 1) {
        renderCard(arreyCountries);
    } else if (arreyCountries.length > 1 && arreyCountries.length <= 10) {
        
        renderListCountry(arreyCountries);
        renderOneOfMany(arreyCountries);
    }
    else if (arreyCountries.length > 10) {
        notifError();
    }else {
        onFetchError();
    }
}

function openOnClick (event){
    console.log(event.target)
    console.log(event.target.textContent)
    fetchCountries(event.target.textContent)
 }

function renderListCountry(arreyCountries) {
    const markup = countryListTpl(arreyCountries);
    refs.cardmarkupEl.innerHTML = markup;
}
    

function renderCard(country) {
    refs.inputEl.value = '';     
    //console.log(country);
    const markup = countryCardTpl(country);
    refs.cardmarkupEl.innerHTML = markup;
}

function notifError() {
error({
    title: "Too many matches found!",
    text: "Please enter a more specific query!",
    delay: 1500,
});
};

function renderOneOfMany(){
    let countryListEl = document.querySelector('.country__list')
    countryListEl.addEventListener("click", openOnClick);
}