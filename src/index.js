import "../../global_resources/style_reset.css";
import "../src/style.css";
import {getHomePage, getMenuPage, getLocationPage} from "./domLoader.js";

const contentPage = document.querySelector('#content');
const homeBtn = document.querySelector('#home-button');
const menuBtn = document.querySelector('#menu-button');
const locationBtn = document.querySelector('#location-button');

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
    // contentPage.appendChild(getLocationPage());
}

contentPage.appendChild(getHomePage());
console.log("Welcome to the Hobbit Hole");