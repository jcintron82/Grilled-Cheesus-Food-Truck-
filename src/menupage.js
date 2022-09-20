//FUNCTION TO CLEAR THE DOM WHEN AN EVENT LISTENER IN THE INDEX FILE IS CALLED
export  function clearDom() {
  content.innerHTML = '';
}

//VARIABLES FOR BASIC PAGE LAYOUT
let content = document.getElementById('content');
const div1 = document.createElement('div')//is the main body/background
const header = document.createElement('header')

//VARIABLES FOR THE RECOMMENDED DISHES BOX 
const recommendedDishesContainer = document.createElement('div')
const recommendedDishesHeader = document.createElement('div')
const recommendedDishesContentContainer = document.createElement('div')
const recDishes1 = document.createElement('div')
const recDishes2 = document.createElement('div')
const recDishes3 = document.createElement('div')
const recDishes4 = document.createElement('div')


//VARIABLES FOR THE SIDE DISHES BOX 
const sideDishesContainer = document.createElement('div')
const sideDishesHeader = document.createElement('header')
const sideDishesContentContainer = document.createElement('div')
const sideDishes1 = document.createElement('div')
const sideDishes2 = document.createElement('div')
const sideDishes3 = document.createElement('div')
const sideDishes4 = document.createElement('div')
const sideDishesContainerFooter = document.createElement('div')
const sideDishesFooterSides = document.createElement('div')
const sideDishesFooterDrinks = document.createElement('div')


//VARIABLES FOR LOGO IN HEADER
const logoDivContainer = document.createElement('div')
const logo = document.createElement('img');
const grilledDiv = document.createElement('div')
const cheesusDiv = document.createElement('div')

//VARIABLES FOR NAV BUTTONS
const tabs = document.createElement('ul');
export const aboutUsTab = document.createElement('li')
export const aboutUsTabBtnMenu=document.createElement('button')
export const menuTab = document.createElement('li')
export const menuTabBtn =document.createElement('button')
export const contactUsTab = document.createElement('li')
export const contactUsTabBtnMenu =document.createElement('button')

//RENDERS THE MENU PAGE
export function createMenuPage() {

  //creates new div elements
 function newDiv(parent, newdiv, style, ){
    parent.appendChild(newdiv);
    newdiv.className = style;
  
}

//adds images to element(s)
 function addImage(parent, child, src, style) {
    child.src = src;
    parent.appendChild(child)
    logo.className = style

}

//CREATES THE HEADER
newDiv(content, header, 'header');
newDiv(header, tabs, 'tabsContainer')
newDiv(tabs, aboutUsTab, 'tabs')
newDiv(tabs, menuTab, 'tabs')
newDiv(tabs, contactUsTab, 'tabs')
newDiv(header, logoDivContainer, 'logoDivContainer' )
newDiv(logoDivContainer, grilledDiv, 'grilled')
newDiv(logoDivContainer, cheesusDiv, 'grilled')


//CREATES BUTTONS IN HEADER
aboutUsTab.appendChild(aboutUsTabBtnMenu);
aboutUsTabBtnMenu.className = 'aboutUsBtn';
aboutUsTabBtnMenu.textContent = 'About Us';

menuTab.appendChild(menuTabBtn);
menuTabBtn.className = 'navBtns';
menuTabBtn.textContent = "Menu";

contactUsTab.appendChild(contactUsTabBtnMenu);
contactUsTabBtnMenu.className = 'navBtns'
contactUsTabBtnMenu.textContent = 'Contact Us'

//ADDS TEXT TO HEADER LOGO CONTAINER
grilledDiv.textContent = 'Grilled'
cheesusDiv.textContent = 'Cheesus'

//ADDS LOGO TO HEADER LOGO CONTAINER
addImage(header, logo, 'cheese.png', 'mainPageLogoImg')


//CREATES MAIN BODY
newDiv(content, div1, 'menuMainPage' );
newDiv(div1, recommendedDishesContainer, 'recommendedDishesContainer');
newDiv(div1, sideDishesContainer, 'sideDishesContainer'  )


//ADDS DIVS FOR LAYOUT IN RECOMMENDED DISHES CONTAINER 
newDiv(recommendedDishesContainer, recommendedDishesHeader, 'recommendedDishesHeader')
newDiv(recommendedDishesContainer, recommendedDishesContentContainer, 'recommendedDishesContentContainer')
newDiv(recommendedDishesContentContainer, recDishes1, 'recDishes')
newDiv(recommendedDishesContentContainer, recDishes2, 'recDishes')
newDiv(recommendedDishesContentContainer, recDishes3, 'recDishes')
newDiv(recommendedDishesContentContainer, recDishes4, 'recDishes');


//ADDS DIVS FOR LAYOUT IN SIDE DISHES CONTAINER 
newDiv(sideDishesContainer, sideDishesHeader, 'recommendedDishesHeader')
newDiv(sideDishesContainer, sideDishesContentContainer, 'recommendedDishesContentContainer')
newDiv(sideDishesContentContainer, sideDishes1, 'recDishes')
newDiv(sideDishesContentContainer, sideDishes2, 'recDishes')
newDiv(sideDishesContentContainer, sideDishes3, 'recDishes')
newDiv(sideDishesContentContainer, sideDishes4, 'recDishes');
newDiv(sideDishesContainer, sideDishesContainerFooter, 'sideDishesContainerFooter');
newDiv(sideDishesContainerFooter, sideDishesFooterSides, 'sideDishesContainerFooter')
newDiv(sideDishesContainerFooter, sideDishesFooterDrinks, 'sideDishesContainerFooter')





recommendedDishesHeader.textContent = 'dewqdqw'


}

