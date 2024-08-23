import diningImg from '../../global_resources/dwarves_eating.jpg';
import lambasImg from '../../global_resources/lambas.jpg';
import potatoesImg from '../../global_resources/fried_potatoes.webp';
import drinkingGif from '../../global_resources/gimli_drinking.gif'
import lotrPlacesImg from '../../global_resources/lotr_place_tags.png';
import restaurantImg from '../../global_resources/irl_shire.jpg';

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
                    Elevenses
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
    const locationPage = document.createElement('div');
    locationPage.setAttribute('class', 'location-page flex-col');
    locationPage.innerHTML =
    `
    <div class="wide-container">
        <img src=${restaurantImg} alt="Front of restaurant">
    </div>
    <div class="location-info">
        <div class="text-info">
            <section>
                <svg width="50px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
                501 Buckland Road, Matamata 3472, New Zealand
            </section>
            <table>
                <caption>Serving Hours <br> (Monday - Friday)</caption>
                <tr>
                    <td>Breakfast</td>
                    <td>7 a.m.</td>
                </tr>
                <tr>
                    <td>Second Breakfast</td>
                    <td>9 a.m.</td>
                </tr>
                <tr>
                    <td>Elevenses</td>
                    <td>11 a.m.</td>
                </tr>
                <tr>
                    <td>Luncheon</td>
                    <td>1 p.m.</td>
                </tr>
                <tr>
                    <td>Afternoon Tea</td>
                    <td>3 p.m.</td>
                </tr>
                <tr>
                    <td>Dinner</td>
                    <td>6 p.m.</td>
                </tr>
                <tr>
                    <td>Supper</td>
                    <td>9 p.m.</td>
                </tr>
            </table>
        </div>
        <div class="map-container">
            <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Hobbiton%20Movie%20Set%20and%20Farm%20Tours,%20attraction,%20Matamata,%20New%20Zealand+(The%20Hobbit%20Hole)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
    </div>
    <div class="reservation-container">
        <section>
            Don't be kept waiting,<br>Make a Reservation
        </section>
        <button id="reservation-button">Reserve Seats</button>
        <dialog id="reservation-dialog">
            <h2><u>Reservation Form</u></h2>
            <button id="close-form-button">
                <svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 6.91L17.09 4L12 9.09L6.91 4L4 6.91L9.09 12L4 17.09L6.91 20L12 14.91L17.09 20L20 17.09L14.91 12L20 6.91Z" /></svg>
            </button>
            <form action="" id="reservation-form">
                <div class="form-long-div">
                    <label for="name">
                        <svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" /></svg>
                        Name
                    </label>
                    <input type="text" name="name" id="name" placeholder="Sméagol" required>
                </div>
                <div class="form-half-div">
                    <label for="date">
                        <svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z" /></svg>
                        Date
                    </label>
                    <input type="date" name="date" id="date" required>
                </div>
                <div class="form-quarter-div">
                    <label for="time">
                        <svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M12.5 12.8L7.7 15.6L7 14.2L11 11.9V7H12.5V12.8Z" /></svg>
                        Time
                    </label>
                    <select name="time">
                        <optgroup label="Serving Hour">
                            <option value="breakfast">Breakfast</option>
                            <option value="secondBreakfast" selected>Second Breakfast</option>
                            <option value="elevenses">Elevenses</option>
                            <option value="luncheon">Luncheon</option>
                            <option value="afteroonTea">Afternoon Tea</option>
                            <option value="dinner">Dinner</option>
                            <option value="supper">Supper</option>
                        </optgroup>
                    </select>
                </div>
                <div class="form-quarter-div">
                    <label for="guests">
                        <svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" /></svg>
                        Guests
                    </label>
                    <input type="number" name="guests" id="guests" required>
                </div>
                <div class=form-half-div>
                    <label for="phone">
                        <svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12,3C7.46,3 3.34,4.78 0.29,7.67C0.11,7.85 0,8.1 0,8.38C0,8.66 0.11,8.91 0.29,9.09L2.77,11.57C2.95,11.75 3.2,11.86 3.5,11.86C3.75,11.86 4,11.75 4.18,11.58C4.97,10.84 5.87,10.22 6.84,9.73C7.17,9.57 7.4,9.23 7.4,8.83V5.73C8.85,5.25 10.39,5 12,5C13.59,5 15.14,5.25 16.59,5.72V8.82C16.59,9.21 16.82,9.56 17.15,9.72C18.13,10.21 19,10.84 19.82,11.57C20,11.75 20.25,11.85 20.5,11.85C20.8,11.85 21.05,11.74 21.23,11.56L23.71,9.08C23.89,8.9 24,8.65 24,8.37C24,8.09 23.88,7.85 23.7,7.67C20.65,4.78 16.53,3 12,3M9,7V10C9,10 3,15 3,18V22H21V18C21,15 15,10 15,10V7H13V9H11V7H9M12,12A4,4 0 0,1 16,16A4,4 0 0,1 12,20A4,4 0 0,1 8,16A4,4 0 0,1 12,12M12,13.5A2.5,2.5 0 0,0 9.5,16A2.5,2.5 0 0,0 12,18.5A2.5,2.5 0 0,0 14.5,16A2.5,2.5 0 0,0 12,13.5Z" /></svg>
                        Phone Number
                    </label>
                    <input type="tel" name="phone" id="phone" required>
                </div>
                <div class=form-half-div>
                    <label for="email">
                        <svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z" /></svg>    
                        Email (optional)
                    </label>
                    <input type="email" name="email" id="email" placeholder="gollum@preacious.com">
                </div>
                <div class="form-long-div">
                    <label for="note">
                        <svg width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.95,14.93L11.19,9.27L19.68,2.2C20.07,1.81 20.72,1.81 21.09,2.2L21.8,2.91C22.19,3.28 22.19,3.93 21.8,4.32L14.73,12.81L9.07,17.05L6.95,14.93M8.36,17.76L6.24,15.64L3.41,17.05L2,21.29L4.12,19.17C4.32,19 4.63,19 4.83,19.17C5,19.37 5,19.68 4.83,19.88L2.71,22L6.95,20.59L8.36,17.76Z" /></svg>
                        Note (optional)
                    </label>
                    <textarea name="note" id="note" cols="30" rows="5"></textarea>
                </div>
                <button class="form-long-div" type="submit">Make Reservation</button>
            </form>
        </dialog>
    </div>
    `;
    return locationPage;
};