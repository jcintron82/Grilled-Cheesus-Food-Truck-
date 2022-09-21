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
const recDishes5 = document.createElement('div')
const recDishes6 = document.createElement('div')


const recDish1ImgContainer = document.createElement('div')
const recDish2ImgContainer = document.createElement('div')
const recDish3ImgContainer = document.createElement('div')
const recDish4ImgContainer = document.createElement('div')
const recDish5ImgContainer = document.createElement('div')
const recDish6ImgContainer = document.createElement('div')

const recDish1Img = document.createElement('img');
const recDish2Img = document.createElement('img');
const recDish3Img = document.createElement('img');
const recDish4Img = document.createElement('img');
const recDish5Img = document.createElement('img');
const recDish6Img = document.createElement('img');

const recDish1Desc = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,')
const recDish2Desc = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,')
const recDish3Desc = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,')
const recDish4Desc = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,')
const recDish5Desc = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,')
const recDish6Desc = document.createTextNode('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,')




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
newDiv(logoDivContainer, cheesusDiv, 'cheesus')


//CREATES BUTTONS IN HEADER
aboutUsTab.appendChild(aboutUsTabBtnMenu);
aboutUsTabBtnMenu.className = 'navBtns';
aboutUsTabBtnMenu.textContent = 'About Us';

menuTab.appendChild(menuTabBtn);
menuTabBtn.className = 'navBtns';
menuTabBtn.textContent = "Menu";

contactUsTab.appendChild(contactUsTabBtnMenu);
contactUsTabBtnMenu.className = 'contactUsBtn'
contactUsTabBtnMenu.textContent = 'Contact Us'

//ADDS TEXT TO HEADER LOGO CONTAINER
grilledDiv.textContent = 'Grilled'
cheesusDiv.textContent = 'Cheesus'


//ADDS LOGO TO HEADER





//CREATES MAIN BODY
newDiv(content, div1, 'menuMainPage' );
newDiv(div1, recommendedDishesContainer, 'recommendedDishesContainer');



//ADDS DIVS FOR LAYOUT IN RECOMMENDED DISHES CONTAINER 
newDiv(recommendedDishesContainer, recommendedDishesHeader, 'recommendedDishesHeader')
newDiv(recommendedDishesContainer, recommendedDishesContentContainer, 'recommendedDishesContentContainer')
newDiv(recommendedDishesContentContainer, recDishes1, 'recDishes')
newDiv(recommendedDishesContentContainer, recDishes2, 'recDishes')
newDiv(recommendedDishesContentContainer, recDishes3, 'recDishes')
newDiv(recommendedDishesContentContainer, recDishes4, 'recDishes');
newDiv(recommendedDishesContentContainer, recDishes5, 'recDishes');
newDiv(recommendedDishesContentContainer, recDishes6, 'recDishes');


newDiv(recDishes1, recDish1ImgContainer, 'recDishesImgContainer')
newDiv(recDishes2, recDish2ImgContainer, 'recDishesImgContainer')
newDiv(recDishes3, recDish3ImgContainer, 'recDishesImgContainer')
newDiv(recDishes4, recDish4ImgContainer, 'recDishesImgContainer')
newDiv(recDishes5, recDish5ImgContainer, 'recDishesImgContainer')
newDiv(recDishes6, recDish6ImgContainer, 'recDishesImgContainer')

addImage(recDish1ImgContainer, recDish1Img, 'stock.jpg', 'recDishImgs')
addImage(recDish2ImgContainer, recDish2Img, 'stock.jpg', 'recDishImgs')
addImage(recDish3ImgContainer, recDish3Img, 'stock.jpg', 'recDishImgs')
addImage(recDish4ImgContainer, recDish4Img, 'stock.jpg', 'recDishImgs')
addImage(recDish5ImgContainer, recDish5Img, 'stock.jpg', 'recDishImgs')
addImage(recDish6ImgContainer, recDish6Img, 'stock.jpg', 'recDishImgs')

recommendedDishesHeader.textContent = 'Menu';
recDishes1.appendChild(recDish1Desc)
recDishes2.appendChild(recDish2Desc)
recDishes3.appendChild(recDish3Desc)
recDishes4.appendChild(recDish4Desc)
recDishes5.appendChild(recDish5Desc)
recDishes6.appendChild(recDish6Desc)











}

