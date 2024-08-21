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
    const menuPage = document.createElement('div');
    menuPage.setAttribute('class','menu-page');
    menuPage.innerHTML = 
    `
    <div class="food-menu-background">
        <div class="food-menu">
            <div class="title-card">
                <h4><u>Menu</u><h4>
                <h5>(v) Vegetarian, (gf) Gluten-free</h5>
            </div>
            <div class="food-card">
                <section class="title">
                    Bilbo's Scones
                </section>
                <section class="description">
                    Warm scones served with clotted cream and jam (v)
                </section>
                <section class="availability">
                    Breakfast
                </section>
            </div>
            <div class="food-card">
                <section class="title">
                    Rivendell Trout
                </section>
                <section class="description">
                    Pan-seared trout with lemon-dill sauce, served with wild rice (gf)
                </section>
                <section class="availability">
                    Second Breakfast
                </section>
            </div>
            <div class="food-card">
                <section class="title">
                    Treebeard's Salad
                </section>
                <section class="description">
                    Mixed greens, cucumber, tomatoes, roasted nuts, aged Ent-draught vinaigrette (v, gf)
                </section>
                <section class="availability">
                    Elevensies
                </section>
            </div>
            <div class="food-card">
                <section class="title">
                    Rohirrim Lamb Stew
                </section>
                <section class="description">
                    Tender lamb in a hearty vegetable broth, with crusty bread
                </section>
                <section class="availability">
                    Luncheon
                </section>
            </div>
            <div class="food-card">
                <section class="title">
                    Lembas Bread
                </section>
                <section class="description">
                    Elvish waybread, served with honey and berry preserves (v)
                </section>
                <section class="availability">
                    Afternoon Tea
                </section>
            </div>
            <div class="food-card">
                <section class="title">
                    Mordor Beef Skewers
                </section>
                <section class="description">
                    Spicy marinated beef with peppers and onions, served over basmati rice
                </section>
                <section class="availability">
                    Dinner
                </section>
            </div>
            <div class="food-card">
                <section class="title">
                    Shire Vegetable Pie
                </section>
                <section class="description">
                    Assorted vegetables baked in a flaky pie crust, served with roasted garlic mash (v)
                </section>
                <section class="availability">
                    Supper
                </section>
            </div>
            <div class="food-card">
                <section class="title">
                    Ent-Wives' Apple Pie
                </section>
                <section class="description">
                    Classic apple pie with a crispy oat topping (v)
                </section>
                <section class="availability">
                    Dessert
                </section>
            </div>
        </div>
    </div>

    <div class="drink-menu-background">
        <div class="drink-menu">
            <div class="title-card">
                <h4><u>Drink Menu</u><h4>
            </div>
            <div class="drink-card">
                <section class="title">
                    Ent-Draught
                </section>
                <section class="description">
                    Herbal ale brewed onsite
                </section>
            </div>
            <div class="drink-card">
                <section class="title">
                    Miruvor
                </section>
                <section class="description">
                    Elvish cordial, non-alcoholic
                </section>
            </div>
            <div class="drink-card">
                <section class="title">
                    Southfarthing Cider
                </section>
                <section class="description">
                    Sweet and sparkling apple cider
                </section>
            </div>
        
            <div class="drink-card">
                <section class="title">
                    Prancing Pony Ale
                </section>
                <section class="description">
                    House-brewed English-style ale
                </section>
            </div>
        
            <div class="drink-card">
                <section class="title">
                    Dorwinion Wine
                </section>
                <section class="description">
                    Rich red wine from the Elvish vineyards
                </section>
            </div>
        
            <div class="drink-card">
                <section class="title">
                    Galadriel's Mead
                </section>
                <section class="description">
                    Honey-sweetened mead, served chilled
                </section>
            </div>
        
        </div>
    </div>
    `;
    return menuPage;
};

export function getLocationPage(){
    return Node;
    
};