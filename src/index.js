import "../../global_resources/style_reset.css";
import "../src/style.css";
import {getHomePage, getMenuPage, getLocationPage} from "./domLoader.js";

const contentPage = document.querySelector('#content');
const homeBtn = document.querySelector('#home-button');
const menuBtn = document.querySelector('#menu-button');
const locationBtn = document.querySelector('#location-button');
const creditsLink = document.querySelector('#credits-link');
const creditsDialog = document.querySelector('#credits-dialog');
const closeCreditsBtn = document.querySelector('#close-credits-button');

homeBtn.onclick = ()=>{
    contentPage.textContent = '';
    contentPage.appendChild(getHomePage());
}

menuBtn.onclick = ()=>{
    contentPage.textContent = '';
    contentPage.appendChild(getMenuPage());
}

locationBtn.onclick = ()=>{
    contentPage.textContent = '';
    contentPage.appendChild(getLocationPage());
    
    const reservationBtn = document.querySelector('#reservation-button');
    const reservationDialog = document.querySelector('#reservation-dialog');
    const closeReservationBtn = document.querySelector('#close-form-button');
    reservationBtn.onclick = ()=>reservationDialog.showModal();
    closeReservationBtn.onclick = ()=>reservationDialog.close();
}

contentPage.appendChild(getHomePage());

creditsLink.onclick = ()=>creditsDialog.showModal();
closeCreditsBtn.onclick = ()=>creditsDialog.close();

console.log("Welcome to the Hobbit Hole");