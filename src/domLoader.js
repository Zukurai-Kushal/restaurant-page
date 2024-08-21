import diningImg from '../../global_resources/dwarves_eating.jpg';
import lambasImg from '../../global_resources/lambas.jpg';
import potatoesImg from '../../global_resources/fried_potatoes.webp';
import drinkingGif from '../../global_resources/gimli_drinking.gif'
import lotrPlacesImg from '../../global_resources/lotr_place_tags.png';

export function getHomePage(){
    
    const homePage = document.createElement('div');
    homePage.setAttribute('class','home-page flex-col');
    homePage.innerHTML = 
    `
    <div class="restaurant-img"></div>
    <a href="#middle" class="down-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
    </a>
    <div class="wide-container" id="middle">
        <img src=${diningImg} alt="Guests Dining" class="img-background">
        <section class="captions">Food is Best enjoyed with Companions</section>
    </div>
    <div class="flex-row">
        <div class="side-text"><q> One small bite will fill the <br> stomach of a grown man </q><br><section class="smaller-font">- Legolas</section></div>
        <img src=${lambasImg} alt="Lambas bread">
    </div>
    <div class="flex-row">
        <img src=${potatoesImg} alt="Potatoes">
        <div class="side-text">We got PHO TAY TOES! <br> <q> Boil 'em, mash 'em stick 'em in a stew </q> <br> <section class="smaller-font">- Samwise Gamgee</section></div>
    </div>
    <div class="flex-row" style="height: 450px;">
        <div class="side-text">Enough Ale to down <br> a Dwarf</div>
        <img src=${drinkingGif} alt="Drinking">
    </div>
    <div class="flex-row cuisine-panel">
        <img src=${lotrPlacesImg} alt="Cuisines" >
        <div class="side-text">We serve cuisines from six different lands</div>
    </div>
    `;
    return homePage;
};

export function getMenuPage(){
    return Node;
};

export function getLocationPage(){
    return Node;
    
};